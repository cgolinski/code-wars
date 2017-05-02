/*
Instructions 

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

sumStrings('00103','08567'); 

function sumStrings(a,b) { 
	var stringA = a.split('').reverse().join('');
	var stringB = b.split('').reverse().join('');

	var longerString;
	var shorterString;
	stringA.length >= stringB.length ? (longerString = stringA, shorterString = stringB) : (longerString = stringB, shorterString = stringA);

	stringA === '' ? (stringA = '0') : stringA = stringA;
	stringB === '' ? (stringB = '0') : stringB = stringB;

	var reverseSum = '';
	var carryOver = 0;
	var addition = 0;
	var tempAddition = 0;
	var sum = '';

	for (var i = 0; i <= longerString.length; i++) {
		if ((parseInt(longerString[i]) !==0) && (!parseInt(longerString[i])) && (carryOver === 0)) {
			tempAddition = undefined;
		}	else if ((parseInt(longerString[i]) !==0) && (!parseInt(longerString[i])) && (carryOver > 0)) {
			tempAddition = carryOver;
		} else if ((!parseInt(shorterString[i])) && ((parseInt(longerString[i])) || (parseInt(longerString[i])===0))) {
			tempAddition = parseInt(longerString[i]) + carryOver;
		} else {
			tempAddition = parseInt(longerString[i]) + parseInt(shorterString[i]) + carryOver;
		}

		if (tempAddition !== undefined) {
			if (tempAddition > 9) {
				carryOver = 1;
				addition = tempAddition - 10;
			} else {
				carryOver = 0;
				addition = tempAddition;
			}
		} else {
			addition = tempAddition;
		} 
		
		if (addition !== undefined) {
			reverseSum += addition.toString();
		}
	}

	sum = reverseSum.split('').reverse().join('');
	
	while (sum[0] === '0') {
		sum = sum.substr(1, sum.length-1);
	}

	return sum;
	//console.log(sum);
}
