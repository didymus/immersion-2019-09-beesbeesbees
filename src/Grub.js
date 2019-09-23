// [X] Create a Grub class, in pseudoclassical style, with:
// [X] an age property that is set to 0
// [X] a color property that is set to pink
// [X] a food property that is set to jelly
// [X] an eat method
const Grub = function() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
};
Grub.prototype.eat = function(){
//om nom nom nom
};
window.Grub = Grub;
