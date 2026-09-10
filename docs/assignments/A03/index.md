# A3 – [Topic]

## Objective

Images 1

- Use axial deflection modeling to design dimensions of a beam under an axial load
- Use parametric design to determine the bars length
- Introduce me to FEA (Finite Element Analysis)
- Introduce me to linking dimensions to appropriate parameters in CAD.
- Compare and contrast the different analysis

## Analyze

Images 2

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

Images 3

The CAD was super simple for these beams, I made a 6x6 mm square on the top plane then extruded it out to 79.88 mm, duplicated it, and extruded the new one to 319.52 mm. I took both of these models and uploaded them to fusion to do analysis. I did followed the same steps for both inside of fusion. I applied the load of 400 lbf to one end, fixed the other, then assigned the study material and cross checked the young's modulus and yield strength. These numbers were good so I solved the study for both beams and upon looking at the results, they were exactly as expected. The simulated no safety factor elongation was .228 mm and I had calculated it to be .229 mm. The safety factor elongation was .057 mm which is .228 mm / 4. The .001 mm error was likely due to the fact that the young's modulus was set to 68.9 kN/mm^2 in fusion rather than the 68.95 I used in my calculations. Similarly the default yield strength was 275 MPa and I used 276 MPa for my calculations. On a part like this the error is acceptable but in practice, especially for larger components or ones where errors can compound, I would assign these perfectly or use my hand calculations with the simulation being a way to check my math.

images 4

After doing all of this, I realized that the bar was meant to be cylindrical. I redesigned it and checked that so long as the cross sectional area was the same, there was no difference in elongation. This was confirmed for the shorter length accounting for the safety factor but the longer length had a simulated elongation of .254 mm rather than .228 mm. This can be explained by the program using fewer planes when simplifying the shape. You can see in the images above that the circular base is simplified into an 8 sided polygon for the long length and 16 for the shorter one. The cross sectional area of an 8 sided polygon fit inside of a circle with a cross sectional area of 36 mm results in an area of 32.409 mm^2 versus one with 16 sides resulting in an area of 35.07 mm^2. While this is necessary to reduce the compute needed to solve this simulation, it results in a pretty substantial error.


## Decide


## Communicate

