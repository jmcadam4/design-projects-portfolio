# AI Disclosure

This page is a running summary of AI usage, it summarizes what each chat was used for, prompt by prompt. I primarily use Claude.

## A1 — Fuel Pump Teardown

Claude (claude.ai) was used as a reference while working through the BMW E30 fuel pump, mostly to understand how a regenerative turbine works and how a part like this gets manufactured. Two figures in the A1 write-up came out of this session. Factory values were retrieved through web searches of Bosch datasheets, Bentley test figures and E30 forums rather than from the model's own recall.

| Prompt | Date | What it produced |
| --- | --- | --- |
| 1 | 24 August 2026 | Whether the pump can be opened — crimped can, why a teardown is one-way |
| 2 | 24 August 2026 | Full design and manufacturing walkthrough: turbine vs. gerotor, molded impeller, sintered housings, brushed motor, stamped hanger, brazing vs. spot welding, plating |
| 3 | 24 August 2026 | Diagram of the flow path inside a regenerative turbine |
| 4 | 24 August 2026 | How the impeller vanes drive the fluid |
| 5 | 24 August 2026 | Factory spec analysis for the E30 pump — flow, pressure, current draw |
| 6 | 24 August 2026 | Why the "12 V" nameplate is not a design point; the pump actually runs at 13.5–14.2 V |
| 7 | 24 August 2026 | Why BMW moved from a two-pump setup to a single in-tank pump — used in the write-up |
| 8 | 24 August 2026 | The pressure-buildup graph in the A1 page |
| 9 | 24 August 2026 | Where fuel leaks internally and why clearance dominates it |
| 10 | 24 August 2026 | Poiseuille leakage explained term by term — where the cubed gap height comes from |
| 11 | 24 August 2026 | Identified μ (mu) and its common uses |
| 12 | 24 August 2026 | Recalculated the pump from dimensions I measured off the part (40 / 35 / 31 / 25 mm) |
| 13 | 24 August 2026 | Pump operating speed — roughly 8,000–9,000 rpm for a return-style system |
| 14 | 24 August 2026 | Heating effect of the pump on 10 gallons of fuel at 30 °F |
| 15 | 24 August 2026 | Housekeeping — exporting the chat. No technical content. |

## Website Building

Claude (Cowork) was used to format the pages and configure the site. No technical content was written or changed.

| Prompt | Date | What it produced |
| --- | --- | --- |
| 1 | 24 August 2026 | Placed the image rows through the A1 fuel pump section |
| 2 | 24 August 2026 | Heading structure for A1; table-of-contents permalinks, a heading stylesheet, and a fix to a broken A11 nav link |
| 3 | 24 August 2026 | Added the bottom hanger spot weld image |
| 4 | 24 August 2026 | Added the two portfolio screenshots to the website reviews |
| 5 | 24 August 2026 | Explained what `mkdocs.yml` and `extra.css` do — no changes made |
| 6 | 24 August 2026 | How to create a file inside a new folder on GitHub — no changes made |
| 7 | 24 August 2026 | Built this page |

### A2 Page Layout

Claude (claude.ai) was used to lay out the A2 page — placing the figures, writing the image captions, adding the section headings, and adding the front matter that drives the homepage card. No engineering content was written or changed. The session started as an attempt at an image carousel, which was dropped after it would not work reliably, and finished as a plain figure layout. One prompt overwrote the page with an out-of-date copy of my text, which I recovered from this repository's commit history.

| Prompt | Date | What it produced |
| --- | --- | --- |
| 1 | 2 September 2026 | A standalone image carousel — HTML, CSS and JavaScript |
| 2 | 2 September 2026 | What was needed to apply it to the repository; no GitHub write access from the session |
| 3 | 2 September 2026 | Carousel rebuilt for MkDocs Material after reading the repo — four files |
| 4 | 2 September 2026 | Push instructions and confirmation of the Pages deploy workflow. No content. |
| 5 | 2 September 2026 | Diagnosed the carousel showing one cropped image; rewritten to work without JavaScript |
| 6 | 2 September 2026 | Carousel removed, the six images at that point placed as plain figures |
| 7 | 2 September 2026 | Found my overwritten page in the commit history and how to restore it. No content. |
| 8 | 2 September 2026 | Page rebuilt from the recovered text with every image in the folder placed |
| 9 | 2 September 2026 | Placement reworked to my instructions — box beam and square stock runs separated, the sub-1.0 safety factor run dropped |
| 10 | 2 September 2026 | Every image block shifted up one paragraph |
| 11 | 2 September 2026 | Front matter added so the homepage card shows date, hours and skills; eight section headings |
| 12 | 2 September 2026 | CAD drawing enlarged, iteration screenshots put into a labelled grid, one screenshot reordered |
| 13 | 2 September 2026 | Built the A2 entries on this page |
| 14 | 2 September 2026 | Restored this page after it was deleted, added dates and the entries below |

## A2 — Truss Stress Analysis

The only AI use on the assignment itself was one exchange resolving a meshing issue in the Fusion static stress study. The truss design, the hand calculations, the CAD models, the FEA setup and the results are mine. Page layout for A2 is logged under Website Building above.

| Prompt | Date | What it produced |
| --- | --- | --- |
| 1 | 2 September 2026 | Resolved a meshing issue in the Fusion static stress study |

## A3 through A11

No AI used yet.
