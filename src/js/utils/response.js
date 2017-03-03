export class DummyResponse {
  constructor(p) {
    this.p = p;
  }

  dummyResponse(text) {
    let res = {};
    if (text === '今日の天気は') {
      res = {
        utterance: '今日の天気は曇りです。',
        uiCommand: {
          place: 'Wako',
          day: '2/28',
          weatherID: '2'
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
    randomRes = randomRes.concat(this._repeatArr('short', 7));
    randomRes = randomRes.concat(this._repeatArr('long', 7));
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
