import Bee from './Bee'

class HoneyMakerBee extends Bee {
  constructor(prop){
    super(prop)
    this.age = 10
    this.job = 'make honey'
    this.honeyPot = 0
  }
  makeHoney(){
    this.honeyPot++
  }
  giveHoney(){
    this.honeyPot--
  }
};

export default HoneyMakerBee;