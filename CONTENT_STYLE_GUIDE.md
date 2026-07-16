# OS Support content standard

This standard keeps the Dutch and English knowledge base accurate, consistent and useful for customers, business owners and developers.

## Content principles

1. Lead with the outcome or problem, not with background information.
2. Use direct, calm language: **je** in Dutch and **you** in English.
3. Explain technical terms the first time they appear.
4. Give one safe, testable action per numbered step.
5. State prerequisites, impact, verification and rollback where relevant.
6. Never ask a customer to send a password, 2FA code, private key or API secret.
7. Do not present a workaround as a permanent fix without explaining the trade-off.
8. Keep product terminology consistent: **OS Cloud**, **WordPress**, **SFTP**, **2FA**.

## Recommended article structure

Use only the sections that help the reader, in this order:

```markdown
# Task or error in customer language

Short explanation of the outcome, symptom or scope.

## Before you begin

Prerequisites, access level, backup and risk information.

## Steps or resolution

1. One action.
2. One action.

## Verify the result

Observable success criteria.

## Troubleshooting

Likely failure modes and safe next steps.

## Roll back

Required for changes that can affect availability, data or security.
```

## Dutch and English

- Dutch is the root locale (`nl-NL`).
- English uses British spelling and the `en-GB` locale.
- Every article under `guide/` or `developers/` requires a counterpart under `en-us/`.
- Translate intent and interface labels; do not translate code, protocol names or literal error messages.
- Keep headings and the order of information aligned across languages.

## Images and accessibility

- Describe the relevant screen or action in the `alt` text.
- Do not use `alt="image"`, filenames or decorative descriptions.
- Crop screenshots to the relevant interface and remove personal data, domains, tokens and email content.
- Repeat critical information in text; never make a screenshot the only instruction.

## Technical and policy governance

- Test commands and code against a supported environment before publication.
- Use a staging environment for destructive, security-sensitive or availability-affecting changes.
- Add an explicit backup and rollback for database, DNS, permissions, authentication and production changes.
- Policy statements about billing, deletion, retention, security or availability require confirmation by the responsible owner.
- Review time-sensitive UI instructions and third-party integrations after material product changes.

## Required checks

Run before merging:

```bash
npm run docs:check
```

The audit rejects empty pages, missing translations, placeholder links, generic image alt text and broken internal Markdown links. The VitePress build then validates site generation.
