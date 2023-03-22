import BaseWidget from '../components/BaseWidget.js';
import { select, settings } from '../settings.js';
import { utils } from '../utils.js';

class HourPicker extends BaseWidget{
  constructor(wrapper){
    super(wrapper, settings.hours.open);
    const thisWidget = this;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.input);
    thisWidget.dom.output = thisWidget.dom.wrapper.querySelector(select.widgets.hourPicker.output);
    thisWidget.initPlugin();
    thisWidget.value = settings.hours.open;
  }
  initPlugin(){
    const thisWidget = this;
    // eslint-disable-next-line no-undef
    rangeSlider.create(thisWidget.dom.input, {
      min: settings.hours.open,
      max: settings.hours.close,
      step: settings.hours.step,
      value: thisWidget.value,
      onSlide: function (position) {
        thisWidget.value = position;
      },
    });
  }
  parseValue(value){
    return utils.numberToHour(value);
  }
  isValid(){
    return true;
  }
  renderValue(){
    const thisWidget = this;

    thisWidget.dom.output.innerHTML = thisWidget.value;
  }
}

export default HourPicker;
