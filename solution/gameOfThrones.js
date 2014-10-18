
/********************************
 * CHAPTER 1: Hail to the King! *
 ********************************/

console.log('\n---- Chapter 1 ----\n');

// 1. write a function **definition** named `hail` that returns the string:
//    'Long live King [name]!'

function hail(king) {
  return 'Long live King ' + king + '!';
}

// 2. write a function **expression** for the above function named `hailTo`
//    function expressions are defined at run-time, and only available in the
//    variable's scope; function definitions are defined at parse-time (like
//    compile-time for JavaScript), and available globally...

var hailTo = function(king) {
  return 'Long live King ' + king + '!';
}

// 3. create a string called 'king' with the name of our one true king: Robert!
//    Print a hail to our king on the console!

console.log('Number 1:');
var king = 'Robert';
console.log(hail(king));

/********************************
 * CHAPTER 2: A Game of Thrones *
 ********************************/

console.log('\n---- Chapter 2 ----\n');

// 1. create an array called `kings` and push our king 'Robert' on to it...

var kings = [];
kings.push(king);

// 2. print a hail to the king in our kings array, so that it looks like:
//    'Long live King [name]!' five times...

console.log('Number 1:');
console.log(hail(kings[0]));

// 3. add our future king 'Joffrey' to our list of kings, and then we shall hail
//    him as well!

console.log('Number 2:');
kings.push('Joffrey');
console.log(hail(kings[1]));

// 4. an untimely death has come... remove our good king Robert, and then hail
//    him and our new, and only, King Joffrey!

console.log('Number 3:');
console.log(hail(kings.shift()));
console.log(hail(kings[0]));

// 5. what's this? Our dead king's brothers now claim the throne! We must add
//    them to the list of kings. Their names are 'Stannis' and 'Renly'...

kings.push('Stannis');
kings.push('Renly');

// 6. woe is us: what a situation... Print to the console the number of kings
//    we currently have, in the line: 'What can we do, now that there are [x] kings?'

console.log('Number 4:');
console.log('What can we do, now that there are ' + kings.length + ' kings?');

/*******************************
 * CHAPTER 3: Winter is Coming *
 *******************************/

console.log('\n---- Chapter 3 ----\n');
var kings = [
  'Joffrey',
  'Stannis',
  'Renly',
  'Balon',
  'Robb'
]

// 3. print each king's name using a `while` loop, so that it looks like:
//    'Long live King [name]!' five times...

console.log('Number 1:');
var i = 0;
while (i < kings.length) {
  console.log(hail(kings[i]));
  i++;
}

// 4. print the above using a `for` loop

console.log('Number 2:');
for (var i = 0; i < kings.length; i++) {
  console.log(hail(kings[i]));
}

// 5. print the above using a `forEach` enumeration method

console.log('Number 3:');
kings.forEach( function(king){
  console.log(hail(king));
});

/*****************************************
 * CHAPTER 4: You Either Win, or You Die *
 *****************************************/

console.log('\n---- Chapter 4 ----\n');

var kings = [
  {name: 'Joffrey', house: 'Baratheon-Lannister', ironThrone: true},
  {name: 'Stannis', house: 'Baratheon',           ironThrone: false},
  {name: 'Renly',   house: 'Baratheon',           ironThrone: false},
  {name: 'Balon',   house: 'Greyjoy',             ironThrone: false},
  {name: 'Robb',    house: 'Stark',               ironThrone: false}
]

// 1. we must acclaim the five kings: print to the console a hail to each:
//    'Long live King [name] of House [house]!' five times...

var hail = function(king) {
  return 'Long live King ' + king['name'] + ' of House ' + king['house'] + '!';
}

console.log('Number 1:');
for (var i = 0, king; i < kings.length; i++) {
  king = kings[i];
  console.log(hail(king));
}

// 2. now we must be sure to print the correct salute... For a "king" not on the
//    Iron Throne we must write a function `declaim` that prints the line:
//    'Woe be to the pretender [name] of the house [house]...'

var declaim = function(king) {
  return 'Woe be to the pretender ' + king['name'] + ' of House ' + king['house'] + '!';
}

// 3. now we must hail all of the kings. Give a true hail only to the king on
//    the Iron Throne (where ironThrone is true), but not the others; instead we
//    must declaim them.

console.log('Number 3:');
for (var i = 0, king; i < kings.length; i++) {
  king = kings[i];
  if (king['ironThrone']) {
    console.log(hail(king));
  } else {
    console.log(declaim(king));
  }
}

// 4. write a function expression named `kneel` that prints:
//    "The [king/pretender] [name] of house [house] must kneel!"

var kneel = function(king) {
  var title = king['ironThrone'] ? 'king' : 'pretender'
  return 'The ' + title + ' ' + king['name'] + ' of House ' + king['house'] + ' must kneel!';
}

// 5. finally, the struggle begins: Loop over the list of kings, either hailing
//    or declaiming them as above (depending if they are on the Iron Throne);
//    after each loop, remove one king at random and print the line from #4 (that
//    they must *kneel*), and then loop over the list again. Do this until there
//    is only one king left. If at any time the king on the Iron Throne is
//    removed, ensure that the next in line (the first king in the list) is now
//    placed upon it (their ironThrone property is set to true).

console.log('Number 5:');
do {
  for (var i = 0, king; i < kings.length; i++) {
    king = kings[i];
    if (king['ironThrone']) {
      console.log(hail(king));
    } else {
      console.log(declaim(king));
    }
  }
  if (kings.length > 1) {
    var random = Math.floor(Math.random() * kings.length);
    console.log('\n' + kneel(kings[random]) + '\n');
    kings.splice(random, 1);
  } else {
    console.log('\nThe war is won! ' + hail(kings[0]));
  }
} while (kings.length > 1);
