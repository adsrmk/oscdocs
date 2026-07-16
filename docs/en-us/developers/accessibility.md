---
description: "Use Accessibility Checker as an initial automated review and combine its findings with manual WCAG testing."
audience: developers
---

# Accessibility Checker

[Accessibility Checker↗](https://AccessibilityChecker.org/) scans web pages for known accessibility issues and maps findings to standards such as **WCAG**, **ADA**, **Section 508**, **AODA**, and the **European Accessibility Act**. Treat it as the start of your quality review, not as a complete declaration of compliance.

## Recommended workflow

1. Scan representative pages, including the homepage, forms, account pages, and key landing pages.
2. Prioritise issues that prevent navigation or task completion, such as missing form labels, insufficient contrast, and inoperable controls.
3. Fix the component or template that causes the issue so every affected page benefits.
4. Retest and document which findings were resolved or consciously accepted.

## Always test manually

Automated scanners detect only some accessibility issues. Also test keyboard navigation, visible focus, 200% zoom, form errors, and reading order with a screen reader. See [WCAG](/en-us/developers/wcag), [ARIA](/en-us/developers/ARIA), and [semantic HTML](/en-us/developers/semantic_html) for implementation guidance.

::: tip
Include accessibility in design, development, and acceptance testing. Retrofitting it later usually takes more effort and increases inconsistency.
:::
