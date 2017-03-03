import { Info_onDialog } from './Info_onDialog';

export class Info_full extends Info_onDialog {
  constructor(p){
    super(p);
    this.y = this.p.height*0.5;       // fullscreen mode
    this.height = this.p.height*0.95; // fullscreen mode
  }
}
