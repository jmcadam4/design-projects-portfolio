# A3 – [Topic]

## Objective

- Use axial deflection modeling to design its dimensions
- Use parametric design to determine a bars length
- Introduce you to FEA (Finite Element Analysis)
- Introduce you to linking dimensions to appropriate parameters in CAD.
- Compare and contrast the different analysis

## Analyze

The first thing I did when approaching this problem was to get the defined material values needed. I knew that 6061 T6 aluminum was a good standard and made sure it was withing the given young's modulus for the problem. It was so I carried on to define the load applied. I decided to hit the middle of the range with a load of 400 lbf. I then needed to get the cross sectional area of the bar to not break under load, the minimum I found was 25.78 mm^2 which I rounded up to be a 6x6 mm bar. In order to get this number, I used the yield strength of 6061 aluminum at 276 MPa and a safety factor of four. Now that I had this, I continued on to get the maximum length that results in a axial deformation of .009 inches or .229 mm. I was given a maximum of 79.88 mm with a safety factor of four or 319.52 mm without a safety factor. With all of the physical demensions solved for, I was able to go on to CAD it.

The CAD was super simple for these beams, I made a 6x6 mm square on the top plane then extruded it out to 79.88 mm, duplicated it, and extruded the new one to 319.52 mm. I took both of these models and uploaded them to fusion to do analysis. After applying the load of 400 lbf to both, I was left with a safety factor well within the range we wanted. The hard part was figuring out how much axial deformation had occured. The safety factor in fusion is based upon the yield stress by default and this was not what we were looking to solve for.


## Decide


## Communicate

