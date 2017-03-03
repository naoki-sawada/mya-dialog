import { FlashText } from '../functions/FlashText';

export class HelpText {
  constructor(p){
    this.p = p;
    this.x = this.p.width*0.5;
    this.y = this.p.height*0.85;
    this.width = this.p.width*0.975;
    this.height = this.p.height*0.25;
    this.flashtext = new FlashText(this.p, 60.0);
  }
  disp( status ){
    this.disp_background();
    switch (status) {
      case 'listening':
        this.disp_text(this.flashtext.disp('I\'m listening...'));
        break;
      case 'what-to-say':
        break;
    }
  }
  disp_background(){
    this.p.fill(this.p.color(0, 0, 0, 255*0.6));
    this.p.rectMode(this.p.CENTER);
    //this.p.stroke(this.p.color(43, 233, 216));
    //this.p.strokeWeight(4);
    this.p.noStroke();
    this.p.rect(this.x, this.y, this.width, this.height);
  }
  disp_text(str){
    this.p.fill(this.p.color(43, 233, 216));
    this.p.textSize(35);
    this.p.noStroke();
    this.p.textAlign(this.p.CENTER, this.p.CENTER);
    this.p.text(str, this.x, this.y);
  }
  fade() {
  }
}
