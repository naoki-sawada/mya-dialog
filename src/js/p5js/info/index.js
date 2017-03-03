import { Hints } from './Hints';
// import { Notice } from './Notice';
import { Time } from './Time';
// import { Weather } from './Weather';

export class Info {
  constructor(p, lang) {
    this.p = p;
    this.hints = new Hints(this.p, lang);
    // this.notice = new Notice(this.p);
    this.time = new Time(this.p);
    // this.weather = new Weather(this.p);
    this.states = { disp: 'hints', state: 'close' };
    this.options = {};
    //this.random_list = ['hints', 'notice'];
  }
  disp() {
    switch (this.states.disp) {
      case 'hints':
        this.hints.disp(this.states.state);
        break;
      // case 'notice':
      //   this.notice.disp(this.states.state);
      //   break;
      case 'time':
        this.time.disp(this.states.state, this.options);
        break;
      // case 'weather':
      //   this.weather.disp(this.states.state, this.options);
      //   break;
    }
  }
  renew(obj, options) {
    this.states = obj;
    this.options = options;
  }
  random() {
    this.states = { disp: 'hints', state: 'close' };
  }
  setLang(lang) {
    this.hints.setLang(lang);
  }
}
