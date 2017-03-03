import config from 'conf/development';

export class WebSpeechRecognition {
  constructor() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    this.recognizer = new webkitSpeechRecognition();
    this.recognizer.lang = config.lang;
    this.recognizing = false;
  }

  setLang(lang) {
    this.recognizer.lang = lang;
  }

  start() {
    return new Promise(( resolve, reject ) => {
      this.recognizer.onresult = res => {
        this.recognizer.stop();
        this.recognizing = false;
        const text = this._formatText( res.results[0][0].transcript );
        resolve({ text });
      };

      this.recognizer.onend = this.recognizer.onnomatch = e => {
        if ( ! this.recognizing ) { return; }
        console.log( 'recognition restart' );
        this.recognizer.stop();
        setTimeout(() => {
          this.recognizer.start();
        }, 10);
      };

      if ( !this.recognizing ) {
        try {
          this.recognizer.start();
        } catch( e ) {
          this.recognizer.stop();
          setTimeout(() => {
            this.recognizer.start();
          }, 10);
        }
        this.recognizing = true;
      }
    });
  }

  stop() {
    return new Promise(( resolve, reject ) => {
      setTimeout(() => {
        if ( this.recognizing ) {
          this.recognizer.stop();
          this.recognizing = false;
        }
        resolve();
      }, 10);
    });
  }

  _formatText( text ) {
    // add space in front of '
    return text.replace( /([a-zA-Z0-9-_])'([a-zA-Z0-9-_])/g, "$1 '$2" );
  }
}
