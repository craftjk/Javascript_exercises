// make_change(39) == [25, 10, 1, 1, 1, 1]

// COINS = [25, 10, 5, 1]

//

var makeChange = function (amount, coins) {
	if (amount === 0) {
		return [];
	} else {
		if (amount >= coins[0]) {
			left = (amount - coins[0])
		  return [coins[0]].concat( makeChange(left, coins) );
		} else {
		  coins.shift();
			return makeChange(amount, coins);
		}
	}

};

a = makeChange(39, [25, 10, 5, 1])


