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
    // console.log( coords );
    // console.log( this.playArea[coords.y][coords.x] );
    const result = {};
    const that = this;
    try {
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
    } catch (err) {
      result.move = false;
    }

    return result;
  },
  getAllDots: function() {
    let dots = [];
    for ( let y = 0; y < this.playArea.length; y++ ) {
      for ( let x = 0; x < this.playArea[y].length; x++ ) {
        if ( this.playArea[y][x] === '.') {
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
  getAllPills: function() {
    let pills = [];
    for ( let y = 0; y < this.playArea.length; y++ ) {
      for ( let x = 0; x < this.playArea[y].length; x++ ) {
        if ( this.playArea[y][x] === 'O') {
          const pill = {
            x: x,
            y: y
          }
          pills.push( pill )
        }
      }
    }
    return pills;
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
  drawPowerPills: function() {
    const allPills = this.getAllPills();
    for (let i = 0; i < allPills.length; i++) {
      this.powerPill.draw(allPills[i]);
    }
  },
  drawAll: function() {
    this.pacman.draw();
    this.drawDots();
    this.drawPowerPills();
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
    draw: function ( coords ) {
      const ctx = render.canvas;
      const grid = render.grid;

      coords = render.normalizeCoords(coords);

      ctx.fillStyle = '#FA0';
      ctx.beginPath();
      ctx.arc(coords.x, coords.y, grid.x / 4, 0, 2 * Math.PI);
      ctx.fill();
    }
  },
  // cherry: {} // TODO: Add this last

  // ------------------------------ PACMAN CHILD OBJECT ---------------------- //
  pacman: {  // contains all pacman functions and info
    location: { x: 12.5, y: 22 }, //start location is x: 12.5, y: 22
    nextLocation: { x: 12.5, y: 22 },
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
    currentDirection: { x: 0, y: 0 },
    move: function() { // direction { x: -1 <> 1; y: -1 <> 1 }
      // update this location to the next location each tick interval (we've reached it)
      this.location.x = this.nextLocation.x;
      this.location.y = this.nextLocation.y;

      // find out what our next location will be
      const newCoords = {};
      newCoords.x = Math.floor(this.location.x) + this.direction.x
      newCoords.y = Math.floor(this.location.y) + this.direction.y

      // test to see if it's a valid location to move to
      const moveResult = game.testSpace( newCoords );

      if ( moveResult.move === true ) {
        // set the next square we're moving to
        this.nextLocation.x = newCoords.x;
        this.nextLocation.y = newCoords.y;
        // save this as a valid direction
        this.currentDirection.x = this.direction.x;
        this.currentDirection.y = this.direction.y;
      } else {
        // reset direction as this is invalid
        this.currentDirection.x = 0;
        this.currentDirection.y = 0;
      }
    },
    animove: function() {
      const moveAmntX = this.currentDirection.x / 5; //TODO: Magic Number? Works perfectly but should be calculated.
      const moveAmntY = this.currentDirection.y / 5;
      const newX = render.roundTo2Dec(this.location.x + moveAmntX);
      const newY = render.roundTo2Dec(this.location.y + moveAmntY);
      this.location.x = newX
      this.location.y = newY
      $('.pacmanLocation').text(`Pacman - x:${newX} y:${newY}`)
    },
    tick: function() {
      // do stuff on tick -- called by parent "game"
      // interval -- do every 1 second
      
      if ( this.tickTimer >= this.tickInterval ) {
        this.move()
        this.tickTimer = 0;
      } else {
        this.tickTimer += 1000 / render.frameRate
        this.animove();
        
      }
    },
    tickTimer: 0,
    tickInterval: 30 * 4,
    getDirectionInRadians: function() {
      const dir = this.currentDirection

      if (dir.x == 1) { // to the right
        return Math.PI * 0;
      } else if (dir.y == -1 ) { // downwards
        return Math.PI * -0.5;
      } else if (dir.x == -1 ) { // to the left
        return Math.PI * 1;
      } else if (dir.y == 1) { // upwards
        return Math.PI * 0.5;
      } else {
        return false;
      }

    },
    draw: function () {
      const animInfo = render.getAnimationInfo( this );

      const directionAngle = this.getDirectionInRadians();
      let startAngle, endAngle;
      if ( directionAngle === false ) {
        startAngle = 0;
        endAngle = Math.PI * 2;
      } else {
        startAngle = render.interpValue(animInfo.fromKeyFrame.startAngle, animInfo.toKeyFrame.startAngle, animInfo.fractionToKeyFrame) + directionAngle
        
        endAngle = render.interpValue(animInfo.fromKeyFrame.endAngle, animInfo.toKeyFrame.endAngle, animInfo.fractionToKeyFrame) + directionAngle
      }
     
      //console.( startAngle, endAngle );
      // center of cicle // TODO: smooth this using previous & to locations
      let coords = {
        x: this.location.x,
        y: this.location.y
      }
      coords = render.normalizeCoords( coords )

      // size of circle
      const radius = animInfo.ctx.canvas.width / 29; // magic numberz!

      // draw and fill our cicle
      animInfo.ctx.fillStyle = '#FF0';
      animInfo.ctx.beginPath()
      animInfo.ctx.arc( coords.x, coords.y, radius, startAngle, endAngle );
      animInfo.ctx.lineTo( coords.x, coords.y );
      animInfo.ctx.fill();

      if (Math.round( this.renderInfo.animation.currentTimestamp ) >= this.renderInfo.animation.duration ) {
        this.renderInfo.animation.currentTimestamp = 0;
      } else {
        this.renderInfo.animation.currentTimestamp += 1000 / animInfo.frameRate;
      }
    }
  },

  // ------------------------------ GHOSTS CHILD OBJECT ---------------------- //
  ghosts: {
    tick: function() {

    },
    shapeInfo: { // going to be an object that contains all shape info for rendering

    },
    draw: function ( colour ) {
      const animInfo = render.getAnimationInfo(this);

      // TODO: Draw 
    }
  }
};
