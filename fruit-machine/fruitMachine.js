/*
Instructions 

You will be given (a slot machine with) three reels of different images and told at which index 
the reels stop. From this information your job is to return the score of the resulted reels.

Rules

1. There are always exactly three reels
2. Each reel has 10 different items.
3. The three reel inputs may be different.
4. The spin array represents the index of where the reels finish.
5. The three spin inputs may be different
6. Three of the same is worth more than two of the same
7. Two of the same plus one "Wild" is double the score.
8. No matching items returns 0.


Scoring

Item   3 of same   2 of same   2 of same + 1 Wild
Wild      100         10           N/A
Star      90          9            18
Bell      80          8            16
Shell     70          7            14
Seven     60          6            12
Cherry    50          5            10
Bar       40          4            8
King      30          3            6
Queen     20          2            4
Jack      10          1            2


Return an integer of the score.


Example

Initialise
reel1 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel2 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
reel3 = ["Wild","Star","Bell","Shell","Seven","Cherry","Bar","King","Queen","Jack"];
spin = [5,5,5];
result = fruit([reel1,reel2,reel3],spin);

Scoring
reel1[5] == "Cherry"
reel2[5] == "Cherry"
reel3[5] == "Cherry"

Cherry + Cherry + Cherry == 50

Return
result == 50

*/

var baseScores = {
'Wild': 10,
'Star': 9,
'Bell': 8,
'Shell': 7,
'Seven': 6,
'Cherry': 5,
'Bar': 4,
'King': 3,
'Queen': 2,
'Jack': 1
}

function fruit(reels, spins){
  var spin1 = reels[0][spins[0]];
  var spin2 = reels[1][spins[1]];
  var spin3 = reels[2][spins[2]];
  var condition;
  var key;
  var result;

  if (spin1 !== spin2 && spin1 !== spin3 && spin2 !== spin3) {
  	condition = 'none of same';
  }	else if (spin1 === spin2 && spin2 === spin3) {
		condition = 'three of same';
		key = spin1;
	} else if (spin1 === spin2 && spin2 !== spin3) { 
		key = spin1;
		if (spin3 === 'Wild') {
			condition = 'two of same plus one wild';
		} else {
			condition = 'two of same no wild';
		}
	} else if (spin1 === spin3 && spin2 !== spin3) {
		key = spin1;
		if (spin2 === 'Wild') {
			condition = 'two of same plus one wild';
		} else {
			condition = 'two of same no wild';
		}
	} else if (spin2 === spin3 && spin1 !== spin3) {
		key = spin2;
		if (spin1 === 'Wild') {
			condition = 'two of same plus one wild';
		} else {
			condition = 'two of same no wild';
		}
	}
	
  if (condition === 'none of same') {
  	result = 0;
  }

  if (condition === 'three of same') {
  	result = baseScores[key] * 10;
  }

	if (condition === 'two of same plus one wild') {
  	result = baseScores[key] * 2;
	}

	if (condition === 'two of same no wild') {
  	result = baseScores[key];
	}

	return result;
}
