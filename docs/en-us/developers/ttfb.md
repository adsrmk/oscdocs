---
description: "Time to First Byte (TTFB) is a foundational performance metric."
audience: developers
---

# TTFB

**Time to First Byte (TTFB)** is a foundational performance metric. It measures the time between the browser's request for a page and the arrival of the **first byte** of data from the server. While metrics like LCP focus on the front-end, TTFB is the primary indicator of **server responsiveness** and **network efficiency**.

<img width="1654" height="477" alt="Screenshot of TTFB" src="https://github.com/user-attachments/assets/bef2626d-2ec1-48ae-840b-e87d9c441c4b" />

## How TTFB is calculated

TTFB isn't a single measure — it's the result of three distinct phases working together:

- **Request transmission** — How fast the browser's request reaches the server over the network.
- **Server processing** — How long the server spends handling the request: executing application logic (PHP, Node.js), querying databases, and generating the HTML.
- **Response delivery** — How quickly the first byte of the generated response is sent back to the user's browser.

## Target benchmarks

Several tools are available for measuring TTFB. We recommend [FlyingTTFB↗](https://flyingttfb.com) for unlimited global results.

The table below outlines the recommended performance ranges and how each impacts user experience:

| TTFB range | Rating | Notes |
| --- | --- | --- |
| **< 200 ms** | Gold standard | High-performance sites. |
| **< 600 ms** | Good | Acceptable performance for most sites. |
| **600 – 1,800 ms** | Needs improvement | Will impact user experience. |
| **> 1,800 ms** | Poor | Likely to cause noticeable delays. |
