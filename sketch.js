p5.midi.onInput = function() {
    console.log(this.event);
    printMidi();
}

function setup() {
    createCanvas(660, 400);
    textFont('arial', 64);
    textAlign(LEFT);
}

function mousePressed(){
    // if in bounds:
    if(mouseX<width && mouseY<height) {
      stroke('rgb(255,255,0)');
      strokeWeight(2);
      fill('rgba(255,255,0, 0.25)');
      ellipse(mouseX, mouseY, 50, 50); // circle
    }
}

function mouseClicked() {
    // if in bounds:
    if(mouseX<width && mouseY<height) {
      stroke('rgb(0,255,0)');
      strokeWeight(2);
      fill('rgba(0,255,0, 0.25)');
      ellipse(mouseX, mouseY, 50, 50);
      x = y = 50;
    }
}

function printMidi() {
  console.log('print midi:' + this.event.data[0] + ',' + this.event.data[1] + ',' + this.event.data[2] );
  clear();
    strokeWeight(0);
    text(this.event.data[0], 20, 128);
    text(this.event.data[1], 20, 228);
    text(this.event.data[2], 20, 328);
}
