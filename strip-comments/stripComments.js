/*
Instructions 

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']);

function solution(input, markers) {
	var result = [];
	var splitInput = input.split('\n');
	for (var h = 0; h < splitInput.length; h++) {
		var resultLine = '';
		for (var i = 0; i < splitInput[h].length; i++) {
			markers.includes(splitInput[h][i])  
				? (i = splitInput[h].length)
				: resultLine += splitInput[h][i];
		}	
		result.push(resultLine.trim());
	}
	
	//console.log(result.join('\n'));
	return result.join('\n');
}



