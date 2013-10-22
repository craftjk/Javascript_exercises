var test_array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]

var prices = [0,2,1,3,4,3,50];

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

var two_sum = function (array) {
	results = [];
	for (var i = 0; i < array.length ; i++) {
		for (var j = i + 1 ; j < array.length ; j++ ) {
			if (array[i] + array[j] === 0) {
				results = results.concat([[i , j]]);
			}
		}
	}
	return results;
};

var myTranspose = function (array) {
	results = [[]];
	for (var i = 0 ; i < (array.length - 1) ; i++ ) {
		results = results.concat([[]]);
	}

	for (var i = 0; i < array.length ; i++) {
		for (var j = 0 ; j < array.length ; j++ ) {
			results[i][j] = array[j][i];
		}
	}
	return results;
};

var stockPicker = function (prices) {
	var highest_profit = 0;
	var days = null;
	for (var i = 0 ; i < prices.length ; i++) {
		for (var j = i+1 ; j < prices.length ; j++) {
			if (prices[j] - prices[i] > highest_profit) {
				days = [i, j];
				highest_profit = prices[j] - prices[i];
			}
		}
	}
	return days;
};

Array.prototype.myEach = function(passed_function) {
	for (var i = 0; i < this.length ; i++) {
		passed_function(this[i]);
	}
	return this;
};

var myFunc = function (el) {
	console.log(el);
};

Array.prototype.myMap = function (passed_function) {
	var mapped_array = [];

	this.myEach(function (el) {
		mapped_array.push(passed_function(el));
	});

	return mapped_array;
};

// Array.prototype.myInject = function (passed_function) {
// 	var result = this[0];
//
// 	this.slice(1, this.length).myEach(function (el) {
// 		result = passed_function(el, result)
// 	});
// 	return result;
// };

Array.prototype.myInject = function (passed_function, accum) {
	if (arguments.length == 1 ) {
		result = this[0];
		start_point = 1;
	} else {
		result = arguments[1];
		start_point = 0;
	};

	this.slice(start_point, this.length).myEach(function (el) {
		result = passed_function(el, result)
	});
	return result;
};



var mySum = function(n1, n2) {
	return n1 + n2;
}

ans  = [1,2,3].myInject(mySum)
ans2  = [1,2,3].myInject(mySum, 1)
