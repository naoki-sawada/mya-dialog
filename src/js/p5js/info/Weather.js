import { Info_onDialog } from './Info_onDialog';
import { FlowText } from '../functions/FlowText';
import colors from '../config/Colors';
import imgWeather from '../data/icon/weather.png';
import imgSunnyStart from '../data/weather/sunny/sunny001.png';
import imgSunnyEnd from '../data/weather/sunny/sunny003.png';
import imgRainyStart from '../data/weather/rainy/rainy-01.png';
import imgRainyEnd from '../data/weather/rainy/rainy-25.png';
import imgCloudy from '../data/weather/cloudy/cloudy.png';
import imgCloudSunny from '../data/weather/cloud_sunny/cloud_sunny.png';
import imgThunderstorm from '../data/weather/thunderstorm/thunderstorm.png';

export class Weather extends Info_onDialog {
  constructor(p) {
    super(p);
    this.icon = this.p.loadImage(imgWeather);
    this.weatherIcons = {
      sunny: this.p.loadAnimation(imgSunnyStart, imgSunnyEnd),
      rainy: this.p.loadAnimation(imgRainyStart, imgRainyEnd),
      cloudy: this.p.loadImage(imgCloudy),
      cloudSunny: this.p.loadImage(imgCloudSunny),
      thunderstorm: this.p.loadImage(imgThunderstorm),
      snow: '',
      mist: ''
    };
    this.flowtext = new FlowText(this.p, 2.0);
    this.once = false;
  }

  id2icon(id) {
    let icon;
    if (id == 1) {
      icon = { img: this.weatherIcons.sunny, anime: true };
    } else if (id == 2) {
      icon = { img: this.weatherIcons.cloudSunny, anime: false };
    } else if (id >= 3 && id <= 4) {
      icon = { img: this.weatherIcons.cloudy, anime: false };
    } else if (id >= 9 && id <= 10) {
      icon = { img: this.weatherIcons.rainy, anime: true };
    } else if (id == 11) {
      icon = { img: this.weatherIcons.thunderstorm, anime: false };
    } else if (id == 13) {
      icon = { img: this.weatherIcons.snow, anime: false };
    } else if (id == 50) {
      icon = { img: this.weatherIcons.mist, anime: false };
    }
    return icon;
  }

  disp(type, options) {
    if (type === 'open'){
      let ret = super.open();
      super.disp_box();
      if (ret) {
        super.disp_titile('Weather');
        this.p.fill(this.p.color(colors.LIGHT_GLEEN));
        this.p.textAlign(this.p.CENTER);
        this.p.textSize(65);
        this.p.noStroke();
        this.p.textFont('Hiragino Kaku Gothic ProN');
        let text = options.place;
        this.p.text(text, this.x, this.coner_y + this.height*0.275);
        this.p.textSize(50);
        let leftStr = options.day;
        this.p.text(leftStr, this.x - this.x*0.4, this.coner_y + this.height*0.575);
        // disp the weather icon
        let icon = this.id2icon(options.weatherID);
        if (icon) {
          if (icon.anime) {
            this.p.animation(icon.img, this.x, this.coner_y + this.height*0.575);
          } else {
            this.p.image(icon.img, this.x, this.coner_y + this.height*0.575);
          }
        }

      }
      this.once = true;
    }
    else if (type === 'close') {
      let ret = super.close();
      super.disp_box();
      if (ret && this.once) {
        this.flowtext.reset();
        this.once = false;
      }
    }
  }
}
