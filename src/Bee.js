// [X] Create a Bee class, in pseudoclassical style, with:
// [X] call the Grub superclass
// [X] set the prototype
// [X] set the constructor
// [X] an age property that is set to 5
// [X] a color property that is set to yellow
// [X] a food property that is inherited from grub
// [X] an eat method that is inherited from grub
// [X] a job property that is set to keep on growing
const Bee = function() {
    Grub.call(this);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'keep on growing';
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
window.Bee = Bee;
