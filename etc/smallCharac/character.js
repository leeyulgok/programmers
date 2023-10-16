class Character {
  constructor(attackPower, defense, skills) {
    this.hp = 100;
    this.attackPower = attackPower;
    this.defense = defense;
    this.skills = skills;
  }

  attack(target) {
    let damage = this.attackPower - target.defense;
    if (damage < 0) damage = 0;
    target.health -= damage;
    console.log(`You dealt ${damage} damage!`);
  }

  useSkill(target) {
    console.log("Using skill...");
  }
}

module.export = Character;
