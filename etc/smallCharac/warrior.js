const Character = require('./character');

class Warrior extends Character {
  constructor() {
    super(20, 20, null);
  }

  useSkill(target) {
    console.log("Warrior has no skill.");
  }
}

module.exports = Warrior;
