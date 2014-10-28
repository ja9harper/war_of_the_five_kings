


// TODO: NAMESPACE ALL DATA! and show an example of why... then RENAME vars below to be simpler!
// modules? extra files?


// Below you will see this function used... Ignore it or ask us about it! It's
// how we will test your work to see if it is correct.
function fName(f) {
  var functionName = f.toString();
  functionName     = functionName.substr(9);
  return functionName.substr(0, functionName.indexOf('('));
}

function exportToModule(moduleName, properties) {
  if (typeof module !== 'undefined' && module.exports) {
    if (module.exports[moduleName] === undefined) {
      module.exports[moduleName] = {};
    }
    properties.forEach(function(property) {
      module.exports[moduleName][fName(property)] = property;
    });
  }
}

// For really modeling this war, we're going to need some better data:
//   - landIndices: a list of the lands of Westeros,
//   - adjacentRegions: a "hash" (Object) of the regions of Westeros, and the
//       regions adjacent (next to) each,
//   - kings: a list of the claimants to kingship, and the lands that recognize
//       allegiance to each,
//   - neutral: the list of lands not claiming any king.

var lands = [
  /* ******************************** THE  WALL ***************************** */
  { /* 00 */
    name: 'The Wall',        type: 'stronghold', region: 'The Wall',
    power: 0, defense: 20,
    adjacent: [1, 2] // and the lands beyond the wall (73)
  },
  { /* 01 */
    name: 'Castle Black',    type: 'stronghold', region: 'The Wall',
    power: 4, defense: 8,
    adjacent: [0, 2] // and the lands beyond the wall (73)
  },
  { /* 02 */
    name: 'Brandon\'s Gift', type: 'territory',  region: 'The Wall',
    power: 1, defense: 1,
    adjacent: [0, 1, 3, 4, 5]
  },
  { /* 03 */
    name: 'The New Gift',    type: 'territory',  region: 'The Wall',
    power: 1, defense: 1,
    adjacent: [2, 4, 5, 7, 8]
  },
  /* ******************************** THE NORTH ***************************** */
  { /* 04 */
    name: 'Bear Island',      type: 'territory',  region: 'The North',
    power: 2, defense: 4,      sea: true,
    adjacent: [2, 3, 7, 9, 26] // and the lands beyond the wall (73)
  },
  { /* 05 */
    name: 'Bay of Seals',     type: 'territory',  region: 'The North',
    power: 1, defense: 1,      sea: true,
    adjacent: [2, 3, 6, 8, 10, 22] // and the lands beyond the wall (73)
  },
  { /* 06 */
    name: 'The Three Sisters', type: 'territory', region: 'The North',
    power: 2, defense: 2,       sea: true,
    adjacent: [5, 10, 15, 16, 18, 22, 23]
  },
  { /* 07 */
    name: 'The Wolfswood',    type: 'territory',  region: 'The North',
    power: 1, defense: 1,
    adjacent: [3, 4, 8, 9, 11, 14]
  },
  { /* 08 */
    name: 'The Grey Cliffs',  type: 'territory',  region: 'The North',
    power: 1, defense: 2,
    adjacent: [3, 5, 7, 10, 14]
  },
  { /* 09 */
    name: 'Sea Dragon Point', type: 'territory',  region: 'The North',
    power: 1, defense: 1,
    adjacent: [4, 7, 11, 12, 27]
  },
  { /* 10 */
    name: 'Sheepshead Hills', type: 'territory',  region: 'The North',
    power: 1, defense: 1,
    adjacent: [5, 6, 8, 14, 15, 16, 22]
  },
  { /* 11 */
    name: 'The Barrowlands',  type: 'territory',  region: 'The North',
    power: 1, defense: 1,
    adjacent: [7, 9, 12, 13, 14, 15, 27]
  },
  { /* 12 */
    name: 'Stony Shore',      type: 'territory',  region: 'The North',
    power: 1, defense: 1,
    adjacent: [9, 11, 13, 27]
  },
  { /* 13 */
    name: 'Flint\'s Finger',  type: 'territory',  region: 'The North',
    power: 1, defense: 1,
    adjacent: [11, 12, 15, 17, 27]
  },
  { /* 14 */
    name: 'Winterfell',       type: 'stronghold', region: 'The North',
    power: 3, defense: 5,
    adjacent: [7, 8, 10, 11, 15]
  },
  { /* 15 */
    name: 'The Neck',         type: 'stronghold', region: 'The North',
    power: 1, defense: 10,
    adjacent: [6, 10, 11, 13, 14, 16, 17, 18]
  },
  { /* 16 */
    name: 'White Harbor',      type: 'city',      region: 'The North',
    power: 3, defense: 2,
    adjacent: [6, 10, 15]
  },
  /* ***************************** THE RIVERLANDS *************************** */
  { /* 17 */
    name: 'The Cape of Eagles', type: 'territory',  region: 'The Riverlands',
    power: 1, defense: 1,
    adjacent: [13, 15, 18, 27]
  },
  { /* 18 */
    name: 'The Green Fork',     type: 'territory',  region: 'The Riverlands',
    power: 2, defense: 2,
    adjacent: [6, 15, 17, 19, 20, 21, 23, 27]
  },
  { /* 19 */
    name: 'The Trident',        type: 'territory',  region: 'The Riverlands',
    power: 2, defense: 2,
    adjacent: [18, 20, 23, 24, 35]
  },
  { /* 20 */ // should be called Harrenhall?
    name: 'God\'s Eye',         type: 'stronghold', region: 'The Riverlands',
    power: 1, defense: 2,
    adjacent: [18, 19, 21, 35, 46, 47, 48]
  },
  { /* 21 */
    name: 'Riverrun',           type: 'stronghold', region: 'The Riverlands',
    power: 1, defense: 6,
    adjacent: [18, 20, 31, 32, 46]
  },
  /* ******************************** THE VALE ****************************** */
  { /* 22 */
    name: 'The Fingers',         type: 'territory',   region: 'The Vale',
    power: 2, defense: 2,         sea: true,
    adjacent: [5, 6, 10, 23, 24, 25, 26, 34, 36, 39]
  },
  { /* 23 */
    name: 'Mountains of the Moon', type: 'territory', region: 'The Vale',
    power: 1, defense: 5,
    adjacent: [6, 18, 19, 22, 24, 25]
  },
  { /* 24 */
    name: 'The Bay of Crabs',     type: 'territory',  region: 'The Vale',
    power: 2, defense: 1, //sea: true? this may make sense!!!!
    adjacent: [19, 22, 23, 26, 35, 36]
  },
  { /* 25 */
    name: 'The Vale of Arryn',   type: 'stronghold',  region: 'The Vale',
    power: 3, defense: 14,
    adjacent: [22, 23, 26]
  },
  { /* 26 */
    name: 'Gulltown',            type: 'city',        region: 'The Vale',
    power: 3, defense: 2,
    adjacent: [22, 24, 25]
  },
  /* **************************** THE IRON ISLANDS ************************** */
  { /* 27 */
    name: 'The Iron Islands', type: 'stronghold', region: 'The Iron Islands',
    power: 10, defense: 10,
    adjacent: [4, 9, 11, 12, 13, 17, 18, 28, 29, 32], sea: true
  },
  /* ***************************** THE WESTERLANDS ************************** */
  { /* 28 */
    name: 'Fairisle',         type: 'territory',  region: 'The Westerlands',
    power: 2, defense: 1, sea: true,
    adjacent: [27, 29, 30, 33, 44]
  },
  { /* 29 */
    name: 'Kayce',            type: 'territory',  region: 'The Westerlands',
    power: 3, defense: 1,
    adjacent: [27, 28, 30, 31, 32, 33]
  },
  { /* 30 */
    name: 'Crakehall Wood',   type: 'territory',  region: 'The Westerlands',
    power: 2, defense: 1,
    adjacent: [28, 29, 31, 33, 44, 46]
  },
  { /* 31 */
    name: 'The Golden Tooth', type: 'stronghold', region: 'The Westerlands',
    power: 1, defense: 6,
    adjacent: [21, 29, 30, 31, 32, 33, 46]
  },
  { /* 32 */
    name: 'The Crag',         type: 'stronghold', region: 'The Westerlands',
    power: 2, defense: 4,
    adjacent: [18, 21, 27, 29, 31]
  },
  { /* 33 */
    name: 'Lannisport',       type: 'city',       region: 'The Westerlands',
    power: 6, defense: 2,
    adjacent: [28, 29, 31, 30]
  },
  /* ***************************** THE CROWNLANDS *************************** */
  { /* 34 */
    name: 'Dragonstone',     type: 'stronghold', region: 'The Crownlands',
    power: 3, defense: 7, sea: true,
    adjacent: [22, 35, 36, 37, 38, 39]
  },
  { /* 35 */
    name: 'Duskendale',      type: 'territory', region: 'The Crownlands',
    power: 2, defense: 1,
    adjacent: [19, 20, 24, 34, 36, 38, 47]
  },
  { /* 36 */
    name: 'Crackclaw Point', type: 'territory', region: 'The Crownlands',
    power: 1, defense: 1,
    adjacent: [22, 24, 34, 35]
  },
  { /* 37 */
    name: 'The Kingswood',   type: 'territory', region: 'The Crownlands',
    power: 1, defense: 3,
    adjacent: [34, 35, 38, 39, 41, 43, 47, 48]
  },
  { /* 38 */
    name: 'King\'s Landing', type: 'city',      region: 'The Crownlands',
    power: 12, defense: 10,
    adjacent: [34, 35, 37]
  },
  /* ***************************** THE STORMLANDS *************************** */
  { /* 39 */
    name: 'Tarth',               type: 'territory',  region: 'The Stormlands',
    power: 2, defense: 2, sea: true,
    adjacent: [22, 34, 37, 43, 41, 40, 54, 55]
  },
  { /* 40 */
    name: 'Cape Wrath',          type: 'territory',  region: 'The Stormlands',
    power: 2, defense: 1,
    adjacent: [39, 41, 42, 55]
  },
  { /* 41 */
    name: 'Summerhall',          type: 'territory',  region: 'The Stormlands',
    power: 2, defense: 2,
    adjacent: [37, 43, 39, 40, 42, 48]
  },
  { /* 42 */
    name: 'The Dornish Marches', type: 'territory',  region: 'The Stormlands',
    power: 1, defense: 3,
    adjacent: [41, 40, 52, 55, 61, 60, 48, 49]
  },
  { /* 43 */
    name: 'Storm\'s End',        type: 'stronghold', region: 'The Stormlands',
    power: 3, defense: 6,
    adjacent: [37, 39, 41]
  },
  /* ******************************** THE REACH ***************************** */
  { /* 44 */
    name: 'The Shield Islands', type: 'territory',  region: 'The Reach',
    power: 2, defense: 3, sea: true,
    adjacent: [28, 30, 45, 46, 51, 49, 50]
  },
  { /* 45 */
    name: 'The Arbor',          type: 'territory',  region: 'The Reach',
    power: 2, defense: 2, sea: true,
    adjacent: [44, 49, 50, 52, 53, 58, 59, 63]
  },
  { /* 46 */
    name: 'Goldengrove',        type: 'territory',  region: 'The Reach',
    power: 4, defense: 1,
    adjacent: [20, 21, 30, 31, 44, 47, 51]
  },
  { /* 47 */
    name: 'The Mander',         type: 'territory',  region: 'The Reach',
    power: 5, defense: 1,
    adjacent: [20, 35, 37, 38, 46, 48, 51]
  },
  { /* 48 */
    name: 'Grassy Vale',        type: 'territory',  region: 'The Reach',
    power: 3, defense: 1,
    adjacent: [37, 41, 42, 47, 49, 51]
  },
  { /* 49 */
    name: 'Redwyne Straits',    type: 'territory',  region: 'The Reach',
    power: 2, defense: 1,
    adjacent: [44, 45, 49, 53]
  },
  { /* 50 */
    name: 'Horn Hill',          type: 'territory',  region: 'The Reach',
    power: 1, defense: 3,
    adjacent: [42, 44, 45, 48, 50, 51, 52]
  },
  { /* 51 */
    name: 'Highgarden',         type: 'stronghold', region: 'The Reach',
    power: 3, defense: 3,
    adjacent: [44, 46, 47, 48, 49]
  },
  { /* 52 */
    name: 'Starfall',           type: 'stronghold', region: 'The Reach',
    power: 2, defense: 5,
    adjacent: [42, 45, 49, 58, 60]
  },
  { /* 53 */
    name: 'Oldtown',            type: 'city',       region: 'The Reach',
    power: 9, defense: 2,
    adjacent: [45, 50]
  },
  /* ********************************** DORNE ******************************* */
  { /* 54 */
    name: 'The Stepstones', type: 'territory',  region: 'Dorne',
    power: 1, defense: 3,    sea: true,
    adjacent: [39, 55, 57, 63]
  },
  { /* 55 */
    name: 'Sea of Dorne',   type: 'territory',  region: 'Dorne',
    power: 0, defense: 0,    sea: true,
    adjacent: [39, 40, 42, 54, 56, 57, 61]
  },
  { /* 56 */
    name: 'Yronwood',       type: 'territory',  region: 'Dorne',
    power: 2, defense: 1,
    adjacent: [55, 57, 59, 61]
  },
  { /* 57 */
    name: 'Broken Arm',     type: 'territory',  region: 'Dorne',
    power: 3, defense: 1,
    adjacent: [54, 55, 56, 59, 62, 63]
  },
  { /* 58 */
    name: 'Red Mountains',  type: 'territory',  region: 'Dorne',
    power: 1, defense: 3,
    adjacent: [45, 52, 59, 60]
  },
  { /* 59 */
    name: 'The Sands',      type: 'territory',  region: 'Dorne',
    power: 1, defense: 1,
    adjacent: [45, 56, 57, 58, 60, 61, 63]
  },
  { /* 60 */
    name: 'Prince\'s Pass', type: 'stronghold', region: 'Dorne',
    power: 1, defense: 5,
    adjacent: [42, 52, 58, 59, 61]
  },
  { /* 61 */
    name: 'The Boneway',    type: 'stronghold', region: 'Dorne',
    power: 1, defense: 5,
    adjacent: [42, 55, 56, 59, 60]
  },
  { /* 62 */
    name: 'Sunspear',       type: 'stronghold', region: 'Dorne',
    power: 3, defense: 3,
    adjacent: [57, 63]
  },
  /* ******************************* OTHER LANDS **************************** */
  { /* 63 */
    name: 'The Summer Sea', type: 'ocean',  region: 'Dorne',
    power: 0, defense: 0,   sea: true,
    adjacent: []
  }
  // the sunset sea: 64
  // the shivering sea: 65
  // the narrow sea: 66
  // braavos: 67, pentos: 68, myr: 69, tyrosh: 70, lys: 71
  // skagos: 72
  // the far north: 73
];

var regions = {
  'The Wall',
  'The North',        // 1
  'The Riverlands',
  'The Vale',         // 2
  'The Iron Islands', // 3
  'The Westerlands',  // 4
  'The Crownlands',
  'The Stormlands',   // 5
  'The Reach',        // 6
  'Dorne'             // 7 (kingdoms)
};

var kings = [
  {
    name:        'Joffrey',
    house:       'Baratheon-Lannister',
    // influence is an indicator of personal charisma and power, ie the loyalty
    //   and dedication a king inspires in those who serve him -- the king brings
    //   their influence as power to every fight!
    influence:   4, // the king is cruel and cowardly, but his family is strong
                    // also: sitting the Iron Throne adds + 4 to influence
    landIndices: [30, 31, 25, 26, 27, 28, 29],
    warCry:      ' demands allegiance, and orders his men to fight!',
    allies:      [],
    enemies:     ['Stannis', 'Renly', 'Robb'],
    other:       ['Balon']
  },
  {
    name:        'Stannis',
    house:       'Baratheon',
    influence:   4, // the red woman inspires terror, but Stannis does not inspire love...
    landIndices: [32, 33, 34],
    warCry:      ' calls upon his god to bring fire to his enemies!',
    allies:      [],
    enemies:     ['Joffrey', 'Renly', 'Robb'],
    other:       ['Balon']
  },
  {
    name:        'Renly',
    house:       'Baratheon',
    influence:   6, // the people love him, and his guard is devoted! but there are rumors...
    landIndices: [39, 40, 41, 42, 43, 44, 45, 35, 36, 37, 38],
    warCry:      ' marches gloriously to battle!',
    allies:      ['Robb'],
    enemies:     ['Joffrey'],
    other:       ['Stannis','Balon']
  },
  {
    name:        'Balon',
    house:       'Greyjoy',
    influence:   8, // the Ironborn are sure to rise again, and have nothing to lose!
    landIndices: [24],
    warCry:      ' sails to war with his reavers!',
    allies:      [],
    enemies:     ['Robb'],
    other:       ['Joffrey', 'Stannis', 'Renly']
  },
  {
    name:        'Robb',
    house:       'Stark',
    influence:   6, // the young wolf is untested, but his virtue is true
    landIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11,
                  12, 13, 14, 15, 16, 17, 18, 19],
    warCry:      ', the Young Wolf, demands vengeance!',
    allies:      ['Renly'],
    enemies:     ['Joffrey'],
    other:       ['Stannis', 'Balon']
  }
]

var neutral = [0, 1, 2, 20, 21, 22, 23, 46, 47, 48, 49, 50, 51, 52, 53];

// Ignore!
exportToModule('data', [lands, kings, neutral, adjacentRegions]);

// Now it's time to get really real!

/****************************************
 * CHAPTER 5: The War of the Five Kings *
 ****************************************/

// 1. the fog of war descends: let's create a function called `random` that will
//    return a random member of a collection. For example:
//
//    $ random([1, 2, 3, 4, 5]);
//    => 3

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// 2. we must understand our geography before the fight begins. consult your
//    maps and write a function called `isAdjacent` that returns a boolean for
//    whether or not any given region has another in its list of adjacentRegions
//    above. For example:
//
//    $ isAdjacent('The Wall', 'The North');
//    => true
//    $ isAdjacent('The Wall', 'Dorne');
//    => false

// use a for loop
function isAdjacent(regionOne, regionTwo) {
  var adjacencyList = adjacentRegions[regionOne];
  for (var i = 0; i < adjacencyList.length; i++) {
    if (adjacencyList[i] === regionTwo) return true;
  }
  return false;
}

// use Array.prototype.indexOf
function isAdjacent(regionOne, regionTwo) {
  var index = adjacentRegions[regionOne].indexOf(regionTwo);
  return index !== -1;
}

// 3. we must understand our geography before the fight begins. consult your
//    maps and write a function called `landsInRegion` that returns a list (ie,
//    an Array, always!) of land objects for a given region. For example:
//
//    $ landsInRegion('The Iron Islands');
//    => [
//    =>   {
//    =>     region: 'The Iron Islands',
//    =>     name: 'The Iron Islands',
//    =>     type: 'stronghold',
//    =>     power: 10,
//    =>     defense: 10
//    =>   }
//    => ]
//    $ landsInRegion('Ohio');
//    => []

// use a for loop
function landsInRegion(region) {
  var inRegion = [];
  for (var i = 0, land; i < lands.length; i++) {
    land = lands[i]
    if (land['region'] == region) inRegion.push(land);
  }
  return inRegion === [] ? null : inRegion;
}


// use Array.prototype.filter
function landsInRegion(region) {
  var inRegion = lands.filter(function(land) {
    return land.region == region;
  });
  return inRegion === [] ? null : inRegion;
}

// 4. declare yourselves! write a function called `allegianceOf` that asks the
//    allegiance of any given land, and returns the king object of their liege.
//    If a land is neutral, it returns an object with a single property,
//    "name: 'Neutral'". For example:
//
//    $ allegianceOf('Dragonstone');
//    => {
//    =>   name:  'Stannis',
//    =>   house: 'Baratheon',
//    =>   landIndices: [32, 33, 34]
//    => }
//    $ allegianceOf('The Wall');
//    => {
//    =>   name: 'Neutral'
//    => }
//    $ allegianceOf('Ohio');
//    => null

// use a for loop
function allegianceOf(landName) {
  for (var i = 0, king, kingsLands; i < kings.length; i++) {
    king       = kings[i];
    kingsLands = king['lands'];
    for (var j = 0, landNumber; j < kingsLands.length; j++) {
      landNumber = kingsLands[j];
      if (landName === lands[landNumber]['name']) return king;
    }
  }
  return {name: 'Neutral'};
}

// **BONUS**: use Array.prototype.filter & .some (a tricky combo!)
function allegianceOf(landName) {
  var foundKing = kings.filter(function(king) {
    return king.landIndices.some(function(landIndex) {
      return (landName === lands[landIndex].name);
    });
  });
  return foundKing.length > 0 ? foundKing[0] : {name: 'Neutral'};
}

// 5. knowledge is power! write a function called `getKing` that, given a king's
//    name, returns the object that represents that king. For example:
//
//    $ king('Balon');
//    => {
//    =>   name: 'Balon',
//    =>   house: 'Greyjoy',
//    =>   landIndices: [
//    =>     24
//    =>   ]
//    => }
//    $ king('PJ');
//    => null

// use a for loop
function getKing(name) {
  for (var i = 0; i < kings.length; i++) {
    if (kings[i]['name'] == name) {
      return kings[i];
    }
  }
  return null;
}

// use Array.prototype.filter
function getKing(name) {
  var king = kings.filter(function(kingObj){
    return kingObj.name == name;
  });
  return king.length > 0 ? king[0] : null;
}

// 6. we must learn which way the wind blows... write a function to calculate
//    the power of a king. a king's power is the sum of the power rankings of
//    their lands. the function `powerOf` should work like:
//
//    $ powerOf('Balon');
//    => 10
//
//    Note: it would be helpful to use the function above, right?

// use a for loop
function powerOf(kingName) {
  var king = getKing(kingName),
      landNumbers;
  if (king === null) return null;

  landNumbers = king['lands'];
  for (var i = 0, power = 0; i < landNumbers.length; i++) {
    power = power + lands[landNumbers[i]]['power'];
  }
  return power;
}

// use Array.prototype.reduce
function powerOf(kingName) {
  var king = getKing(kingName);
  if (king === null) return null;

  return king.landIndices.reduce(function(aggregate, currentLandIndex) {
    return aggregate += lands[currentLandIndex].power;
  }, 0);
}

exportToModule('chapter5', [
  random,
  isAdjacent,
  landsInRegion,
  allegianceOf,
  getKing,
  powerOf
]);



/* ******************** BELOW NOT FORMATTED YET *********************** */

var regions = [];
for (var region in adjacentRegions) {
  regions.push(region);
}

function cardToOrd(num) {
  var numStr = num.toString(),
      len    = numStr.length,
      last   = numStr[numStr.length - 1];
  switch (parseInt(last)) {
    case 1: return numStr + 'st';
    case 2: return numStr + 'nd';
    case 3: return numStr + 'rd';
    default: return numStr + 'th';
  }
}

function formatPowerOf(king) {
  return ' (P: ' + king.power + ')';
}

function englishList(list) {
  var len = list.length;

  if (len == 0) {
    return '';
  } else if (len == 1) {
    return list[0];
  } else if (len == 2) {
    return list[0] + ' and ' + list[1];
  } else {
    var last_idx = len - 1;
    var message = list[0];
    for(var i = 1; i < last_idx; i++) {
      message += ', ' + list[i];
    }
    // oxford comma
    return message + ', and ' + list[last_idx];
  }
}

function diplomaticSituationOf(king) {
  var allies     = king.allies,
      enemies    = king.enemies,
      alliesLen  = allies.length,
      enemiesLen = enemies.length;

  var neither = kings.map(function(mapKing) {return mapKing.name;})
                     .filter(function(filterKing) {
                       return (enemies.indexOf(filterKing) == -1 &&
                                allies.indexOf(filterKing)  == -1 &&
                                filterKing != king.name);
                      });

  var neitherLen = neither.length,
      messages   = [],
      alliesMessage, enemiesMessage, neitherMessage;

  enemiesMessage = 'sees ' + englishList(enemies) +
                (enemiesLen > 1 ? ' as enemies' : ' as an enemy');
  alliesMessage  = 'is allied to ' + englishList(allies);
  neitherMessage = 'has an uneasy peace with ' + englishList(neither);

  if (enemiesLen > 0) messages.push(enemiesMessage);
  if (alliesLen  > 0) messages.push(alliesMessage);
  if (neitherLen > 0) messages.push(neitherMessage);

  return king.name + ' ' + englishList(messages) + '.';
}

/********************************
 * CHAPTER 6: A Storm of Swords *
 ********************************/


// can be: make ally, accept ally, make peace, (fight and) accept peace, fight, make enemy, or break ally
const MAKE_ALLY    = {level: 6, description: 'make an alliance'};
const ACCEPT_ALLY  = {level: 5, description: 'make peace, or even accept an alliance'};
const MAKE_PEACE   = {level: 4, description: 'make peace'};
const ACCEPT_PEACE = {level: 3, description: 'fight, but accept peace'};
const FIGHT        = {level: 2, description: 'fight'};
const MAKE_ENEMY   = {level: 1, description: 'make an enemy'};
const BREAK_ALLY   = {level: 0, description: 'act villanously'};

const DIP_STATS = [BREAK_ALLY, MAKE_ENEMY, FIGHT, ACCEPT_PEACE, MAKE_PEACE, ACCEPT_ALLY, MAKE_ALLY];

/* ************* DEFINE THE BELOW ON THE KING OBJECTS ************** */
kings.forEach(function(king) {
  king.lands = function() {
    return this.landIndices.map(function(landIndex) {
      return lands[landIndex];
    });
  }

  king.regions = function() {
    return this.lands().reduce(function(aggregator, value) {
      if (aggregator.indexOf(value.region) === -1) aggregator.push(value.region);
      return aggregator;
    }, []);
  }

  king.accessibleRegions = function() {
    var kingsRegions = this.regions();
    var accessibleRegions = kingsRegions.slice(); // say what?!?! : cloning
    kingsRegions.forEach(function(region) {
      // console.log(region)
      adjacentRegions[region].forEach(function(adjacentRegion) {
        if (accessibleRegions.indexOf(adjacentRegion) === -1) {
          accessibleRegions.push(adjacentRegion);
        }
      });
    });
    return accessibleRegions;
  }

  king.accessibleLands = function() {
    return this.accessibleRegions()
                .reduce(function(aggregator, region) {
                  landsInRegion(region).forEach(function(land) {
                    aggregator.push(land);
                  });
                  return aggregator;
                }, [])
                .filter(function(land) {
                  // console.log(allegianceOf(land.name).name, this.name, allegianceOf(land.name).name == this.name)
                  return allegianceOf(land.name) !== this;
                }.bind(this));
  }

  king.accessibleLandsWithAllegiance = function() {
    return this.accessibleLands()
  }

  // king.move = function() {}
    // can be: request ally, request peace, raid, or attack
    //
    // if dipStat is make ally, then request ally
    // else if allied with everyone, then bide time
    //
    // if dipStat is make peace, then attempt to make peace with an enemy
    // else if no enemies can be attacked, then bide time
    //
    // if dipStat is make enemy, then attack someone who is not an ally or enemy
    // else if no one is not an ally or enemy, then attack enemy
    // else if no enemy can be attacked (ie everyone is ally), then attack ally
    //
    // if dipStat is accept peace but fight, or fight
    //   if no non-ally, then
    //     if accept peace, then bide time
    //     if fight, then raid random ally
    //   if no enemy can be attacked, then raid random non ally
    //   else attack enemy
    //
    // if dipState is make enemy
    //   if have non-ally non-enemy, then attack random non-ally non-enemy
    //   if have no non-ally non-enemy, and there are allies, raid allied territory
    //   if have only enemies and no neutral territory, attack random enemy
    //   if have only enemies and neutral territory, then raid neutral territory
    //
    // if dipStat is break ally
    //   if ally, attack ally (back stabber!)
    //   if non-enemy, then attack random non-enemy
    //   if have only enemies and neutral territory, then attack neutral territory
    //   else (only enemies, no neutrals), then ...
    //     call upon the Targaryens! gain +20 pp, change to:
    //     Daenarys Stormborn, House Targaryen, and get 3 straight attacks from
    //     here on out (the dragon has three heads!)
    //
  king.move = function() {
    var moveDescription;
    if (this.diplomaticStatus.level === 6) { // MAKE AN ALLY!
      if (this.allies.length === (kings.length - 1)) {
        // you are allies with everyone!
        moveDescription = '  ' + this.name + ' is in a good position and bides his time.';
        return moveDescription;
      }
      var partner = this.requestAlly();
      if (partner) {
        this.makeAlly(partner);
        // console.log(this);
        // console.log(partner);
        moveDescription = '  ' + this.name + ' offers an alliance to ' + partner.name + '... And ' + partner.name + ' accepts!';
        moveDescription += '\n  Now ' + diplomaticSituationOf(this);
        moveDescription += '\n  Now ' + diplomaticSituationOf(partner);
      } else {
        moveDescription = '  ' + this.name + ' ponders an alliance, but finds no partners.';
      }
      return moveDescription;
    } else if (this.diplomaticStatus.level === 5 || this.diplomaticStatus.level === 4) { // MAKE PEACE!
      if (this.enemies.length === 0) {
        // you have no enemies!
        moveDescription = '  ' + this.name + ' is in a good position and bides his time.';
        return moveDescription;
      } else {
        var partner = this.requestPeace();
        // console.log('makin peace!', this, partner);
        if (partner) {
          this.makePeace(partner);
          moveDescription = '  ' + this.name + ' offers peace to ' + partner.name + '... And ' + partner.name + ' accepts!';
          moveDescription += '\n  Now ' + diplomaticSituationOf(this);
          moveDescription += '\n  Now ' + diplomaticSituationOf(partner);
        } else {
          moveDescription = '  ' + this.name + ' ponders peace, but finds no partners.';
        }
        return moveDescription;
      }
    } else if (this.diplomaticStatus.level === 3 || this.diplomaticStatus.level === 2) { // FIGHT!
      moveDescription = '  Let\'s get physical!';
      // console.log("can attack: ", )
      console.log(this.accessibleLandsWithAllegiance());
      //   if no enemy can be attacked, then raid random non ally
      //   else attack enemy
      if (this.allies.length === (kings.length - 1)) {
        // you have only allies!
        if (this.diplomaticStatus.level === 3) { // if accept peace, then bide time
          moveDescription = '  ' + this.name + ' is in a good position and bides his time.';
        } else {
          var targetKing = random(this.allies);
          // var targetLand = random(targetKing.lands.filter(function(land) {return }));
          if (targetLand) {
            moveDescription = '  ' + this.name + ' has grown weary of peace, and decides to raid ' + targetLand.name + '!';
            this.raid(targetLand);
          } else {
            moveDescription = '  ' + this.name + ' has grown weary of peace, but finds no suitable target for his wrath...';
          }
        }
      }

      return moveDescription;
    }
  }

  king.requestAlly = function() {
    var ally = false;
    var otherKings = kings;
    otherKings.splice(kings.indexOf(this), 1);
    // TODO: explain that we need to use FOR loop or pass context, bind
    otherKings.forEach(function(otherKing) {
      if (this.allies.indexOf(otherKing.name) === -1) {
        // can't make allies unless you aren't allies
        // console.log(otherKing.name, otherKing.diplomaticStatus.level, '4/5');
        if (this.enemies.indexOf(otherKing.name) === -1 &&
            otherKing.diplomaticStatus.level >= MAKE_PEACE.level) {
          // there is another king that is not an enemy AND is willing to make
          //   peace, ie a low threshold
          ally = otherKing;
        } else if (otherKing.diplomaticStatus.level >= ACCEPT_ALLY.level) {
          // there is another king that is an enemy but still wants an ally!
          ally = otherKing;
        }
      }
    }.bind(this)); // if there are multiple, will take the last... oh well...
    return ally;
  }

  king.makeAlly = function(otherKing) {
    // remove from enemies if necessary
    this.makePeace(otherKing);

    // add to allies
    this.allies.push(otherKing.name)
    otherKing.allies.push(this.name)
  }

  // enemies can be one way... allies must be two-way
  king.makeEnemy = function(otherKing) {
    // remove from allies if necessary
    var thisIndex  = this.allies.indexOf(otherKing.name);
    var otherIndex = otherKing.allies.indexOf(this.name);
    if (thisIndex === -1) {
      this.allies.splice(thisIndex, 1);
    }
    if (otherIndex === -1) {
      otherKing.allies.splice(otherIndex, 1);
    }

    // add to enemies
    this.enemies.push(otherKing.name);
  }

  // TODO: add a reminder to put in returns in our blocks (forEach, map, reduce, filter)
  king.requestPeace = function() {
    var partner = false;
    var enemies = this.enemies.map(function(enemy) {return getKing(enemy)});

    // TODO: explain that we need to use FOR loop or pass context, bind
    enemies.forEach(function(otherKing) {
      // console.log(otherKing.name, otherKing.diplomaticStatus.level, '4/5');
      if (otherKing.diplomaticStatus.level >= MAKE_PEACE.level) {
        // there is an enemy that is is willing to make peace
        partner = otherKing;
      }
    }.bind(this)); // if there are multiple, will take the last... oh well...
    return partner;
  }

  king.makePeace = function(otherKing) {
    // remove from enemies!
    var thisIndex  = this.enemies.indexOf(otherKing.name);
    var otherIndex = otherKing.enemies.indexOf(this.name);
    if (thisIndex !== -1)  this.enemies.splice(thisIndex, 1);
    if (otherIndex !== -1) otherKing.enemies.splice(otherIndex, 1);
  }

  king.raid = function(territory) {}
  king.attack = function(territory) {}

  // king.diplomaticStatus = function() {}
    // depends upon type being reasonable or unreasonable, resourceful or rigid (chaotic or lawful)
    //
    // reasonable tends toward higher score, unreasonable to lower
    //   15% of the time, reasonable kings will fight and still accept peace
    //   0% of the time, unreasonable kings will fight and still accept peace
    // rigid shrinks the high and low scores (above and below fight):
    //   45% of the time, resourceful kings fight
    //   65% of the time, rigid kings fight
    //
    //   joffrey: unreasonable-rigid       5, 5, 5 (15) [  0/65 (65)] 10, 10 (20)
    //   stannis: reasonable-rigid         3, 3, 4 (10) [ 15/65 (80)] 5, 5   (10)
    //   renly:   reasonable-resourceful   6, 7, 7 (20) [ 15/45 (60)] 10, 10 (20)
    //   balon:   unreasonable-resourceful 8, 8, 9 (25) [  0/45 (45)] 15, 15 (30)
    //   robb:    reasonable-rigid         3, 3, 4 (10) [ 15/65 (80)] 5, 5   (10)
  king.diplomaticStatus = function() {
    var values = [];
    switch (this.name) {
      case 'Joffrey':
        values = [10, 10, 65, 0, 5, 5, 5];
        break;
      case 'Stannis':
      case 'Robb':
        values = [5, 5, 65, 15, 4, 3, 3];
        break;
      case 'Renly':
        values = [10, 10, 45, 15, 7, 7, 6];
        break;
      case 'Balon':
        values = [15, 15, 45, 0, 9, 8, 8];
        break;
    }
    var rand = Math.floor(Math.random() * 100) + 1;
    var returnIndex;
    values.reduce(function(aggregator, value, index) {
      var lowerBound = aggregator
      var upperBound = aggregator + value;
      if (rand > lowerBound && rand <= upperBound) {
        returnIndex = index;
      }
      return upperBound;
    }, 0);
    this.diplomaticStatus = DIP_STATS[returnIndex];
    return this.diplomaticStatus;
  }
});

/* ***************** FIGHT PRINTOUTS ****************** */

// actually fight!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// TODO: ensure there are no var declarations inside of loops!
for (var i = 0; i < 1; i++) {
  console.log('As the ' + cardToOrd(i+1) + ' campaign season begins:');

  var currentKings = kings.map(function(king) {
    var newKing   = king;
    newKing.power = powerOf(king['name']);
    return newKing;
  });

  console.log('\nThe contenders are:');

  var trueKing = allegianceOf('King\'s Landing');
  console.log('  King ' + trueKing['name'] + formatPowerOf(trueKing) + ' sits upon the Iron Throne.');

  var contenders = currentKings.filter(function(king){ return king['name'] !== trueKing['name'];});
  contenders     = contenders.sort(function(a, b){ return b.power - a.power; });

  for (var j = 0, len = contenders.length; j < len; j++) {
    var contender = contenders[j];
    var title, message;

    if (contender.power >= trueKing.power) {
      title = 'King ';
      message = ' vows to press his claim...'
    } else {
      title = 'The pretender ';
      if (contender.power > (trueKing.power / 2)) {
        message = ' demands to be recognized...'
      } else if (contender.power > (trueKing.power / 4)) {
        message = ' plots to take power...'
      } else {
        message = ' skulks in his halls...'
      }
    }
    console.log('  ' + title + contender['name'] + ' of House ' + contender['house'] + formatPowerOf(contender) + message);
  }

  console.log('\nThe diplomatic situation is:');

  for (var j = 0, len = currentKings.length; j < len; j++) {
    var king = currentKings[j];
    console.log('  ' + diplomaticSituationOf(king));
  }

  console.log('\nThe balance of power is:');

  for (var j = 0, len = regions.length, region, lands; j < len; j++) {
    region = regions[j];

    var plural = (region[region.length-1] === 's') ? true : false;

    regionsLands = landsInRegion(region);
    regionsLands = regionsLands.map(function(land) {
      return allegianceOf(land.name).name;
    });
    var powers = regionsLands.reduce( function(aggregator, value) {
      if (aggregator.indexOf(value) == -1) aggregator.push(value);
      return aggregator;
    }, []);

    if (powers.length == 1) {
      if (powers[0] == 'Neutral') {
        console.log('  ' + region + ' remain' + (plural ? '' : 's') + ' neutral.');
      } else {
        console.log('  ' + region + ' stand' + (plural ? '' : 's') + ' behind ' + powers[0] + '.');
      }
    } else {
      if (powers.indexOf('Neutral') !== -1) {
        powers.splice(powers.indexOf('Neutral'), 1);
        console.log('  ' + region + (plural ? ' are ' : ' is ') + 'contested by ' + englishList(powers) + '; but desires neutrality.');
      } else {
        console.log('  ' + region + (plural ? ' are ' : ' is ') + 'contested by ' + englishList(powers) + '.');
      }
    }
  }

  console.log('\nThe game begins:');

  currentKings.sort(function(a, b){ return a.power - b.power; }).forEach(function(king) {
    console.log('  ' + king.name + ' has decided to ' + king.diplomaticStatus().description + '...');
  });

  currentKings.sort(function(a, b){ return a.power - b.power; }).forEach(function(king) {
    console.log('\n' + king.name + ' makes his move, and:');
    console.log(king.move());
  });
}

/********************************
 * CHAPTER 7: The Dragon Awakes *
 ********************************/

// callbacks and object-namespaces
debugger

regionsLands = landsInRegion(region);
regionsLands = regionsLands.map(function(land) {
  return allegianceOf(land.name).name;
});
