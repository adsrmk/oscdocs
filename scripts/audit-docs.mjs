import { access, readdir, readFile } from 'node:fs/promises'
import { dirname, extname, join, normalize, relative, resolve } from 'node:path'

const docsRoot = resolve(new URL('../docs/', import.meta.url).pathname)
const failures = []

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (entry.name === '.vitepress') continue
    const path = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await markdownFiles(path))
    if (entry.isFile() && entry.name.endsWith('.md')) files.push(path)
  }

  return files
}

function report(file, message) {
  failures.push(`${relative(docsRoot, file)}: ${message}`)
}

function routeToFile(route) {
  const pathOnly = route.split('#')[0].split('?')[0]
  const isDirectoryRoute = pathOnly.endsWith('/')
  const clean = pathOnly.replace(/^\//, '').replace(/\/$/, '')
  if (!clean) return join(docsRoot, 'index.md')
  return join(docsRoot, isDirectoryRoute ? clean : `${clean}.md`, isDirectoryRoute ? 'index.md' : '')
}

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

const files = await markdownFiles(docsRoot)
const relativeFiles = new Set(files.map((file) => relative(docsRoot, file)))

for (const file of files) {
  const content = await readFile(file, 'utf8')
  const rel = relative(docsRoot, file)

  if (!content.trim()) report(file, 'empty Markdown file')
  if (/alt=["']image["']/i.test(content)) report(file, 'generic image alt text')
  if (/\]\(#\)/.test(content)) report(file, 'placeholder link to #')
  if (/^<br\s*\/?\s*>\s*$/m.test(content)) report(file, 'manual <br> used for layout')
  if (!/^---\n[\s\S]*?\n---\n/.test(content)) report(file, 'missing frontmatter')
  if (!/^description:\s*\S/m.test(content)) report(file, 'missing description')
  if (!/^audience:\s*(customers|developers)\s*$/m.test(content)) report(file, 'missing or invalid audience')
  if (!/^#\s+\S/m.test(content) && !/^layout:\s*home/m.test(content)) {
    report(file, 'missing level-one title')
  }

  const markdownLinks = [...content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)]
  for (const [, rawTarget] of markdownLinks) {
    const target = rawTarget.trim().replace(/^<|>$/g, '')
    if (!target || target.startsWith('#') || /^(https?:|mailto:|tel:)/.test(target)) continue

    if (rel.startsWith('en-us/') && target.startsWith('/') &&
        !target.startsWith('/en-us/') && !target.startsWith('/OSCLO') && !target.startsWith('/emblem')) {
      report(file, `English page links to the Dutch route ${target}`)
      continue
    }

    const candidate = target.startsWith('/')
      ? routeToFile(target)
      : normalize(resolve(dirname(file), target.split('#')[0]))
    const markdownCandidate = extname(candidate) ? candidate : `${candidate}.md`
    if (!await exists(candidate) && !await exists(markdownCandidate)) {
      report(file, `broken internal link ${target}`)
    }
  }
}

for (const rel of relativeFiles) {
  if (!rel.startsWith('guide/') && !rel.startsWith('developers/')) continue
  const counterpart = join('en-us', rel)
  if (!relativeFiles.has(counterpart)) report(join(docsRoot, rel), `missing English counterpart ${counterpart}`)
}

for (const rel of relativeFiles) {
  if (!rel.startsWith('en-us/guide/') && !rel.startsWith('en-us/developers/')) continue
  const counterpart = rel.replace(/^en-us\//, '')
  if (!relativeFiles.has(counterpart)) report(join(docsRoot, rel), `missing Dutch counterpart ${counterpart}`)
}

if (failures.length) {
  console.error(`Documentation audit failed with ${failures.length} issue(s):\n`)
  console.error(failures.map((failure) => `- ${failure}`).join('\n'))
  process.exit(1)
}

console.log(`Documentation audit passed for ${files.length} Markdown pages.`)
