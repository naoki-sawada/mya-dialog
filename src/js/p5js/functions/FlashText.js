export class FlashText {
  constructor(p, speed) {
    this.p = p;
    this.speed = speed;
    this.flash_flag = false;
  }
  disp(str){
    if (this.p.frameCount % this.speed == 0) {
      if (this.flash_flag) {
        this.flash_flag = false;
      } else {
        this.flash_flag = true;
      }
    }
    if (this.flash_flag) {
      return str;
    }
    return '';
  }
}
