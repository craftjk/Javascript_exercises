function Cat (name, owner) {
	this.name = name,
	this.owner = owner
};

Cat.prototype.cuteStatement = function () {
	return this.owner + " loves " + this.name;
};

var earl = new Cat("earl", "Ned");
var breakfast = new Cat("breakfast", "Ned");

console.log(earl.cuteStatement())

Cat.prototype.cuteStatement = function () {
	return "Everyone loves " + this.name;
};

Cat.prototype.meow = function () {
	return "meow";
};

earl.meow = function () {
	return "purr"
};

console.log(earl.meow());
console.log(breakfast.meow());