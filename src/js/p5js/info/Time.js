import { Info_onDialog } from './Info_onDialog';
import { FlowText } from '../functions/FlowText';
import colors from '../config/Colors';

export class Time extends Info_onDialog {
  constructor(p){
    super(p);
    this.icon = this.p.loadImage('../assets/img/icon/time.png');
    this.flowtext = new FlowText(this.p, 2.0);
    this.once = false;
  }
  disp(type, options){
    let ret;
    if (type === 'open'){
      ret = super.open();
      super.disp_box();
      if (ret) {
        super.disp_titile('Time');
        this.p.fill(this.p.color(colors.LIGHT_GLEEN));
        this.p.textAlign(this.p.CENTER);
        this.p.textSize(65);
        this.p.noStroke();
        this.p.textFont('Hiragino Kaku Gothic ProN');
        var text = 'Tokyo';
        this.p.text(text, this.x, this.coner_y + this.height*0.275);
        this.p.textSize(50);
        this.p.text('Today', this.x - this.x*0.4, this.coner_y + this.height*0.575);
        this.p.textSize(125);
        let date = new Date();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let disp_date = date.getHours() + ':' + ((minutes >= 10) ? minutes : `0${minutes}`);
        this.p.text(disp_date, this.x, this.coner_y + this.height*0.575);
      }
      this.once = true;
    }
    else if (type === 'close') {
      ret = super.close();
      super.disp_box();
      if (ret && this.once) {
        this.flowtext.reset();
        this.once = false;
      }
    }
  }
}
