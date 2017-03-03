import colors from '../config/Colors';

export class RandomNumber {
  constructor(p) {
    this.p = p;
    this.rText = new Array(10);
    for (var i = 0; i < 10; i++) {
      this.rText[i] = new RandomNumbers(p);
      this.rText[i].randreset();
    }
  }

  disp(){
    for (var i = 0; i < 10; i++) {
      if (this.p.frameCount % 4.0 == 0) {
        this.rText[i].randreset();
      }
      this.rText[i].disp(50, this.p.height*0.05 + (i*30));
    }
  }
}

class RandomNumbers {
  constructor (p) {
    this.p = p;
    this.randreset();
  }

  randreset(){
    this.str = String(10 * Math.random() * Math.pow(10,16));
  }

  disp(x, y){
    this.p.fill(this.p.color(colors.LIGHT_GLEEN_80));
    this.p.textSize(25);
    this.p.noStroke();
    this.p.textFont('Hiragino Kaku Gothic ProN');
    this.p.textAlign(this.p.LEFT, this.p.CENTER);
    this.p.text(this.str, x, y);//this.p.height*0.5);
  }
}
