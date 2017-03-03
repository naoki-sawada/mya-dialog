import { Timer } from '../functions/Timer';
import { FlowText } from '../functions/FlowText';
import SystemMessageList from '../config/SystemMessageList';
import colors from '../config/Colors';

export class SystemMessage {
  constructor(p) {
    this.p = p;
    this.timer = new Timer();
    this.ft = new FlowText(this.p, 5.0);
    this.loop_messages = SystemMessageList;
    this.reset();
  }

  disp(){
    if (this.timer.get() > 15.0) {
      this.reset();
      this.timer.reset();
      this.ft.reset();
    }
    this.p.fill(this.p.color(colors.LIGHT_GLEEN));
    this.p.textSize(30);
    this.p.noStroke();
    this.p.textFont('Hiragino Kaku Gothic ProN');
    this.p.textAlign(this.p.RIGHT, this.p.CENTER);
    this.p.text('[System message]', this.p.width*0.98, this.p.height*0.7 - 60);
    this.p.text(this.ft.disp(this.set_message), this.p.width*0.98, this.p.height*0.7 - 15);
  }

  reset() {
    this.set_message = this.p.random(this.loop_messages);
  }

  set(str) {
    this.set_message = String(str);
    this.timer.reset();
    this.ft.reset();
  }
}
