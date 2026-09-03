---
Date: 2 September 2026
Hours: 12
Thumbnail: Screenshot 2026-09-02 213412.png
Skills: Method of joints, static equilibrium, shear and bearing stress, cross-section sizing, Fusion 360 CAD, static stress FEA, geometric iteration
---

# A2 – Truss Stress Analysis

## Objective

- Design a lightweight planar truss using A500 steel or an alternative material.
- Create free body diagrams (FBDs) for joints and critical pins.
- Calculate the required cross-sectional area of truss elements with a safety factor.
- Determine pin sizes based on shear forces with a safety factor.
- Solve equations symbolically and numerically for both truss and pin design.
- Estimate the total weight of the truss and pins.
- Create a CAD model with accurate dimensions and connections.
- Compare CAD weight predictions with hand calculations.
- Document key engineering lessons learned from the process.

## Analyze

<figure style="margin:1.5em 0; text-align:center;">
  <img src="assignment%20description.png" width="522" height="370" alt="The assignment brief." style="width:100%; max-width:50%; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">The assignment brief.</figcaption>
</figure>

### First Geometry and the Method of Joints

The first thing I wanted to do when approaching this problem was assume what would be a good truss design. I went with members between A, B, C,and D with two members in the center running from C and D to the middle of AB. I realized pretty quickly into calculating forces that members CE and DE would only produce a bending force on AB but I still wanted to see how it would fair compared to not having them. 

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="A2%20truss%20v1.png" width="575" height="302" alt="Original geometry, with central members CE and DE" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Original geometry, with central members CE and DE</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20221023.png" width="527" height="326" alt="Revised geometry, central members removed" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Revised geometry, central members removed</figcaption></figure></div>

Once I felt like I had some concept of a design worth testing I sketched it out and started solving using the joint method.

<figure style="margin:1.6em 0; text-align:center;">
  <img src="A02%20pic%204.png" width="573" height="491" alt="Joints D and C, with the symmetry relations F_DE = F_CE and F_AD = F_BC" style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Joints D and C, with the symmetry relations F_DE = F_CE and F_AD = F_BC</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="A02%20pic%203.png" width="750" height="490" alt="Joints E, A and B — where the bending force at E first appeared" style="width:100%; max-width:720px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Joints E, A and B — where the bending force at E first appeared</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="A02%20pic%202.png" width="788" height="760" alt="The full system with P = 25 kN, a = 0.4 m, b = 0.3 m substituted and solved" style="width:100%; max-width:740px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">The full system with P = 25 kN, a = 0.4 m, b = 0.3 m substituted and solved</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="A02%20Pic%201.png" width="782" height="167" alt="Joint D in full: F_DC = 33.3 kN, with CE and DE carrying no load" style="width:100%; max-width:740px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Joint D in full: F_DC = 33.3 kN, with CE and DE carrying no load</figcaption>
</figure>

### Checking a Truss Without Central Members

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="Screenshot%202026-09-02%20221041.png" width="682" height="342" alt="Member forces recalculated without the central members" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Member forces recalculated without the central members</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20221035.png" width="262" height="161" alt="Resulting member forces" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Resulting member forces</figcaption></figure></div>

I wanted to compare this to a design with no central members so I redid the calculations for a truss with no central members. Doing this, I was able to show that the forces through AB, BC, CD, and AD were the same across the two designs. I had proven that the central members weren't doing anything when not factoring bending into things.

### Pin and Cross-Section Sizing

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221100.png" width="712" height="342" alt="Pin diameter from single shear — 10.43 mm minimum, giving 30.93 mm square stock" style="width:100%; max-width:760px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Pin diameter from single shear — 10.43 mm minimum, giving 30.93 mm square stock</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221051.png" width="775" height="252" alt="Cross-section required for the 41.667 kN member in A500 grade A — 634.06 mm²" style="width:100%; max-width:760px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Cross-section required for the 41.667 kN member in A500 grade A — 634.06 mm²</figcaption>
</figure>

This was what I considered a good design for the problem space so I went on to calculate pin size and cross sectional area needed. I used single shear stress calculations (t = sf * V/A) to get the minimum allowable pin diameter of 10.43 mm. I then found the size of square stock needed to maintain 634.06 mm^2 cross sectional area at the center of that pin. This gave me a rough member size to use while CADing and going through a second design iteration process.

### CAD Model and Static Stress Setup

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213233.png" width="888" height="342" alt="Geometry brought into CAD and dimensioned" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Geometry brought into CAD and dimensioned</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213311.png" width="822" height="248" alt="Solid part, no central members" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Solid part, no central members</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213333.png" width="837" height="237" alt="CE and DE added back" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">CE and DE added back</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213412.png" width="862" height="383" alt="AD and BC extended into a tip below DC" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">AD and BC extended into a tip below DC</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213533.png" width="1141" height="452" alt="Extended tip, centre removed" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Extended tip, centre removed</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213553.png" width="1217" height="357" alt="Single diagonal variant" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Single diagonal variant</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213355.png" width="781" height="398" alt="Mirrored members added above AB" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Mirrored members added above AB</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213432.png" width="725" height="393" alt="Members above AB, centre removed" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Members above AB, centre removed</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213454.png" width="956" height="510" alt="Members above and below, no centre" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Members above and below, no centre</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213516.png" width="1142" height="791" alt="Full mirrored layout, centre restored" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Full mirrored layout, centre restored</figcaption></figure></div>

I made the trapezoidal truss with members AD and BC then duplicated it and removed the central members. I downloaded both as a step file, and opened them in fusion 360. In fusion I switched to simulation mode and assigned the loads, constraints, and material (I used ASTM A36 steel preset rather than making a custom one to save time when doing rough modeling). Once they were all set I clicked solve and viewed the results of the static stress analysis. 

### Geometry Iteration

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20185048.png" width="1902" height="812" alt="Static stress — minimum safety factor 1.558" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.558</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213736.png" width="1897" height="773" alt="Static stress — minimum safety factor 2.101" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 2.101</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213800.png" width="1907" height="776" alt="Static stress — minimum safety factor 1.863" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.863</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213816.png" width="1903" height="772" alt="Static stress — minimum safety factor 1.385" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.385</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213832.png" width="1906" height="782" alt="Static stress — minimum safety factor 2.222" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 2.222</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213845.png" width="1902" height="800" alt="Static stress — minimum safety factor 1.674" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.674</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213856.png" width="1905" height="783" alt="Static stress — minimum safety factor 1.611" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.611</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213909.png" width="1906" height="772" alt="Static stress — minimum safety factor 1.972" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.972</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213928.png" width="1902" height="778" alt="Static stress — minimum safety factor 1.968" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.968</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213957.png" width="1903" height="780" alt="Static stress — minimum safety factor 1.746" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Static stress — minimum safety factor 1.746</figcaption>
</figure>

The results were far from ideal once bending was factored into things. While the problem statement said not to factor in bending, I wanted to learn about geometric optimization so I did a little iteration. The second model I made was one with center supports. I duplicated the centerless truss and added CE and DE to it. Seeing that this improved the safety factor but it still wasn't perfect. The next optimization that I made was extending AD and BC into a tip under CD in an effort to reduce bending due to CD being unsupported. This helped and raised the claimed safety factor to 1.968 from 1.611. From there, I was curious if I could lighten it and get the same strength. I tried to keep the extended AD and BC and removed the center and it further increased the safety factor to 1.972 so the center was hurting more than it was helping. I figured this was because of the load it put on AB so I wanted to try adding members above there as well in order to help reduce the bending load. Once this was done, The part safety factor dropped dramatically. This showed me that by stiffening one member, it put more of the bending force on the other two and therefore all three would need to be strengthened to increase the strength. At this point I added the central members back in and ended up with a comfortable 2.191 safety factor including bending stress (so I am hoping the 3.5 sf doesnt apply as it's only weak in bending.)

### Box Beam Sizing

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221108.png" width="607" height="411" alt="Box beam sized against the same 634.06 mm² at a 1.5:1 ratio — the first attempt that did not close" style="width:100%; max-width:740px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Box beam sized against the same 634.06 mm² at a 1.5:1 ratio — the first attempt that did not close</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221113.png" width="585" height="607" alt="Reworked with wall thickness as a variable, giving w₀ = 22.25 mm and h₀ = 33.38 mm at 4 mm walls" style="width:100%; max-width:740px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Reworked with wall thickness as a variable, giving w₀ = 22.25 mm and h₀ = 33.38 mm at 4 mm walls</figcaption>
</figure>

I then moved onto the next step which was figuring out what style of beam I would use for this. I figured a box beam would work best as I needed all the bearing area I could get around the pins. As you can see from my calculations above, I tried to get dimensions that supported 8 and 4 mm wall thicknesses but I was messing something up. I started solving again using variables for the thickness and was able to get a result for 8 mm walls.

I updated the CAD and added variables to define governing dimensions now that they were more set in stone. I realized at this point I should have done this sooner as it would have sped up changes greatly, but I'll hold onto that for the next assignment. I still needed more strength around the pins. Knowing this I initially considered cylindrical sleeves but later pivoted to blocks inside the tube surrounding the pin holes. In application there would need to be a separate part at A,B,C, and D that had the beams attached to it in order to reasonably manufacture the truss but given the timeline and scope of the assignment I opted not to worry about that for now. 

### Final Model and Weight Savings

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213626.png" width="1902" height="787" alt="Box beam, first run — minimum safety factor 1.214" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Box beam, first run — minimum safety factor 1.214</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213643.png" width="1898" height="778" alt="Box beam with the reworked sections — minimum safety factor 1.869" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Box beam with the reworked sections — minimum safety factor 1.869</figcaption>
</figure>

Now with my new model, I uploaded it to fusion again and ran a analysis. The effective safety factor had dropped to 1.869 which is worse than the result for the solid part but I was okay with that given that this design could actually be built and would be more economical than using solid blocks of steel. On top of this, the loads this assignment has us account for were still within the usable threshold.

There was a 33 percent weight savings when switching to HSS, from 92.83 lbs. to 62.025 lbs. (42 to 28 kg). This is a substantial gain and still assumes we are using solid cores around the pins. Given the load it is built to support is 5,098.58 kg, I would say that 28 kg of dead weight is tolerable in most applications.

### Further Optimization

There is still a lot of optimization that can be done. After I had already finished the design, I stumbled upon and interesting youtube video by the efficient engineer talking about optimization and Mitchel structures that can be viewed <a href="https://www.youtube.com/watch?v=dICWP3yHJmE">here</a>. Watching this I realized just how far off I was from a perfectly optimal part but I was still happy about the general design and the ability to manufacture it.


## AI Disclosure

Claude was used to lay out this page — placing the figures, writing the image captions, and adding the section headings. The truss design, the hand calculations, the CAD, the FEA runs and the writing are mine. Session summaries are on the [AI Disclosure](../../ai-disclosure.md) page.
