# JS Pacman
### By Tim Caldwell
## Live Preview:
http://timcaldwell.solutions/js_pacman/

## Installation
Simply clone this repository and open index.html.

## Technology Used
This game was created *JavaScript* and the *HTML5 Canvas* with a touch of *jQuery* (I might get rid of the jQuery later).

### Rendering & Animations
All animations and rendering are performed using the HTML 5 Canvas and my own animation functions that interp between keyframes.

I also decided to perform these calculations and final drawing from within the object itself, rather than within the 'engine', as it makes it easier than grabbing all the render functions from within the engine. Instead, the engine calls each objects `draw()` function and these functions grab a reference to the engine.

For example, the PacMan *Waca-waca* animation is performed using the below data:
```
animation: {
  duration: 500, // milliseconds
  currentTimestamp: 0, // is incremented during animation
  keyFrames: [
    {
      startAngle: 0,
      endAngle: 2 * Math.PI //(360deg in radians)
    },
    {
      startAngle: 1,
      endAngle: 2 * Math.PI - 1
    },
    {
      startAngle: 0,
      endAngle: 2 * Math.PI //(360deg in radians)
    }
  ]
}
```
