/*
Instructions 

Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

pigIt('Pig latin is cool');

function pigIt(str) {
  return str.split(" ").map(pigLatinize).join(' ');
}

function pigLatinize(element) {
  var word = element.split(""); 
  return word.concat(word.shift(), 'ay').join('');
}


/* 
//Longer-winded solution

function pigIt(str) {
  var words = str.split(" "); 
  var pigString = (words.map(pigLatinize).join(' '));
  return pigString;
}

function pigLatinize(element) {
  var word = element.split("");
  var firstLetter = word.shift();    
  return word.concat(firstLetter, 'ay').join('');
}
*/

