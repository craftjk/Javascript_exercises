Array.prototype.myEach = function(passed_function) {
	for (var i = 0; i < this.length ; i++) {
		passed_function(this[i]);
	}
	return this;
};

var myFunc = function (el) {
	console.log(el);
};

var includes = function (array, obj) {
	for (var i = 0 ; i < array.length ; i++) {
		if (obj === array[i]) {
			return true;
		}
	}
	return false;
};

var my_uniq = function (original_array) {
	var new_array = [];
	for (var i = 0 ; i < original_array.length ; i++) {
		if (includes(new_array, original_array[i]) === false) {
			new_array = new_array.concat(original_array[i]);
		}
	}
	return new_array;
};

Array.prototype.bubbleSort = function () {
	results_array = this;
	sorted = false;
	while (sorted === false) {
		sorted = true
		for (var i = 0 ; i < results_array.length - 1 ; i++) {
			if (results_array[i + 1] < results_array[i]) {
				x = results_array[i + 1];
				results_array[i + 1] = results_array[i];
				results_array[i] = x;
				sorted = false;
			}
		}
	}
	return results_array;
};

testArray = [1,4,2,5,3]

ans = testArray.bubbleSort()

String.prototype.subStrings = function () {
	results = [];
	for (var i = 0 ; i < this.length; i++) {
		for (var j = i; j < this.length; j++) {
			results.push(this.slice(i,j))
		}
	}
	return my_uniq(results);
};

test = "We are AppAcademy students";
ans = test.subStrings();