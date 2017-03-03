export class Sound {
  constructor() {
    this.audio = new Audio();
  }

  reload(musicSrc) {
    console.log(`${musicSrc}`);
    if (musicSrc) {
      this.audio.src = `${musicSrc}`;
      this.audio.play();
    }
  }
}
