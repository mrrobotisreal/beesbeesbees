// var Grub = function(age = 0, color = 'pink', food = 'jelly') {
//   this.age = age;
//   this.color = color;
//   this.food = food;
// };

var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
};

Grub.prototype.eat = () => {
  // do something in here
  console.log('I\'m eating here, so buzz off!');
};

