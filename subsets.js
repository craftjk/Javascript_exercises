

var subsets = function (array) {
	if (array === []) {
		console.log("Here!")
		return [[]];
	} else  {
	  // 	loop over array, concat the subsets of array minus that element
		array.forEach (function (plucked) {
			pos = array.indexOf(plucked);
			a = array.splice(pos, 1)

			console.log(array)
			return subsets(array);
	});
  };
};

array = [1];
s = subsets(array);