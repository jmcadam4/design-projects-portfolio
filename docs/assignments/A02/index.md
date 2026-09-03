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

I wanted to compare this to a design with no central members so I redid the calculations for the figure pictured above. Knowing forces through AB, BC, CD, and AD were the same across the two designs, I had proven that the central members weren't doing anything without calculating bending stress. 



This was what I considered an optimal design for the problem space so I went on to calculate pin size and cross sectional area needed. I used single shear stress calculations to get the minimum allowable pin diameter then found the size of square stock needed to maintain 634.06 mm^2 cross sectional area at the pin. This gave me a rough size to use while CADing and going through a second design iteration process.



I made the empty truss design first, downloaded it as a step file, and opened it in fusion. In fusion I switched to simulation mode and assigned the loads, constraints, and material (I used ASTM A36 steel preset rather than making a custom one to save time when doing rough modeling). Once they were all set I clicked solve and viewed the results of the static stress analysis. 



The results were far from ideal once bending was factored into things. While the problem statement said not to factor in bending, I wanted to learn about geometric optimization so I did a little iteration. The second model I made was one with center supports. I duplicated the centerless truss and added CE and DE to it. Seeing that this improved the safety factor but it still wasn't perfect. The next optimization that I made was extending AD and BC into a tip under CD in an effort to reduce bending due to CD being unsupported. This helped and raised the claimed safety factor to 1.968 from 1.611. From there, I was curious if I could lighten it and get the same strength. I tried to keep the extended AD and BC and removed the center and it further increased the safety factor to 1.972 so the center was hurting more than it was helping. I figured this was because of the load it put on AB so I wanted to try adding members above there as well in order to help reduce the bending load. Once this was done, The part safety factor dropped dramatically. This showed me that by stiffening one member, it put more of the bending force on the other two and therefore all three would need to be strengthened to increase the strength. At this point I added the central members back in and ended up with a comfortable 2.191 safety factor including bending stress (so I am hoping the 3.5 sf doesnt apply as it's only weak in bending.)


I then moved onto the next step which was figuring out what style of beam I would use for this. I figured a box beam would work best as I needed all the bearing area I could get around the pins. As you can see from my calculations above, I tried to get dimensions that supported 8 and 4 mm wall thicknesses but I was messing something up. I started solving again using variables for the thickness and was able to get a result for 8 mm walls.

I updated the CAD and added variables to define governing dimensions now that they were more set in stone. I realized at this point I should have done this sooner as it would have sped up changes greatly, but I'll hold onto that for the next assignment. I still needed more strength around the pins. Knowing this I initially considered cylindrical sleeves but later pivoted to blocks inside the tube surrounding the pin holes. In application there would need to be a separate part at A,B,C, and D that had the beams attached to it in order to reasonably manufacture the truss but given the timeline and scope of the assignment I opted not to worry about that for now. 

Now with my new model, I uploaded it to fusion again and ran a analysis. The effective safety factor had dropped to 1.869 which is worse than the result for the solid part but I was okay with that given that this design could actually be built and would be more economical than using solid blocks of steel. On top of this, the loads this assignment has us account for were still within the usable threshold.

There is still a lot of optimization that can be done. After I had already finished the design, I stumbled upon and interesting youtube video by the efficient engineer talking about optimization and Mitchel structures that can be viewed <a href="https://www.youtube.com/watch?v=dICWP3yHJmE">here</a>. Watching this I realized just how far off I was from a perfectly optimal part but I was still happy about the general design and the ability to manufacture it. 

## Decide
_Which geometry did you select, and why? This is your first open design choice in the course — defend it._

## Communicate

