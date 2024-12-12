function rgba(r, g, b, a) {
  return `rgba(${r},${g},${b},${a}`;
}

function random(min, max) {
  return Math.floor(Math.random() * max-min);
}

// 0: white
// 1: black
// 2: grey
// 3: red
// 4: green
// 5: blue
// 6: orange
// 7: yellow
// 8: purple
// 9: pink
// 10: transparent
// 11: random
const palette = [rgba(255, 255, 255, 1), rgba(0, 0, 0, 1), rgba(128, 128, 128, 1), 
                 rgba(255, 0, 0, 1), rgba(0, 255, 0, 1), rgba(0, 0, 255, 1),
                 rgba(255, 200, 0, 1), rgba(255, 255, 0, 1), rgba(255, 0, 255, 1),
                 rgba(255, 200, 200, 1), rgba(0, 0, 0, 0), rgba(random(0, 255), random(0, 255), random(0, 255))]; 

class all_day {
  constructer(grid, scale) {
    this.grid = grid; // the bitmap
    this.sacle = scale; // the scale
  }

  render(canvas) {
    var ctx = document.getElementById(canvas).getContext('2d'); // get the canvas
    for(var i = 0; i != 63; i++) {
      if(this.grid[i]){ // check if the row exists
        for(var j = 0; j != 63; j++) {
          ctx.fillStyle = this.grid[i][j]; // set the color
          ctx.rect(j*this.scale, i*this.scale, 64*this.scale, 64*this.scale); // draw the pixel
        }
      }
      else {
        console.error(`index ${this.grid[i]} doesn't exist) // error if the row doesn't exist
      }
    }
  }
}
