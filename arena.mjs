import { Warrior } from "./index.mjs";
import { WarriorAxe, WarriorSpear, WarriorSword } from "./index.mjs";

let nomArray = ["Mathis", "Johan", "Antoine", "Salah", "Selim", "Sophie"];
let forceArray = [5, 10, 15, 20];
let vieArray = [50, 60, 70, 80, 90, 100];

let nom1 = nomArray[Math.floor(Math.random() * 5)];
let nom2 = nomArray[Math.floor(Math.random() * 5)];
let force = forceArray[Math.floor(Math.random() * 3)];
let vie = vieArray[Math.floor(Math.random() * 6)];

let warroirWeaponArray = [WarriorAxe, WarriorSpear, WarriorSword];
let warriorWeapon1 = warroirWeaponArray[Math.floor(Math.random() * 2)];
let warriorWeapon2 = warroirWeaponArray[Math.floor(Math.random() * 2)];

let warrior1 = new warriorWeapon1(nom1, force, vie);
let warrior2 = new warriorWeapon2(nom2, force, vie);

console.log(warriorWeapon1, warriorWeapon2);
while (warrior1.isAlive() && warrior2.isAlive()) {
  warrior1.attack(warrior2);
  warrior2.attack(warrior1);
  console.log(warrior1.name, warrior2.life);
  console.log(warrior2.name, warrior1.life);

  if (warrior1.isAlive() === false) {
    console.log(warrior1.name + " lose");
  }
  if (warrior2.isAlive() === false) {
    console.log(warrior2.name + " lose");
  }
  if (warrior2.isAlive() === false && warrior1.isAlive() === false) {
    console.log(" Draw");
  }
}
