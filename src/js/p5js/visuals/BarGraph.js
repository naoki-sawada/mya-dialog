import colors from '../config/Colors';

export class BarGraph {
  constructor(p) {
    this.p = p;
    this.bar_length = [];
    this.reset();
  }

  disp(){
    if (this.p.frameCount % 3 == 0) {
      this.reset();
    }
    this.p.rectMode(this.p.CONER);
    for (var i=0; i < 15; i++) {
      this.p.rectMode(this.p.CORNER);
      this.p.rect(this.p.width*0.02 + (this.p.width * 0.01 * i), this.p.height*0.710 - this.bar_length[i], 15, this.bar_length[i]);
    }
  }

  reset(){
    for (var i=0; i < 15; i++) {
      this.bar_length[i] = 100 * this.p.random();
    }
  }
}
