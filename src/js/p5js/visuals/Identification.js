import { FlashText } from '../functions/FlashText';
import colors from '../config/Colors';

export class Identification {
  constructor(p){
    this.p = p;
    this.flashtext = new FlashText(this.p, 30.0);
  }

  disp(){
    // show the text
    this.p.fill(colors.LIGHT_GLEEN);
    this.p.textSize(30);
    this.p.noStroke();
    this.p.textFont('Hiragino Kaku Gothic ProN');
    this.p.textAlign(this.p.RIGHT, this.p.CENTER);
    this.p.text('[Identification]', this.p.width*0.98, this.p.height*0.05 - 10);
    this.p.text(this.flashtext.disp('????'), this.p.width*0.98, this.p.height*0.05 + 35);
  }
}
