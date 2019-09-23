// [X] Create a ForagerBee class, in pseudoclassical style, with:
// [X] call the Bee superclass
// [X] set the prototype
// [X] set the constructor
// [X] an age property that is set to 10
// [X] a job property that is set to find pollen
// [X] a color property inherited from bee that is set to yellow
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a canFly property that is set true
// [X] a treasureChest property that is set to an empty array[]
// [X] a forage method that allows the bee to add a treasure to the treasureChest
const ForagerBee = function() {
    Bee.call(this);
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];
};
ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure){
this.treasureChest.push(treasure);
};
window.ForagerBee = ForagerBee;
