# AI Disclosure

This page is a running summary of AI usage, it summarizes what each chat was used for, prompt by prompt. I primarily use Claude.

## A1 — Fuel Pump Teardown

Claude (claude.ai) was used as a reference while working through the BMW E30 fuel pump, mostly to understand how a regenerative turbine works and how a part like this gets manufactured. Two figures in the A1 write-up came out of this session. Factory values were retrieved through web searches of Bosch datasheets, Bentley test figures and E30 forums rather than from the model's own recall.

| Prompt | What it produced |
| --- | --- |
| 1 | Whether the pump can be opened — crimped can, why a teardown is one-way |
| 2 | Full design and manufacturing walkthrough: turbine vs. gerotor, molded impeller, sintered housings, brushed motor, stamped hanger, brazing vs. spot welding, plating |
| 3 | Diagram of the flow path inside a regenerative turbine |
| 4 | How the impeller vanes drive the fluid |
| 5 | Factory spec analysis for the E30 pump — flow, pressure, current draw |
| 6 | Why the "12 V" nameplate is not a design point; the pump actually runs at 13.5–14.2 V |
| 7 | Why BMW moved from a two-pump setup to a single in-tank pump — used in the write-up |
| 8 | The pressure-buildup graph in the A1 page |
| 9 | Where fuel leaks internally and why clearance dominates it |
| 10 | Poiseuille leakage explained term by term — where the cubed gap height comes from |
| 11 | Identified μ (mu) and its common uses |
| 12 | Recalculated the pump from dimensions I measured off the part (40 / 35 / 31 / 25 mm) |
| 13 | Pump operating speed — roughly 8,000–9,000 rpm for a return-style system |
| 14 | Heating effect of the pump on 10 gallons of fuel at 30 °F |
| 15 | Housekeeping — exporting the chat. No technical content. |

## Website Building

Claude (Cowork) was used to format the pages and configure the site. No technical content was written or changed.

| Prompt | What it produced |
| --- | --- |
| 1 | Placed the image rows through the A1 fuel pump section |
| 2 | Heading structure for A1; table-of-contents permalinks, a heading stylesheet, and a fix to a broken A11 nav link |
| 3 | Added the bottom hanger spot weld image |
| 4 | Added the two portfolio screenshots to the website reviews |
| 5 | Explained what `mkdocs.yml` and `extra.css` do — no changes made |
| 6 | How to create a file inside a new folder on GitHub — no changes made |
| 7 | Built this page |

## A2 through A11

No AI used yet.
