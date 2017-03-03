import colors from '../config/Colors';

export class Info_onDialog {
  constructor(p){
    this.p = p;

    this.x = this.p.width*0.5;
    this.y = this.p.height*0.37;//75;
    this.width = this.p.width*0.975;//0.925;
    this.height = this.p.height*0.675;

    this.coner_x = this.x-(this.width*0.5);
    this.coner_y = this.y-(this.height*0.5);

    //box size
    this.wSize = 0;
    this.hSize = 0;
    this.speed = 0.045;
  }

  disp_box(){
    this.p.fill(this.p.color(255, 255, 255, 255*0.15));
    this.p.rectMode(this.p.CENTER);
    this.p.stroke(this.p.color(colors.WHITE));
    this.p.strokeWeight(4);
    this.p.rect(this.x, this.y, this.width*this.wSize, this.height*this.hSize);
  }

  open(){
    if (this.hSize >= 1.0) {
      this.wSize = 1.0;
      this.hSize = 1.0;
      return true;
    } else {
      if (this.wSize < 1.0) {
        this.wSize += this.speed + 0.1;
      } else {
        this.wSize = 1.0;
        this.hSize += this.speed;
      }
    }
    return false;
  }

  close() {
    if (this.wSize <= 0.0) {
      this.wSize = 0.0;
      this.hSize = 0.0;
      return true;
    } else {
      if (this.hSize <= 0.0) {
        this.wSize -= this.speed + 0.05;
        this.hSize = 0.0;
      } else {
        this.wSize = 1.0;
        this.hSize -= this.speed + 0.1;
      }
    }
    return false;
  }

  disp_titile(str) {
    // display the text
    this.p.fill(this.p.color(colors.WHITE));
    this.p.textAlign(this.p.LEFT, this.p.CENTER);
    this.p.noStroke();
    this.p.text(str, this.coner_x + this.width*0.075, this.coner_y + 60);
    // display the icon
    this.p.imageMode(this.p.CENTER);
    this.p.image(this.icon, this.coner_x + this.width*0.04, this.coner_y + 60);
  }
}
