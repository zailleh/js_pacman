// this file will set up visual elements for pacman game.
// this uses jQuery

// first, need to set up a gameplay area, visually, for this I want to use a canvas.
// refer to http://www.williammalone.com/articles/create-html5-canvas-javascript-sprite-animation/ for help with sprite animations.
// create canvas:
const $gameCanvas = $( '<canvas>' );
const canvas2d = $gameCanvas[0].getContext('2d')

canvas2d.canvas.width  = 260 * 2;
canvas2d.canvas.height = 290 * 2;

var tick = document.createEvent('Event');
tick.initEvent('tick', true, true);



$( document ).ready( () => {
  $( '.container' ).prepend( $gameCanvas );
  document.addEventListener( 'tick', () => render.tick() );
  setInterval( () => document.dispatchEvent(tick), 1000 / render.frameRate);
});


const render = { // will contain functions to draw things on the canvas
  canvas: canvas2d, // reference to the 2d canvas
  frameRate: 30, // frames per second
  background: function( backgroundURL ) {
    const ctx = this.canvas;
    // create new image
    const background = new Image();

    // when image is loaded, draw on the canvas
    background.onload = () => ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);

    background.src = backgroundURL;
  },
  offset: { x: 1.5, y: 1.5 },
  grid: { x: 28, y: 31 },
  renderFrame: function() {
    this.canvas.clearRect(0,0, this.canvas.canvas.width, this.canvas.canvas.height);
    //this.background('res/arcade.jpg');
    game.drawAll();
  },
  interpValue: function( from, to, delta ) {
    return from + ( (to - from ) * delta )
  },
  frame: 0,
  tick: function() {
    this.renderFrame();
    game.tick();
    //console.log( this.frame++ );
  },
  normalizeCoords: function( coords ) {
    return {
      x: (coords.x + this.offset.x) * this.canvas.canvas.width / this.grid.x,
      y: (coords.y + this.offset.y) * this.canvas.canvas.height / this.grid.y
    }
  },
  roundTo2Dec: function( num ) {
    return parseInt( num * 100 )/100
  },
  getAnimationInfo: function ( obj ) {

    animInfo = {};
    animInfo.ctx = this.canvas;
    animInfo.frameRate = this.frameRate;
    
    if ( !isEmpty(obj.renderInfo) && !isEmpty(obj.renderInfo.animation) ) {
      animInfo.animation = obj.renderInfo.animation
      animInfo.duration = animInfo.animation.duration // -> 1000
      animInfo.timestamp = animInfo.animation.currentTimestamp // -> eg 0 (also increment timestamp)
      animInfo.keyFrames = animInfo.animation.keyFrames.length // -> 3

      animInfo.keyFrameTransitionTime = animInfo.duration / (animInfo.keyFrames - 1) // -> 500
      // -1 as we don't count first keyframe as having duration, eg fence posts |---|---| - there are only two in-between the fence-posts.

      animInfo.fromKeyFrameIndex = Math.floor(animInfo.timestamp / animInfo.keyFrameTransitionTime)
      animInfo.toKeyFrameIndex = animInfo.fromKeyFrameIndex + 1 > animInfo.keyFrames ? 0 : animInfo.fromKeyFrameIndex + 1
      animInfo.fromKeyFrame = animInfo.animation.keyFrames[animInfo.fromKeyFrameIndex];
      animInfo.toKeyFrame = animInfo.animation.keyFrames[animInfo.toKeyFrameIndex];

      // interp values by % between keyframes ( float from 0.0 - 1.0 );
      // 0       %   500  / keyFrameTransitionTime
      animInfo.fractionToKeyFrame = (animInfo.timestamp % animInfo.keyFrameTransitionTime) / animInfo.keyFrameTransitionTime;
    }
    

    return animInfo;
  }
};




const isEmpty = function (obj) {
  return obj === null || obj === undefined
}
