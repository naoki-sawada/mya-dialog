import colors from '../config/Colors';

export class Box {
  constructor (p, x, y, width, height, rectMode) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rectMode = rectMode;
  }
  disp(){
    this.p.fill(this.p.color(255, 255, 255, 255*0.15));
    this.p.rectMode(this.rectMode);
    this.p.stroke(this.p.color(colors.WHITE));
    this.p.strokeWeight(4);
    this.p.rect(this.x, this.y, this.width, this.height);
  }
}
