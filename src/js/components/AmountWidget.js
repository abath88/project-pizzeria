import { settings, select } from '../settings.js';
import BaseWidget from './BaseWidget.js';

class AmountWidget extends BaseWidget{
  constructor(element, initValue = settings.amountWidget.defaultValue){
    super(element, initValue);
    const thisWidget = this;

    thisWidget.getElements();
    thisWidget.initActions();
  }
  getElements(){
    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.amount.input);
    thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkIncrease);
  }
  isValid(value){
    return !isNaN(value) && settings.amountWidget.defaultMin <= value && settings.amountWidget.defaultMax >= value;
  }
  renderValue(){
    const thisWidget = this;

    thisWidget.dom.input.value = thisWidget.value;
  }
  initActions(){
    const thisWidget = this;
    thisWidget.dom.input.addEventListener('change', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value);
    });
    thisWidget.dom.linkDecrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value - 1);
    });
    thisWidget.dom.linkIncrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value + 1);
    });
  }
}

export default AmountWidget;