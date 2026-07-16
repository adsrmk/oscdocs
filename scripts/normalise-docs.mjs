import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../docs/', import.meta.url))

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

function plainText(value) {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function descriptionFrom(content, english, audience) {
  const body = content.replace(/^---\n[\s\S]*?\n---\n/, '')
  const lines = body.split('\n')
  const title = plainText(lines.find((line) => /^#\s+/.test(line))?.replace(/^#\s+/, '') || 'OS Cloud')
  const firstParagraph = lines.find((line) => {
    const value = line.trim()
    return value &&
      !value.startsWith('#') &&
      !value.startsWith('<') &&
      !value.startsWith(':::') &&
      !value.startsWith('```') &&
      !value.startsWith('- ') &&
      !/^\d+\.\s/.test(value) &&
      !value.startsWith('|') &&
      !value.startsWith('![')
  })

  const text = plainText(firstParagraph || '')
  const firstSentence = text.match(/^.{20,240}?[.!?](?=\s|$)/)?.[0]
  if (firstSentence) return firstSentence
  if (text && text.length <= 240) return text

  if (audience === 'developers') {
    return english
      ? `Technical guidance for ${title}, including implementation, verification, risks and rollback.`
      : `Technische uitleg over ${title}, inclusief implementatie, verificatie, risico's en rollback.`
  }

  return english
    ? `Practical guidance for ${title}, with safe steps, checks and solutions for common issues.`
    : `Praktische uitleg over ${title}, met veilige stappen, controles en oplossingen voor veelvoorkomende problemen.`
}

for (const file of await markdownFiles(root)) {
  const relativePath = relative(root, file)
  const english = relativePath.startsWith('en-us/')
  const lines = (await readFile(file, 'utf8')).split('\n')
  let heading = english ? 'the current step' : 'de huidige stap'
  let imageNumber = 0

  const output = []
  for (const line of lines) {
    if (/^<br\s*\/?\s*>\s*$/.test(line.trim())) continue

    const headingMatch = line.match(/^#{1,3}\s+(.+)$/)
    if (headingMatch) heading = plainText(headingMatch[1])

    let next = line
    if (next.includes('alt="image"')) {
      imageNumber += 1
      const suffix = imageNumber > 1 ? ` (${imageNumber})` : ''
      const alt = english
        ? `Screenshot of ${heading}${suffix}`
        : `Schermafbeelding van ${heading}${suffix}`
      next = next.replace('alt="image"', `alt="${alt.replaceAll('"', '&quot;')}"`)
    }

    output.push(next)
  }

  let content = output.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n'
  const audience = relativePath.includes('/developers/') || relativePath.startsWith('developers/')
    ? 'developers'
    : 'customers'

  if (!content.startsWith('---\n')) {
    const description = descriptionFrom(content, english, audience)
    content = `---\ndescription: ${JSON.stringify(description)}\naudience: ${audience}\n---\n\n${content}`
  } else if (/^description:.*….*$/m.test(content)) {
    const description = descriptionFrom(content, english, audience)
    content = content.replace(/^description:.*$/m, `description: ${JSON.stringify(description)}`)
  }
  await writeFile(file, content)
}
