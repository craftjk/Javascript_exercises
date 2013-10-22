var test_array = [1,2,3,5];

var range = function (start, end) {

	// base case
	if (start === end) {
		return [start];
	}

	// recursive call
	return range(start, end - 1).concat(end);
};

Array.prototype.mySum = function () {
	if (this.length === 0) {
		return 0;
	} else {
		return ((this.slice(1, this.length)).mySum() + this[0]);
	}
};

var mySum2 = function (array) {
	if (array.length === 0) {
		return 0;
	} else {
		return (mySum2(array.slice(1,array.length)) + array[0]);
	}
};

var exp = function (base, n) {
	if (n === 0) {
		return 1;
	} else {
		return base * exp(base, n - 1);
	}
};

var exp2 = function (base, n) {
	if (n=== 0) {
		return 1;
	} else if (n % 2 === 0) {
		return exp2(base, n/2) * exp2(base, n/2);
	} else {
		return base * exp2(base, (n-1)/2) * exp2(base, (n-1)/2);
	}
}

var fib_rec = function (num) {
	if (num === 2) {
		return [0,1];
	} else if (num === 1) {
		return [0];
	} else {
		var fibs = fib_rec(num - 1);
		return fibs.concat(fibs[fibs.length - 1] + fibs[fibs.length -2]);
	}
};

ans = fib_rec(5)

var binary_search = function(array, key, imin, imax) {
	  // test if array is empty
	  if (imax < imin) {
	    // set is empty, so return value showing not found
	    return null;
		} else {
	      // calculate midpoint to cut set in half
	      var imid = Math.floor((imin + imax)/2);

	      // three-way comparison
	      if (array[imid] > key) {
	        // key is in lower subset
	        return binary_search(array, key, imin, imid-1);
				}
	      else if (array[imid] < key) {
	        // key is in upper subset
	        return binary_search(array, key, imid+1, imax);
				}
	      else {
	        // key has been found
	        return imid;
				}
	    }
};


array = [1,2,3,4,6,7,8];
ans = binary_search(array, 4, array[0], array[array.length - 1]);










