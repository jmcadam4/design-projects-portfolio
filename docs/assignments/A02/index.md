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

The first thing I did when approaching this problem was assume a workable truss geometry. I used members between A, B, C, and D, with two central members running from C and D to the midpoint of AB. Early in calculating the forces I realized that members CE and DE would only introduce a bending force into AB, but I still wanted to see how the design would fare against one without them. 

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="A2%20truss%20v1.png" width="575" height="302" alt="Original geometry, with central members CE and DE" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Original geometry, with central members CE and DE</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20221023.png" width="527" height="326" alt="Revised geometry, central members removed" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Revised geometry, central members removed</figcaption></figure></div>

Once I had a design worth testing, I sketched it out and began solving it with the method of joints.

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

To compare the two, I repeated the calculations for a truss with no central members. This showed that the forces through AB, BC, CD, and AD were identical across both designs, which proved that the central members carry no load once bending is excluded.

### Pin and Cross-Section Sizing

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221100.png" width="712" height="342" alt="Pin diameter from single shear — 10.43 mm minimum, giving 30.93 mm square stock" style="width:100%; max-width:760px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Pin diameter from single shear — 10.43 mm minimum, giving 30.93 mm square stock</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221051.png" width="775" height="252" alt="Cross-section required for the 41.667 kN member in A500 grade A — 634.06 mm²" style="width:100%; max-width:760px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Cross-section required for the 41.667 kN member in A500 grade A — 634.06 mm²</figcaption>
</figure>

This was the geometry I settled on for the problem space, so I moved on to calculating the pin size and the required cross-sectional area. I used a single shear calculation (τ = nV/A) to find a minimum allowable pin diameter of 10.43 mm. I then sized the square stock needed to maintain 634.06 mm² of net cross-sectional area through the pin hole. This gave me an approximate member size to work from while building the CAD model and running a second design iteration.

### CAD Model and Static Stress Setup

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213233.png" width="888" height="342" alt="The geometry brought into CAD and dimensioned — 15.748 in bays, 11.811 in depth" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">The geometry brought into CAD and dimensioned — 15.748 in bays, 11.811 in depth</figcaption>
</figure>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213311.png" width="822" height="248" alt="No central members" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">No central members</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213333.png" width="837" height="237" alt="CE and DE added back" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">CE and DE added back</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213412.png" width="862" height="383" alt="AD and BC extended into a tip below DC" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">AD and BC extended into a tip below DC</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213533.png" width="1141" height="452" alt="Extended tip, centre removed" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Extended tip, centre removed</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213553.png" width="1217" height="357" alt="Single diagonal variant" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Single diagonal variant</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213355.png" width="781" height="398" alt="Mirrored members added above AB" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Mirrored members added above AB</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213432.png" width="725" height="393" alt="Members above AB, centre removed" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Members above AB, centre removed</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213454.png" width="956" height="510" alt="Members above and below, no centre" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Members above and below, no centre</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213516.png" width="1142" height="791" alt="Full mirrored layout, centre restored" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Full mirrored layout, centre restored</figcaption></figure></div>

I modelled the trapezoidal truss with members AD and BC, then duplicated it and removed the central members. I exported both as STEP files and opened them in Fusion 360. In Fusion I switched to simulation mode and assigned the loads, constraints, and material, using the ASTM A36 steel preset rather than defining a custom material in order to save time during rough modelling. Once these were set, I solved the study and reviewed the static stress results. 

### Geometry Iteration

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="Screenshot%202026-09-02%20185048.png" width="1902" height="812" alt="Minimum safety factor 1.558" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.558</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213736.png" width="1897" height="773" alt="Minimum safety factor 2.101" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 2.101</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213800.png" width="1907" height="776" alt="Minimum safety factor 1.863" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.863</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213816.png" width="1903" height="772" alt="Minimum safety factor 1.385" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.385</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213832.png" width="1906" height="782" alt="Minimum safety factor 2.222" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 2.222</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213845.png" width="1902" height="800" alt="Minimum safety factor 1.674" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.674</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213856.png" width="1905" height="783" alt="Minimum safety factor 1.611" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.611</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213909.png" width="1906" height="772" alt="Minimum safety factor 1.972" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.972</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213928.png" width="1902" height="778" alt="Minimum safety factor 1.968" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.968</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213957.png" width="1903" height="780" alt="Minimum safety factor 1.746" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Minimum safety factor 1.746</figcaption></figure><figure style="margin:0;"><img src="Screenshot%202026-09-02%20213626.png" width="1902" height="787" alt="Box beam — minimum safety factor 1.214" style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Box beam — minimum safety factor 1.214</figcaption></figure></div>

The results were far from ideal once bending was factored into things. While the problem statement said not to factor in bending, I wanted to learn about geometric optimization so I did a little iteration. The second model I made was one with center supports. I duplicated the centerless truss and added CE and DE to it. This improved the safety factor, but not enough. The next change I made was extending AD and BC into a tip below DC, in an effort to reduce the bending caused by DC being unsupported. This raised the reported safety factor from 1.611 to 1.968. From there, I was curious if I could lighten it and get the same strength. I kept the extended AD and BC and removed the central members, which raised the safety factor further to 1.972, showing that the central members were doing more harm than help. I figured this was because of the load it put on AB so I wanted to try adding members above there as well in order to help reduce the bending load. Once this was done, the part safety factor dropped sharply. This showed me that stiffening one member transfers more of the bending load onto the other two, so all three would need to be strengthened together for the change to be an improvement. At this point I added the central members back in and reached a 2.191 safety factor with bending included. The required factor of 3.5 applies to the axial design, which this geometry satisfies; the 2.191 figure includes bending, which the problem statement excludes.

### Box Beam Sizing

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221108.png" width="607" height="411" alt="Box beam sized against the same 634.06 mm² at a 1.5:1 ratio — the first attempt that did not close" style="width:100%; max-width:740px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Box beam sized against the same 634.06 mm² at a 1.5:1 ratio — the first attempt that did not close</figcaption>
</figure>

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20221113.png" width="585" height="607" alt="Reworked with wall thickness as a variable, giving w₀ = 22.25 mm and h₀ = 33.38 mm at 4 mm walls" style="width:100%; max-width:740px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Reworked with wall thickness as a variable, giving w₀ = 22.25 mm and h₀ = 33.38 mm at 4 mm walls</figcaption>
</figure>

I then moved on to selecting a beam profile. I chose a box section because it provides the most bearing area around the pins for a given weight. As the calculations above show, my first attempts at dimensions for 8 mm and 4 mm wall thicknesses contained an algebra error: I carried a squared term through a cancellation that should have removed it. I solved it again with the wall thickness left as a variable, which gave a working result for 8 mm walls.

I updated the CAD model and added variables to define the governing dimensions now that they were settled. In hindsight I should have parameterised the model at the start, as it would have made every later change far quicker; I will carry that into the next assignment. I still needed more material around the pins. I first considered cylindrical sleeves, then changed to solid blocks inside the tube surrounding the pin holes. In production this would require a separate fitting at A, B, C, and D that the beams attach to in order to be manufacturable, but given the timeline and scope of the assignment I left that out. 

### Final Model and Weight Savings

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-02%20213643.png" width="1898" height="778" alt="Box beam with the reworked sections — minimum safety factor 1.869" style="width:100%; max-width:900px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Box beam with the reworked sections — minimum safety factor 1.869</figcaption>
</figure>

| Member | Length (m) | Internal force (kN) | State |
| --- | ---: | ---: | --- |
| AB | 1.200 | 33.333 | Compression |
| AD | 0.500 | 41.667 | Tension |
| DC | 0.400 | 33.333 | Tension |
| CB | 0.500 | 41.667 | Tension |
| DE | 0.361 | 0 | Zero-force |
| CE | 0.361 | 0 | Zero-force |
| **Total** | **3.321** | | |

<p style="margin:.4em 0 1.6em; font-size:.75rem; line-height:1.45; text-align:center; color:var(--md-default-fg-color--light);">Element lengths and internal forces for the analysed truss, at P = 25 kN, a = 0.4 m and b = 0.3 m. DE and CE resolve to zero because AB runs collinear through E.</p>


I uploaded the new model to Fusion and ran the analysis again. The effective safety factor dropped to 1.869, below the result for the solid part, but I accepted that trade because this version can actually be manufactured and uses considerably less material than solid steel bar. The loads this assignment specifies also remain within the usable range.

There was a 33 percent weight savings when switching to HSS, from 92.83 lbs. to 62.025 lbs. (42 to 28 kg). This is a substantial gain, and it still assumes solid cores around the pins. Given the load it is built to support is 5,098.58 kg, I would say that 28 kg of dead weight is tolerable in most applications.

## Pin Modeling

I modeled the pins to have a 13.5 mm diameter at a length of 44.5 mm. I did this so the slot in the truss was half the depth of the pin and therefore the other side of the single shear connection could have the width to support the load. 

### Further Optimization

There is still considerable optimisation left to do. After finishing the design I came across a YouTube video by The Efficient Engineer on structural optimisation and Michell structures, which can be viewed <a href="https://www.youtube.com/watch?v=dICWP3yHJmE">here</a>. Watching it showed me how far the part sits from a genuinely optimal structure, though I remain satisfied with the overall design and with the fact that it could be built. 

Beyond geometric optimizations, there are also improvements to be made in the beam dimensions. I did not work through the mathematics to identify the optimal profile, and I doubt it is square stock. The gains from the section I chose were still measurable, so it is serviceable, but if this were being built I would want to justify that choice more rigorously.  

## CAD

The CAD work can be viewed at this <a href="https://cad.onshape.com/documents/9a64f8d71786ad7761bfafa7/w/6ad37b1f1fbfa22524d61dbe/e/0dea0ed959580d203f137b30?renderMode=0&uiState=6a98f49b4ce07a8e8c4d2027">link.</a> The final product is labeled "FINAL Diamond HSS".

## Lessons Learned

Through this assignment I learned how to apply different constraint types in a Fusion 360 stress study, having previously used nothing but fixed constraints. I also saw the advantage of working to construction standards such as HSS sections rather than solid bar, which cut the predicted mass by a third at an acceptable cost in safety factor. Looking ahead, I would sequence the work differently. If it would be permitted it would be a lot more efficient to generate a structure using automated topology optimization then go through it for strength as it only shows the best paths for your members to follow, not what your members need to look like. 

<figure style="margin:1.5em 0; text-align:center;">
  <img src="images (2).jpg" width="522" height="370" alt="Picture" style="width:100%; max-width:50%; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">Density-based topology optimization of a 2D cantilever beam Via Tomas Zegard "Simultaneous discrete and continuum multiresolution topology optimization"</figcaption>
</figure>

## Time Taken

This assignment took me about 12 hours.

## AI Disclosure

Claude was used to lay out this page — placing the figures, writing the image captions, and adding the section headings. The truss design, the hand calculations, the CAD, the FEA runs and the writing are mine. Session summaries are on the [AI Disclosure](../../ai-disclosure.md) page.
