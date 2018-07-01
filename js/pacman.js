const playArea = [ //1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
/*  1 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','|','|','.','.','.','.','.','.','.','.','.','.','.','.'],
/*  2 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
/*  3 */  [ 'O','|','/','/','|','.','|','/','/','/','|','.','|','|','.','|','/','/','/','|','.','|','/','/','|','O'],
/*  4 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
/*  5 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.'],
/*  6 */  [ '.','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','.'],
/*  7 */  [ '.','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','.'],
/*  8 */  [ '.','.','.','.','.','.','|','|','.','.','.','.','|','|',' ','.','.','.','|','|','.','.','.','.','.','.'],
/*  9 */  [ '|','|','|','|','|','.','|','|','|','|','|',' ','|','|',' ','|','|','|','|','|','.','|','|','|','|','|'],
/* 10 */  [ '/','/','/','/','|','.','|','|','|','|','|',' ','|','|',' ','|','|','|','|','|','.','|','/','/','/','/'],
/* 11 */  [ '/','/','/','/','|','.','|','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|','|','.','|','/','/','/','/'],
/* 12 */  [ '/','/','/','/','|','.','|','|',' ','|','|','|',' ',' ','|','|','|',' ','|','|','.','|','/','/','/','/'],
/* 13 */  [ '|','|','|','|','|','.','|','|',' ','|','|','|',' ',' ','|','|','|',' ','|','|','.','|','|','|','|','|'],
/* 14 */  [ '<',' ',' ',' ',' ','.',' ',' ',' ','|','|',' ',' ',' ',' ','|','|',' ',' ',' ','.',' ',' ',' ',' ','>'],
/* 15 */  [ '|','|','|','|','|','.','|','|',' ','|','|','|','|','|','|','|','|',' ','|','|','.','|','|','|','|','|'],
/* 16 */  [ '/','/','/','/','|','.','|','|',' ','|','|','|','|','|','|','|','|',' ','|','|','.','|','/','/','/','/'],
/* 17 */  [ '/','/','/','/','|','.','|','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|','|','.','|','/','/','/','/'],
/* 18 */  [ '/','/','/','/','|','.','|','|',' ','|','|','|','|','|','|','|','|','.','|','|','.','|','/','/','/','/'],
/* 19 */  [ '|','|','|','|','|','.','|','|',' ','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','|'],
/* 20 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','|','|','.','.','.','.','.','.','.','.','.','.','.','.'],
/* 21 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
/* 22 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
/* 23 */  [ 'O','.','.','|','|','.','.','.','.','.','.','.',' ',' ','.','.','.','.','.','.','.','|','|','.','.','O'],
/* 24 */  [ '|','|','.','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','.','|','|'],
/* 25 */  [ '|','|','.','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','.','|','|'],
/* 26 */  [ '.','.','.','.','.','.','|','|','.','.','.','.','|','|','.','.','.','.','|','|','.','.','.','.','.','.'],
/* 27 */  [ '.','|','|','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','|','|','.'],
/* 28 */  [ '.','|','|','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','|','|','.'],
/* 29 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.']
]

// Create a new event called 'tick' -- use 'old' way for IE compatability


// game object!
const game = { // contains all level functions and info
  playArea: [ //1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
  /*  1 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','|','|','.','.','.','.','.','.','.','.','.','.','.','.'],
  /*  2 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
  /*  3 */  [ 'O','|','/','/','|','.','|','/','/','/','|','.','|','|','.','|','/','/','/','|','.','|','/','/','|','O'],
  /*  4 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
  /*  5 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.'],
  /*  6 */  [ '.','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','.'],
  /*  7 */  [ '.','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','.'],
  /*  8 */  [ '.','.','.','.','.','.','|','|','.','.','.','.','|','|',' ','.','.','.','|','|','.','.','.','.','.','.'],
  /*  9 */  [ '|','|','|','|','|','.','|','|','|','|','|',' ','|','|',' ','|','|','|','|','|','.','|','|','|','|','|'],
  /* 10 */  [ '/','/','/','/','|','.','|','|','|','|','|',' ','|','|',' ','|','|','|','|','|','.','|','/','/','/','/'],
  /* 11 */  [ '/','/','/','/','|','.','|','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|','|','.','|','/','/','/','/'],
  /* 12 */  [ '/','/','/','/','|','.','|','|',' ','|','|','|',' ',' ','|','|','|',' ','|','|','.','|','/','/','/','/'],
  /* 13 */  [ '|','|','|','|','|','.','|','|',' ','|','|','|',' ',' ','|','|','|',' ','|','|','.','|','|','|','|','|'],
  /* 14 */  [ '<',' ',' ',' ',' ','.',' ',' ',' ','|','|',' ',' ',' ',' ','|','|',' ',' ',' ','.',' ',' ',' ',' ','>'],
  /* 15 */  [ '|','|','|','|','|','.','|','|',' ','|','|','|','|','|','|','|','|',' ','|','|','.','|','|','|','|','|'],
  /* 16 */  [ '/','/','/','/','|','.','|','|',' ','|','|','|','|','|','|','|','|',' ','|','|','.','|','/','/','/','/'],
  /* 17 */  [ '/','/','/','/','|','.','|','|',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','|','|','.','|','/','/','/','/'],
  /* 18 */  [ '/','/','/','/','|','.','|','|',' ','|','|','|','|','|','|','|','|','.','|','|','.','|','/','/','/','/'],
  /* 19 */  [ '|','|','|','|','|','.','|','|',' ','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','|'],
  /* 20 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','|','|','.','.','.','.','.','.','.','.','.','.','.','.'],
  /* 21 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
  /* 22 */  [ '.','|','|','|','|','.','|','|','|','|','|','.','|','|','.','|','|','|','|','|','.','|','|','|','|','.'],
  /* 23 */  [ 'O','.','.','|','|','.','.','.','.','.','.','.',' ',' ','.','.','.','.','.','.','.','|','|','.','.','O'],
  /* 24 */  [ '|','|','.','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','.','|','|'],
  /* 25 */  [ '|','|','.','|','|','.','|','|','.','|','|','|','|','|','|','|','|','.','|','|','.','|','|','.','|','|'],
  /* 26 */  [ '.','.','.','.','.','.','|','|','.','.','.','.','|','|','.','.','.','.','|','|','.','.','.','.','.','.'],
  /* 27 */  [ '.','|','|','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','|','|','.'],
  /* 28 */  [ '.','|','|','|','|','|','|','|','|','|','|','.','|','|','.','|','|','|','|','|','|','|','|','|','|','.'],
  /* 29 */  [ '.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.']
], // TODO: to be copied from playArea on game start
  testSpace: function( coords ) {
    console.log( coords );
    console.log( this.playArea[coords.y][coords.x] );
    const result = {};
    const that = this;
    switch (this.playArea[coords.y][coords.x]) {
      case '.': // dot
        this.dot.nom( coords );
        result.move = true;
        break;
      case 'O': // power pill
        that.powerPill.nom( coords);
        result.move = true;
        break;
      case '|': // wall
        result.move = false;
        break;
      case ' ': // empty space
        result.move = true;
        break;
      case '>':
      case '<':
        result.move = true;
        break;
      default:
        result.move = false;
    }

    return result;
  },
  powerPill: function( coords ) {
    // set ghosts to vulnerable
    // remove powerPill from playArea
    game.playArea[coords.y][coords.x] = ' ';
    // increment score
    if ( game.getAllDots() === 0 ) {
      // game over: you win!
    }
  },
  getAllDots: function() {
    let dots = [];
    for ( let y = 0; y < this.playArea.length; y++ ) {
      for ( let x = 0; x < this.playArea[y].length; x++ ) {
        if ( this.playArea[y][x] === '.' || this.playArea[y][x] === 'O' ) {
          const dot = {
            x: x,
            y: y
          }
          dots.push( dot )
        }
      }
    }
    return dots;
  },
  intervalID: -1,
  start: function() {
    document.addEventListener('tick',
      () => this.tick()
    )
  },
  tick: function() {
    this.pacman.tick();
    this.ghosts.tick();
    // do stuff on tick
  },
  drawDots: function() {
    const allDots = this.getAllDots();
    for ( let i = 0; i < allDots.length; i++ ) {
      this.dot.draw( allDots[ i ] );
    }
  },
  drawAll: function() {
    this.pacman.draw();
    this.drawDots();

  },
  // ---------------------------------- ENTITIES ---------------------------- //
  dot: {
    nom: function( coords ) {
      // increment score
      // remove dot from playArea
      game.playArea[coords.y][coords.x] = ' ';
      // check if any more dots left
      if ( game.getAllDots() === 0 ) {
        // game over: you win!
      }
    },
    draw: function ( coords ) {
      const ctx = render.canvas;
      const grid = render.grid;
      const offset = render.offset;
      const frameRate = render.frameRate;

      coords = render.normalizeCoords( coords );

      ctx.fillStyle = '#FA0';
      ctx.beginPath();
      ctx.arc( coords.x, coords.y, grid.x / 10, 0, 2 * Math.PI );
      ctx.fill();
    }
  },

  powerPill: {
    nom: function( coords ) {
      // increment score
      // remove dot from playArea
      game.playArea[coords.y][coords.x] = ' ';
      // check if any more dots left
      if ( game.getAllDots() === 0 ) {
        // game over: you win!
      }
    },
    draw: function ( ctx, offset, grid ) {

    }
  },
  // cherry: {} // TODO: Add this last

  // ------------------------------ PACMAN CHILD OBJECT ---------------------- //
  pacman: {  // contains all pacman functions and info
    location: { x: 12, y: 22, xTo: 12.5, yTo: 22 }, //start location is x: 12.5, y: 22

    renderInfo: { // going to be an object that contains all shape info for rendering
      hasAmimation: true,
      animation: {
        duration: 500, // milliseconds
        currentTimestamp: 0,
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
    },

    direction: {x: 0, y: 0},
    move: function() { // direction { x: -1 <> 1; y: -1 <> 1 }
      const newCoords = {};
      newCoords.x = this.location.x + this.direction.x;
      newCoords.y = this.location.y + this.direction.y;

      const moveResult = game.testSpace( newCoords );

      if ( moveResult.move === true ) {
        this.location = newCoords; // if move was a success, set current coords to new coords.
        console.log('moving pacman', this.location);
      } else {
        // do nothing, you can't move there (eg, wall);
      }
    },
    tick: function() {
      // do stuff on tick -- called by parent "game"
      // interval -- do every 1 second
      if ( Math.round( this.tickTimer ) >= this.tickInterval ) {
        this.move();
        this.tickTimer = 0;
      } else {
        this.tickTimer += 1000 / render.frameRate
      }
    },
    tickTimer: 0,
    tickInterval: 500,
    draw: function () {
      const ctx = render.canvas;
      const frameRate = render.frameRate;

      const animation = this.renderInfo.animation
      const duration = animation.duration // -> 1000
      const timestamp = animation.currentTimestamp // -> eg 0 (also increment timestamp)
      const keyFrames = animation.keyFrames.length // -> 3

      const keyFrameTransitionTime = duration / ( keyFrames - 1) // -> 500
      // -1 as we don't count first keyframe as having duration, eg fence posts |---|---| - there are only two in-between the fence-posts.

      // from keyframe index = Math.floor(currentTimestamp / keyFrameTransition)

      const fromKeyFrameIndex = Math.floor( timestamp / keyFrameTransitionTime )
      const toKeyFrameIndex = fromKeyFrameIndex + 1 > keyFrames ? 0 : fromKeyFrameIndex + 1

      const fromKeyFrame = animation.keyFrames[ fromKeyFrameIndex ];
      const toKeyFrame = animation.keyFrames[ toKeyFrameIndex ];

      // interp values by % between keyframes ( float from 0.0 - 1.0 );
      // 0       %   500  / keyFrameTransitionTime
      const fractionToKeyFrame = ( timestamp % keyFrameTransitionTime ) / keyFrameTransitionTime;

      const startAngle = render.interpValue( fromKeyFrame.startAngle, toKeyFrame.startAngle, fractionToKeyFrame );
      const endAngle = render.interpValue( fromKeyFrame.endAngle, toKeyFrame.endAngle, fractionToKeyFrame );

      //console.( startAngle, endAngle );
      // center of cicle // TODO: smooth this using previous & to locations
      let coords = {
        x: this.location.x,
        y: this.location.y
      }
      coords = render.normalizeCoords( coords )

      // size of circle
      const radius = ctx.canvas.width / 29; // magic numberz!

      // draw and fill our cicle
      ctx.fillStyle = '#FF0';
      ctx.beginPath()
      ctx.arc( coords.x, coords.y, radius, startAngle, endAngle );
      ctx.lineTo( coords.x, coords.y );
      ctx.fill();



      if ( Math.round( animation.currentTimestamp ) >= duration ) {
        animation.currentTimestamp = 0;
      } else {
        animation.currentTimestamp += 1000 / frameRate;
      }
    }
  },

  // ------------------------------ GHOSTS CHILD OBJECT ---------------------- //
  ghosts: {
    tick: function() {

    },
    shapeInfo: { // going to be an object that contains all shape info for rendering

    },
    draw: function ( ctx, offset, grid ) {

    }
  }
};
