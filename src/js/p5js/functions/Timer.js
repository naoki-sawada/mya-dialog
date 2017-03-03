export class Timer {
  constructor(){
    this.reset();
  }

  get(){
    this.dn = new Date();
    var startMsec = this.dt.getTime();
    var nowMsec = this.dn.getTime();
    var dTime = (nowMsec - startMsec) / 1000;
    return dTime;
  }

  reset(){
    this.dt = new Date();
  }
}
