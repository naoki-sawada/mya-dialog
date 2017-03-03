import 'addons';

import * as states from './config/States';
import conf from 'conf/development';

import { WebSpeechRecognition } from 'utils/recognition';
import { DummyResponse } from 'utils/response';
import { Timer }  from './functions/Timer';
import { Sound } from '../sound/Sound';

import { DialogText } from './dialog';
import { Info } from './info';


const p5 = require('p5');

function sketch(p) {
  const Recognition = new WebSpeechRecognition();
  const Response = new DummyResponse(p);
  const timer = new Timer();
  const sound = new Sound();

  let dialogtext;
  let info;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    dialogtext = new DialogText(p);
    info = new Info(p, conf.lang);

    // sppech recognition setup
    Recognition.start().then(resultRec, failedRec);
  };

  p.draw = function() {
    if (states.visual.dialog) {
      p.background(p.color('#ffc7c7'));
      // --- Show dialog ---
      dialogtext.disp(states.utterance.sys, states.utterance.usr);
      // --- Show infromation ---
      if (states.visual.info.disp) {
        info.renew({disp: states.visual.info.now, state: 'open'}, states.visual.info.options);
        info.disp();
      } else {
        info.renew({disp: states.visual.info.now, state: 'close'}, {});
        info.disp();
      }
    }
    if (timer.get() > 30.0) {
      resetText();
      info_states();

      timer.reset();
    }
  };

  p.keyPressed = function() {
    if (p.keyCode === p.DOWN_ARROW) {
      resultRec({ text: 'hello' });
    } else if (p.keyCode === p.RIGHT_ARROW) {
      resultRec({ text: '今何時' });
    }
  };

  const resetText = () => {
    states.utterance.sys = '';
    dialogtext.reset_sysmsg();
    states.utterance.usr = '';
    dialogtext.reset_usrmsg();
  };

  const info_states = (set, options) => {
    if (!states.visual.info.disp) {
      states.visual.info.disp = true;
      states.visual.info.now = ( set ? set : p.random(['hints']));
      states.visual.info.options = options;
    } else {
      states.visual.info.disp = false;
    }
  }

  const resultRec = (arg) => {
    console.log('Recgnition Success!: ' + arg.text);
    timer.reset();
    states.utterance.usr = arg.text;
    dialogtext.reset_usrmsg();
    let res = Response.dummyResponse(arg.text);
    states.visual.info.disp = false;

    dummyMessage(res);
  };

  const failedRec = (err) => {
    console.log(err);
  };

  const dummyMessage = (data) => {
    states.utterance.sys = '';
    dialogtext.reset_sysmsg();
    Recognition.start().then(resultRec, failedRec);

    // text
    let utterance = data.utterance;
    // states.utterance.sys = utterance;

    // say
    let saySound = '';
    if (data.voice === 'notice') {
      saySound = 'assets/sound/mya_e5_short.wav';
      states.utterance.sys = 'みゃ！';
    } else {
      switch (utterance) {
        case 'short':
          saySound = 'assets/sound/mya_b4_short.wav';
          states.utterance.sys = 'みゃ。';
          break;
        case 'long':
          saySound = 'assets/sound/mya_b4.wav';
          states.utterance.sys = 'みゃー。';
          break;
        case 'none':
          saySound = '';
          states.utterance.sys = '.....。';
          break;
      }
    }
    sound.reload(saySound);

    // UI command handler
    let uiCommandObj = data.uiCommand;
    if (uiCommandObj) {
      states.visual.info.disp = false;
      console.log(uiCommandObj);
      if (uiCommandObj.weatherID) {
        info_states('weather', uiCommandObj);
      }
      if (uiCommandObj.time) {
        info_states('time', uiCommandObj);
      }
    }
  };
}

const app = new p5(sketch, document.getElementById('app'));
