import Bee from './Bee'

class ForagerBee extends Bee {
  constructor(prop) {
    super(prop)
    this.age = 10
    this.job = 'find pollen'
    this.color = 'yellow'
    this.canFly = true
    this.treasureChest = []
  }

  forage(treasure) {
    this.treasureChest.push(treasure)
  }
};

export default ForagerBee;