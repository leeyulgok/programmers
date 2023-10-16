const Character = require('./character');

class Archer extends Character {
  constructor() {
    super(15, 15, "얼음화살");
  }

  useSkill(target) {
    console.log("Archer used Ice Arrow skill!");
  }
}

module.exports = Archer;
