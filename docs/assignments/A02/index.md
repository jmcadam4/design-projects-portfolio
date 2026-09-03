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

<img src="assignment description.png" alt="assignment" style="width:50%; height:auto; display:block; margin:1em 0; border:1px solid rgba(0,0,0,.12); border-radius:4px;">

The first thing I wanted to do when approaching this problem was assume what would be a good truss design. I went with members between A, B, C,and D with two members in the center running from C and D to the middle of AB. I realized pretty quickly into calculating forces that members CE and DE would only produce a bending force on AB but I still wanted to see how it would fair compared to not having them. 

<div class="carousel" data-carousel aria-roledescription="carousel" aria-label="Joint method hand calculations">
  <ul class="carousel__track" data-track tabindex="0">
    <li class="carousel__slide"><img src="A02%20pic%204.png" width="573" height="491" alt="Free body diagrams for joints D and C, with the symmetry relations F_DE = F_CE and F_AD = F_BC."></li>
    <li class="carousel__slide"><img src="A02%20pic%203.png" width="750" height="490" alt="Free body diagrams for joints E, A and B, noting the bending force at E."></li>
    <li class="carousel__slide"><img src="A02%20pic%202.png" width="788" height="760" alt="Assembled equation set with knowns P = 25 kN, a = 0.4 m, b = 0.3 m, solved for the member forces."></li>
    <li class="carousel__slide"><img src="A02%20Pic%201.png" width="782" height="167" alt="Sum of forces at joint D showing F_DE and F_CE carry no load, with F_DC = 33.3 kN."></li>
  </ul>
  <button class="carousel__arrow carousel__arrow--prev" type="button" data-prev aria-label="Previous image"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 4.6 8 12l7.4 7.4 1.4-1.4L10.8 12l6-6z"/></svg></button>
  <button class="carousel__arrow carousel__arrow--next" type="button" data-next aria-label="Next image"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 4.6 16 12l-7.4 7.4-1.4-1.4 6-6-6-6z"/></svg></button>
  <div class="carousel__dots" data-dots></div>
  <p class="carousel__caption">Working the joints in order — swipe, scroll, or use the arrows.</p>
</div>
  <button class="carousel__arrow carousel__arrow--prev" type="button" data-prev aria-label="Previous image"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.4 4.6 8 12l7.4 7.4 1.4-1.4L10.8 12l6-6z"/></svg></button>
  <button class="carousel__arrow carousel__arrow--next" type="button" data-next aria-label="Next image"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 4.6 16 12l-7.4 7.4-1.4-1.4 6-6-6-6z"/></svg></button>
  <div class="carousel__dots" data-dots></div>
  <p class="carousel__caption">Working the joints in order — click the arrows, drag, or use the left and right arrow keys.</p>
</div>

Once I felt like I had some concept of a design worth testing I sketched it out and started solving using the joint method.

## Decide
_Which geometry did you select, and why? This is your first open design choice in the course — defend it._

## Communicate

