import { Info_onDialog } from './Info_onDialog';
import { Info_full } from './Info_full';
import { FlowText } from '../functions/FlowText';
import { FlashText } from '../functions/FlashText';
import colors from '../config/Colors';

export class Notice extends Info_full {
  constructor(p){
    super(p);
    this.icon = this.p.loadImage('../assets/img/icon/!.png');
    this.flowtext = new FlowText(this.p, 2.0);
    this.flashtext = new FlashText(this.p, 25);
    this.once = false;
    this.anime = this.p.loadAnimation('../assets/img/followme/1.png', '../assets/img/followme/82.png');
  }
  disp(type){
    let ret;
    if (type === 'open'){
      ret = super.open();
      super.disp_box();
      if (ret) {
        super.disp_titile('Notice');
        this.p.fill(this.p.color(colors.LIGHT_GLEEN));
        this.p.textAlign(this.p.CENTER);
        this.p.textSize(50);
        this.p.noStroke();
        this.p.textFont('Hiragino Kaku Gothic ProN');
        var text = 'Please follow me!';
        var disp_text = this.flowtext.disp(text);
        this.p.text(this.flowtext.disp(text), this.x, this.coner_y + this.height*0.15);
        if (disp_text.length == text.length) {
          this.p.animation(this.anime, this.x, this.coner_y + this.height*0.575);
        }
      }
      this.once = true;
    }
    else if (type === 'close') {
      ret = super.close();
      super.disp_box();
      if (ret && this.once) {
        this.anime.rewind();
        this.flowtext.reset();
        this.once = false;
      }
    }
  }
}
