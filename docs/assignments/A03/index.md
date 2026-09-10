---
Date: 9 September 2026
Hours: 4
Thumbnail: Screenshot 2026-09-09 193450.png
Skills: Axial deflection modelling, parametric design, finite element analysis, Fusion 360 static studies, mesh discretisation error
---

# A3 – [Topic]

## Objective

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-09%20194623.png" width="683" height="243" alt="The assignment brief and Figure #1 — a bar in direct tension, fixed at one end." style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">The assignment brief and Figure #1 — a bar in direct tension, fixed at one end.</figcaption>
</figure>

- Use axial deflection modeling to design dimensions of a beam under an axial load
- Use parametric design to determine the bars length
- Introduce me to FEA (Finite Element Analysis)
- Introduce me to linking dimensions to appropriate parameters in CAD.
- Compare and contrast the different analysis

## Analyze

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="Screenshot%202026-09-09%20195138.png" width="923" height="465" alt="Free body sketch and the material properties for 6061-T6" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Free body sketch and the material properties for 6061-T6</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-09%20202236.png" width="797" height="517" alt="Solving for minimum area, then length with and without the safety factor" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Solving for minimum area, then length with and without the safety factor</figcaption></figure></div>

The first thing I did when approaching this problem was to define the material used and therefore get reliable material properties. I knew that 6061 aluminum was a good standard and made sure it was withing the given young's modulus for the problem. The yield strength of 6061 is 276 MPa and the young's modulus is 10 x 10^6. These are allowable properties for the given problem so I carried on to choose the load applied. I decided to shoot in the middle of the range with a load of 400 lbf. With everything needed to find the minimum cross sectional area of the bar, I plugged values into the tensile strength equation. I found the minimum allowable area was 25.78 mm^2. In order to get this number, I used the yield strength of 6061 aluminum at 276 MPa and a safety factor of four. Now that the area was solved for, I continued on to get the maximum length that results in a axial deformation of .009 inches or .229 mm. I found that a maximum length of 79.88 mm with a safety factor of four or 319.52 mm without a safety factor would work. With all of the physical dimensions solved for, I was able to move over to my CAD program.

so to put all the knowns into one place we have

- material: 6061 aluminum
- E: 10x10^6 psi (68.95 kN/mm^2)
- Yield strength: 276 MPa (.276 kN/mm^2)
- Load: 400 lbf (1.779 kN)
- dL max: .009 inches (.229 mm)
- Safety factor: 4
- Min. cross sectional area: 25.78 mm^2
- Design cross sectional area: 36 mm^2 (6 mm x 6 mm)
- Length with safety factor: 79.88 mm
- Length w/o safety factor: 319.52 mm

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="Screenshot%202026-09-09%20193528.png" width="1222" height="766" alt="Square bar, 79.88 mm with safety factor 4 — maximum displacement 0.057 mm" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Square bar, 79.88 mm with safety factor 4 — maximum displacement 0.057 mm</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-09%20193450.png" width="1446" height="787" alt="Square bar, 319.52 mm with no safety factor — maximum displacement 0.228 mm" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Square bar, 319.52 mm with no safety factor — maximum displacement 0.228 mm</figcaption></figure></div>

The CAD was super simple for these beams, I made a 6x6 mm square on the top plane then extruded it out to 79.88 mm, duplicated it, and extruded the new one to 319.52 mm. I took both of these models and uploaded them to fusion to do analysis. I did followed the same steps for both inside of fusion. I applied the load of 400 lbf to one end, fixed the other, then assigned the study material and cross checked the young's modulus and yield strength. These numbers were good so I solved the study for both beams and upon looking at the results, they were exactly as expected. The simulated no safety factor elongation was .228 mm and I had calculated it to be .229 mm. The safety factor elongation was .057 mm which is .228 mm / 4. The .001 mm error was likely due to the fact that the young's modulus was set to 68.9 kN/mm^2 in fusion rather than the 68.95 I used in my calculations. Similarly the default yield strength was 275 MPa and I used 276 MPa for my calculations. On a part like this the error is acceptable but in practice, especially for larger components or ones where errors can compound, I would assign these perfectly or use my hand calculations with the simulation being a way to check my math.

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="Screenshot%202026-09-09%20200618.png" width="1328" height="722" alt="Round bar, no safety factor — displacement 0.254 mm, meshed as an 8-sided prism" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Round bar, no safety factor — displacement 0.254 mm, meshed as an 8-sided prism</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-09%20200634.png" width="1207" height="818" alt="Round bar with safety factor 4 — displacement 0.057 mm, meshed with 16 sides" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Round bar with safety factor 4 — displacement 0.057 mm, meshed with 16 sides</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-09%20201346.png" width="845" height="681" alt="The 8-sided section measures 32.409 mm² against the 36 mm² circle" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">The 8-sided section measures 32.409 mm² against the 36 mm² circle</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-09%20201424.png" width="802" height="671" alt="The 16-sided section measures 35.079 mm², much closer to the true area" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">The 16-sided section measures 35.079 mm², much closer to the true area</figcaption></figure></div>

After doing all of this, I realized that the bar was meant to be cylindrical. I redesigned it and checked that so long as the cross sectional area was the same, there was no difference in elongation. This was confirmed for the shorter length accounting for the safety factor but the longer length had a simulated elongation of .254 mm rather than .228 mm. This can be explained by the program using fewer planes when simplifying the shape. You can see in the images above that the circular base is simplified into an 8 sided polygon for the long length and 16 for the shorter one. The cross sectional area of an 8 sided polygon fit inside of a circle with a cross sectional area of 36 mm results in an area of 32.409 mm^2 versus one with 16 sides resulting in an area of 35.07 mm^2. While this is necessary to reduce the compute needed to solve this simulation, it results in a pretty substantial error.

## Decide

## Communicate

## AI Disclosure

Claude was used to lay out this page — placing the figures and writing the image captions. The design, the hand calculations, the CAD models and the FEA runs are mine; no engineering content was produced by the model. Session summaries are on the [AI Disclosure](../../ai-disclosure.md) page.
