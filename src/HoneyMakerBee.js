// [X] Create a HoneyMakerBee class, in pseudoclassical style, with:
// [X] call the Bee superclass
// [X] set the prototype
// [X] set the constructor
// [X] an age property that is set to 10
// [X] a job property that is set to make honey
// [X] a color property inherited from bee that is set to yellow
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a honeyPot property that is set to 0
// [X] a makeHoney method that adds 1 to that honeyBee\’s honeyPot
// [X] a giveHoney method that subtracts 1 from that honeyBee\’s honeyPot
const HoneyMakerBee = function() {
    Bee.call(this);
    this.age = 10;
    this.job = 'make honey';
    this.color = 'yellow';
    this.honeyPot = 0;
};
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function(){
    this.honeyPot++;
};
HoneyMakerBee.prototype.giveHoney = function(){
    this.honeyPot--;
};
window.HoneyMakerBee = HoneyMakerBee;
