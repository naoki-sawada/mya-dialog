import { FlowText } from '../functions/FlowText';
import { Box } from './Box';
import colors from '../config/Colors';
import conf from '../../conf/development';  //todo; naosu

export class Text {
  constructor (p) {
    this.p = p;
    this.pos_x = p.width * 0.050;
    this.pos_y = p.height * 0.85;
    this.text_offset = 35;
    if (conf.lang === 'en-US') {
      this.text_return = 87;
    } else if (conf.lang === 'ja-JP') {
      this.text_return = 42;
    }
    this.box = new Box(this.p, this.p.width*0.5, this.p.height*0.85,
      this.p.width*0.975, this.p.height*0.25, this.p.CENTER);
    this.flowtext_sys = new FlowText(this.p, 2.0);
    this.flowtext_usr = new FlowText(this.p, 2.0);
  }

  disp(sys, usr){
    // dialog background
    this.box.disp();
    // dialog text
    this.p.fill(this.p.color(colors.WHITE));
    this.p.textSize(35);
    this.p.noStroke();
    this.p.textFont('Hiragino Kaku Gothic ProN');
    this.p.textAlign(this.p.LEFT, this.p.CENTER);
    this.p.text('SYSTEM ', this.pos_x, this.pos_y + this.text_offset);
    this.p.text('YOU ', this.pos_x, this.pos_y - this.text_offset);
    this.p.textAlign(this.p.LEFT, this.p.TOP);
    if (sys.length > this.text_return) {
      sys = sys.slice(0, this.text_return) + '\n' + sys.slice(this.text_return, sys.length);
    }
    this.p.text(this.flowtext_sys.disp(sys), this.pos_x + 250, this.pos_y + this.text_offset - 15);
    this.p.text(this.flowtext_usr.disp(usr), this.pos_x + 250, this.pos_y - this.text_offset - 15);
  }

  reset_sysmsg(){
    this.flowtext_sys.reset();
  }
  reset_usrmsg(){
    this.flowtext_usr.reset();
  }
}
