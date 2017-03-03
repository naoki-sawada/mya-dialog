export class DummyResponse {
  constructor(p) {
    this.p = p;
  }

  dummyResponse(text) {
    let res = {};
    if (text === '今何時') {
      res = {
        utterance: '',
        uiCommand: {
          time: 'time'
        },
        voice: 'notice'
      };
    } else {
      res = {
        utterance: this._randomRes(),
        uiCommand: undefined,
        voice: 'normal'
      };
    }
    console.log(res);
    return res;
  }

  _randomRes() {
    let randomRes = [];
    randomRes = randomRes.concat(this._repeatArr('short', 8));
    randomRes = randomRes.concat(this._repeatArr('long', 8));
    randomRes = randomRes.concat(this._repeatArr('none', 1));
    return this.p.random(randomRes);
  }

  _repeatArr(str, num) {
    let retArr = [];
    for (let i = 0; i < num; i++) {
      retArr.push(str);
    }
    return retArr;
  }
}
