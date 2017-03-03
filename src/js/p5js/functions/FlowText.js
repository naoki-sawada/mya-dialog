export class FlowText {
  constructor(p, speed) {
    this.p = p;
    this.speed = speed;
    this.reset();
  }
  disp(str){
    if (this.p.frameCount % this.speed == 0) {
      if (this.message_count < str.length) {
        this.disp_message += str.charAt(this.message_count);
        this.message_count += 1;
      }
    }
    return this.disp_message;
  }
  reset(){
    this.message_count = 0;
    this.disp_message = '';
  }
}
