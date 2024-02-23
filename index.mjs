export class Warrior {
  constructor(name, power, life) {
    this.name = name;
    this.power = power;
    this.life = life;
  }

  attack(opponent) {
    return (opponent.life = opponent.life - this.power);
  }

  isAlive() {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
}

export class WarriorAxe extends Warrior {
  constructor(name, power, life) {
    super(name, power, life);
  }

  attack(opponent) {
    if (opponent instanceof WarriorSword) {
      return (opponent.life -= this.power * 2);
    } else {
      super.attack(opponent);
    }
  }
}
export class WarriorSword extends Warrior {
  constructor(name, power, life) {
    super(name, power, life);
  }

  attack(opponent) {
    if (opponent instanceof WarriorSpear) {
      return (opponent.life -= this.power * 2);
    } else {
      super.attack(opponent);
    }
  }
}
export class WarriorSpear extends Warrior {
  constructor(name, power, life) {
    super(name, power, life);
  }

  attack(opponent) {
    if (opponent instanceof WarriorAxe) {
      return (opponent.life -= this.power * 2);
    } else {
      super.attack(opponent);
    }
  }
}

// class Heros extends Personnage {
//   constructor(nom, force, pouvoir) {
//     super(nom, force);
//     this.pouvoir = pouvoir;
//   }

//   utiliserPouvoir() {
//     return `${this.nom} utilise son pouvoir de ${this.pouvoir}!`;
//   }

//   attaquer() {
//     return super.attaquer() + " " + this.utiliserPouvoir();
//   }
// }

// let merlin = new Heros("Merlin", 50, "magie");

// console.log(merlin.attaquer());
