// [X] Create a RetiredForagerBee class, in pseudoclassical style, with:
// [X] call the ForagerBee superclass
// [X] set the prototype
// [X] set the constructor
// [X] an age property that is set to 40
// [X] a job property that is set to gamble
// [X] a canFly property that is set to false
// [X] a color property that is set to grey
// [X] a forage method that returns “I am too old, let me play cards instead”
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a treasureChest property inherited from ForagerBee that is set to an empty array[]
// [X] an always winning gamble method that allows the bee to add a treasure to the treasureChest
// 🐝
const RetiredForagerBee = function() {
    ForagerBee.call(this);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
};
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forage = function(treasure){
    return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.gamble = function(treasure){
    this.treasureChest.push(treasure);
}
window.RetiredForagerBee = RetiredForagerBee;
