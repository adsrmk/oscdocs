---
description: "Check browser support with Can I Use and decide when progressive enhancement, a fallback, or additional testing is required."
audience: developers
---

# Support / Compatibility Tables

[Can I Use↗](https://caniuse.com/) provides up-to-date support tables for front-end web technologies in desktop and mobile browsers.

It shows which features are broadly available and where a fallback or alternative implementation is required. Base your decision on the browsers and versions your organisation actually supports; an overall green percentage is not enough.

## How to use the data

1. Find the HTML, CSS, or JavaScript feature you plan to use.
2. Review browser-specific limitations and footnotes, not just the table colour.
3. Compare the result with your analytics and agreed browser matrix.
4. Use **progressive enhancement** where appropriate: core functionality remains available while modern browsers receive additional capabilities.
5. Test the final implementation on real devices or dependable browser environments.

::: warning
Vendor prefixes and polyfills do not solve every compatibility issue. Also review performance, accessibility, and behaviour when JavaScript is unavailable or delayed.
:::
