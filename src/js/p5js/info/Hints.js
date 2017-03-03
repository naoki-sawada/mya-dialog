import { Info_onDialog } from './Info_onDialog';
import { FlowText } from '../functions/FlowText';
import combination from '../functions/Combination';
import colors from '../config/Colors';
import hintlistJP from '../config/hints/jp/HintList';
//import hintlistEN from '../config/hints/en/HintList';

export class Hints extends Info_onDialog {
  constructor(p, lang) {
    super(p);
    this.icon = this.p.loadImage('../assets/img/icon/bulb.png');
    this.flowtext = new FlowText(this.p, 2.0);
    this.once = false;
    this.setLang(lang);
    this.hints_stock();
  }

  disp(type) {
    let ret;
    if (type === 'open'){
      ret = super.open();
      super.disp_box();
      if (ret) {
        super.disp_titile('Hints');
        this.p.fill(this.p.color(colors.WHITE));
        this.p.textAlign(this.p.CENTER);
        this.p.textSize(40);
        this.p.noStroke();
        this.p.textFont('Hiragino Kaku Gothic ProN');
        var disp_text = this.flowtext.disp(this.topText);
        this.p.text(this.flowtext.disp(disp_text), this.x, this.coner_y + this.height*0.20);
        if (disp_text.length == this.topText.length) {
          this.p.textSize(35);
          this.p.text(this.hints[0], this.x, this.coner_y + this.height*0.375);
          this.p.text(this.hints[1], this.x, this.coner_y + this.height*0.475);
          this.p.text(this.hints[2], this.x, this.coner_y + this.height*0.575);
          this.p.text(this.hints[3], this.x, this.coner_y + this.height*0.675);
          this.p.text(this.hints[4], this.x, this.coner_y + this.height*0.775);
        }
      }
      this.once = true;
    }
    else if (type === 'close') {
      ret = super.close();
      super.disp_box();
      if (ret && this.once) {
        this.flowtext.reset();
        this.hints_stock();
        this.once = false;
      }
    }
  }

  hints_stock() {
    this.hints = [];
    var gen_arr = combination(this.hintlist.length, 5);
    for (var i = 0; i < gen_arr.length; i++) {
      this.hints.push(this.hintlist[gen_arr[i]]);
    }
  }

  setLang(lang) {
    if (lang === 'ja-JP') {
      this.hintlist = hintlistJP;
      this.topText = 'このように話しかけてください...';
    } else if (lang === 'en-US') {
      this.hintlist = hintlistEN;
      this.topText = 'Some things you can ask me...';
    }
    this.hints_stock();
  }
}
