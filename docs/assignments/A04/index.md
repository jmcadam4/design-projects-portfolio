# A4 – [Topic]

## Objective

<figure style="margin:1.6em 0; text-align:center;">
  <img src="Screenshot%202026-09-16%20191608.png" width="1048" height="518" alt="The assignment brief and Figure 1 — the motor mount, the rigid wall, and the force P = 300 N received on the motor shaft." style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">The assignment brief and Figure 1 — the motor mount, the rigid wall, and the force P = 300 N received on the motor shaft.</figcaption>
</figure>

## Analyze

<figure style="margin:1.6em 0; text-align:center;">
  <img src="IMG_0273.jpeg" width="1305" height="934" alt="Hand sketch of the motor mount concept, showing the mount attached to the rigid wall with the load P = 300 N acting on the motor shaft." style="width:100%; max-width:500px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
</figure>

The first step to solving this problem was getting our unknowns together. I was given by the problem statement that P= 300 N, sf = 3, delta = .3 mm. I found PLA yield stress to be 50 MPa and E to be 3500 MPa.

<figure style="margin:1.6em 0; text-align:center;">
  <img src="IMG_0274.jpeg" width="2035" height="1864" alt="The motor's dimensions taken from its step file, with h1, h2, b1, b2, t1 and t2 assigned to the mount's feature dimensions." style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">The motor's dimensions taken from its step file, with h1, h2, b1, b2, t1 and t2 assigned to the mount's feature dimensions.</figcaption>
</figure>

Going to the step file of for the motor listed, I am able to get dimensions for it. I also needed to assign variables to the dimensions of the mount. I went with h1 and h1 being the depth from the side view, b1 and b2 being the length of the longest part of each feature when looking from the side view, and t1 and t2 are the thicknesses of the features.

<figure style="margin:1.6em 0; text-align:center;">
  <img src="IMG_0276.jpeg" width="2217" height="870" alt="Free body diagram of feature one, fixed at the top, with moment M = Pa and the load P acting at distance a = 18 mm." style="width:100%; max-width:700px; height:auto; display:block; margin:0 auto; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;">
  <figcaption style="margin-top:.6em; font-size:.75rem; line-height:1.45; color:var(--md-default-fg-color--light);">Free body diagram of feature one, fixed at the top, with moment M = Pa and the load P acting at distance a = 18 mm.</figcaption>
</figure>

Starting with the feature one, I needed to first draw a free body diagram to understand how the forces interact within the member. We are acting as if there is a fixed constraint at the top of it because feature two is fixed for the purposes of the problem. I went ahead and assigned b2 to be 75 mm and h1 and h2 as 35 mm due to the motor dimensions. b2 is overkill so if it becomes an issue later I will reassess. I also assigned a to be the distance from the mount that force P is acting on. Technically thsi dimension should be fromt he center of t1 but I am pretty sure that doing it like that changes the math a lot with a becoming 18-t1/2 and leaving it simply at 18 mm just adds an extra safety cusion.

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:1rem 1.1rem; align-items:start; margin:1.6em 0;"><figure style="margin:0;"><img src="IMG_0277.jpeg" width="2269" height="1775" alt="Stress and deflection equations, solving for the allowable stress and rearranging for t1." style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Stress and deflection equations, solving for the allowable stress and rearranging for t1.</figcaption></figure><figure style="margin:0;"><img src="IMG_0278.jpeg" width="1408" height="1118" alt="Deflection equation solved for t1, with the plan to numerically solve for t1 in Onshape." style="width:100%; height:auto; display:block; border:1px solid var(--md-default-fg-color--lightest); border-radius:6px;"><figcaption style="margin-top:.45em; font-size:.72rem; line-height:1.4; text-align:center; color:var(--md-default-fg-color--light);">Deflection equation solved for t1, with the plan to numerically solve for t1 in Onshape.</figcaption></figure></div>

I solved for both stress and bending with equations, I was confused about how the force P would interact with bending of the beam until I realized it was just a bending moment. Once that was understood, I was able to find equations that would return t1 (the one unknown for feature one.)

## Decide


## Communicate

