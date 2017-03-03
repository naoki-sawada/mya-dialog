import { Text } from './Text';

export class DialogText {
  constructor(p){
    this.p = p;
    this.texts = new Text(this.p);
  }
  disp(sys_text, usr_text){
    this.texts.disp(sys_text, usr_text);
  }
  reset_sysmsg(){
    this.texts.reset_sysmsg();
  }
  reset_usrmsg(){
    this.texts.reset_usrmsg();
  }
}
