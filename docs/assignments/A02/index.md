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
  <img src="assignment description.png" alt="Assignment brief for the truss stress analysis." style="width:50%; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">The assignment brief.</figcaption>
</figure>

The first thing I wanted to do when approaching this problem was assume what would be a good truss design. I went with members between A, B, C,and D with two members in the center running from C and D to the middle of AB. I realized pretty quickly into calculating forces that members CE and DE would only produce a bending force on AB but I still wanted to see how it would fair compared to not having them.

<figure style="margin:1.5em 0; text-align:center;">
  <img src="A2%20truss%20v1.png" width="575" height="302" alt="Truss geometry sketch: A and B along the 1.2 m top chord with E at midspan, D and C on the 0.3 m lower chord, 0.4 m bays, and 25 kN loads applied downward at D and C." style="width:100%; max-width:560px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">First geometry — 1.2 m top chord, 0.3 m depth, 0.4 m bays, 25 kN applied at D and C.</figcaption>
</figure>

Once I felt like I had some concept of a design worth testing I sketched it out and started solving using the joint method.

<figure style="margin:1.5em 0; text-align:center;">
  <img src="A02%20pic%204.png" width="573" height="491" alt="Free body diagrams for joints D and C, with the symmetry relations F_DE = F_CE, F_AD = F_BC, l_BC = l_AD and l_DE = l_CE." style="width:100%; max-width:640px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">Joints D and C, plus the symmetry relations that halve the work.</figcaption>
</figure>

<figure style="margin:1.5em 0; text-align:center;">
  <img src="A02%20pic%203.png" width="750" height="490" alt="Free body diagrams for joints E, A and B, with a note that the load at E is a bending force and the design might need more triangles." style="width:100%; max-width:680px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">Joints E, A and B — where the bending force at E first showed up.</figcaption>
</figure>

<figure style="margin:1.5em 0; text-align:center;">
  <img src="A02%20pic%202.png" width="788" height="760" alt="Assembled equation set with knowns P = 25 kN, a = 0.4 m and b = 0.3 m, solved to give F_DE = F_CE = 0, F_DA = F_CB = 41.667 kN tension and F_AE = 33.3 kN compression." style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">The full system with knowns substituted — F<sub>DE</sub> and F<sub>CE</sub> fall out to zero, F<sub>DA</sub> = F<sub>CB</sub> = 41.667 kN tension.</figcaption>
</figure>

<figure style="margin:1.5em 0; text-align:center;">
  <img src="A02%20Pic%201.png" width="782" height="167" alt="Sum of forces in x and y at joint D, giving F_DA = P times l_AD over b and F_DC = 33.3 kN, and confirming F_DE and F_CE carry no load." style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:4px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; color:var(--md-default-fg-color--light);">Joint D worked out in full, confirming CE and DE carry no load and F<sub>DC</sub> = 33.3 kN.</figcaption>
</figure>

## Decide
_Which geometry did you select, and why? This is your first open design choice in the course — defend it._

## Communicate
