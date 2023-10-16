const Character = require('./character');

class Mage extends Character {
  constructor() {
    super(10, 10);
  }

  fireball(target) {
    console.log("Mage used Fireball skill!");
  }

  healing() {
    console.log("Mage used Healing skill!");
    this.hp += 20;
    if (this.hp > 100) {
      this.hp = 100;
    }
  }
}

module.exports = Mage;
