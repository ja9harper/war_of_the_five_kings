
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
//   - lands: a list of the lands of Westeros,
//   - adjacentRegions: a "hash" (Object) of the regions of Westeros, and the
//       regions adjacent (next to) each,
//   - kings: a list of the claimants to kingship, and the lands that recognize
//       allegiance to each,
//   - neutral: the list of lands not claiming any king.

var lands = [
  {region: 'The Wall',        name: 'The Wall',            type: 'stronghold', power: 0,  defense: 20},
  {region: 'The Wall',        name: 'Castle Black',        type: 'stronghold', power: 4,  defense: 8},
  {region: 'The Wall',        name: 'Brandon\'s Gift',     type: 'territory',  power: 1,  defense: 1},
  {region: 'The Wall',        name: 'The New Gift',        type: 'territory',  power: 2,  defense: 1},
  {region: 'The North',       name: 'Bay of Seals',        type: 'territory',  power: 1,  defense: 1},
  {region: 'The North',       name: 'Bear Island',         type: 'territory',  power: 2,  defense: 4},
  {region: 'The North',       name: 'The Wolfswood',       type: 'territory',  power: 1,  defense: 1},
  {region: 'The North',       name: 'The Lonely Hills',    type: 'territory',  power: 1,  defense: 2},
  {region: 'The North',       name: 'The Hornwood',        type: 'territory',  power: 1,  defense: 1},
  {region: 'The North',       name: 'The Barrowlands',     type: 'territory',  power: 1,  defense: 1},
  {region: 'The North',       name: 'Stony Shore',         type: 'territory',  power: 1,  defense: 1},
  {region: 'The North',       name: 'Flint Cliffs',        type: 'territory',  power: 1,  defense: 1},
  {region: 'The North',       name: 'The Neck',            type: 'stronghold', power: 1,  defense: 10},
  {region: 'The North',       name: 'The Three Sisters',   type: 'territory',  power: 2,  defense: 2},
  {region: 'The North',       name: 'White Harbor',        type: 'city',       power: 3,  defense: 2},
  {region: 'The Riverlands',  name: 'The Cape of Eagles',  type: 'territory',  power: 1,  defense: 1},
  {region: 'The Riverlands',  name: 'The Green Fork',      type: 'territory',  power: 2,  defense: 2},
  {region: 'The Riverlands',  name: 'The Trident',         type: 'territory',  power: 2,  defense: 2},
  {region: 'The Riverlands',  name: 'God\'s Eye',          type: 'stronghold', power: 1,  defense: 2},
  {region: 'The Riverlands',  name: 'Riverrun',            type: 'stronghold', power: 1,  defense: 6},
  {region: 'The Vale',        name: 'Gulltown',            type: 'city',       power: 3,  defense: 2},
  {region: 'The Vale',        name: 'The Mountains of the Moon', type: 'territory', power: 1, defense: 5},
  {region: 'The Vale',        name: 'The Fingers',         type: 'territory',  power: 2,  defense: 2},
  {region: 'The Vale',        name: 'The Vale of Arryn',   type: 'stronghold', power: 3,  defense: 14},
  {region: 'The Iron Islands', name: 'The Iron Islands',   type: 'stronghold', power: 10, defense: 10},
  {region: 'The Westerlands', name: 'The Golden Tooth',    type: 'stronghold', power: 1,  defense: 6},
  {region: 'The Westerlands', name: 'Sunset Sea',          type: 'territory',  power: 4,  defense: 1},
  {region: 'The Westerlands', name: 'The Crag',            type: 'stronghold', power: 2,  defense: 4},
  {region: 'The Westerlands', name: 'Crakehall Wood',      type: 'territory',  power: 2,  defense: 1},
  {region: 'The Westerlands', name: 'Lannisport',          type: 'city',       power: 6,  defense: 2},
  {region: 'The Crownlands',  name: 'The Kingswood',       type: 'territory',  power: 2,  defense: 1},
  {region: 'The Crownlands',  name: 'King\'s Landing',     type: 'city',       power: 12, defense: 10},
  {region: 'The Crownlands',  name: 'Crackclaw Point',     type: 'territory',  power: 1,  defense: 1},
  {region: 'The Crownlands',  name: 'Dragonstone',         type: 'stronghold', power: 3,  defense: 7},
  {region: 'The Stormlands',  name: 'The Rainwood',        type: 'territory',  power: 2,  defense: 1},
  {region: 'The Stormlands',  name: 'Summerhall',          type: 'territory',  power: 2,  defense: 2},
  {region: 'The Stormlands',  name: 'Tarth',               type: 'territory',  power: 2,  defense: 2},
  {region: 'The Stormlands',  name: 'Shipbreaker Bay',     type: 'territory',  power: 1,  defense: 2},
  {region: 'The Stormlands',  name: 'The Dornish Marches', type: 'territory',  power: 1,  defense: 3},
  {region: 'The Reach',       name: 'The Shield Islands',  type: 'territory',  power: 2,  defense: 4},
  {region: 'The Reach',       name: 'The Arbor',           type: 'territory',  power: 3,  defense: 2},
  {region: 'The Reach',       name: 'Redwyne Straits',     type: 'territory',  power: 1,  defense: 1},
  {region: 'The Reach',       name: 'Starfall',            type: 'stronghold', power: 2,  defense: 5},
  {region: 'The Reach',       name: 'The Mander',          type: 'territory',  power: 8,  defense: 1},
  {region: 'The Reach',       name: 'Grassy Vale',         type: 'territory',  power: 4,  defense: 1},
  {region: 'The Reach',       name: 'Oldtown',             type: 'city',       power: 10, defense: 2},
  {region: 'Dorne',           name: 'Sunspear',            type: 'territory',  power: 3,  defense: 3},
  {region: 'Dorne',           name: 'The Stepstones',      type: 'territory',  power: 1,  defense: 3},
  {region: 'Dorne',           name: 'Prince\'s Pass',      type: 'stronghold', power: 1,  defense: 5},
  {region: 'Dorne',           name: 'The Boneway',         type: 'stronghold', power: 1,  defense: 5},
  {region: 'Dorne',           name: 'Yronwood',            type: 'territory',  power: 2,  defense: 1},
  {region: 'Dorne',           name: 'The Greenblood',      type: 'territory',  power: 2,  defense: 1},
  {region: 'Dorne',           name: 'Red Mountains',       type: 'territory',  power: 1,  defense: 3},
  {region: 'Dorne',           name: 'The Sands',           type: 'territory',  power: 1,  defense: 1}
];

var kings = [
  {
    name:  'Joffrey',
    house: 'Baratheon-Lannister',
    lands: [30, 31, 25, 26, 27, 28, 29]
  },
  {
    name:  'Stannis',
    house: 'Baratheon',
    lands: [32, 33, 34]
  },
  {
    name:  'Renly',
    house: 'Baratheon',
    lands: [39, 40, 41, 42, 43, 44, 45, 35, 36, 37, 38]
  },
  {
    name:  'Balon',
    house: 'Greyjoy',
    lands: [24]
  },
  {
    name:  'Robb',
    house: 'Stark',
    lands: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  }
]

var neutral = [0, 1, 2, 3, 20, 21, 22, 23, 46, 47, 48, 49, 50, 51, 52, 53];

var adjacentRegions = {
  'The Wall'        : [
    'The Wall',
    'The North',
    'The Vale',
    'The Iron Islands',
    'The Stormlands'
  ],
  'The North'       : [
    'The Wall',
    'The North',
    'The Riverlands',
    'The Vale',
    'The Iron Islands',
    'The Stormlands'
  ],
  'The Riverlands'  : [
    'The North',
    'The Riverlands',
    'The Vale',
    'The Iron Islands',
    'The Westerlands',
    'The Crownlands',
    'The Reach'
  ],
  'The Vale'        : [
    'The Wall',
    'The North',
    'The Riverlands',
    'The Vale',
    'The Stormlands'
  ],
  'The Iron Islands': [
    'The Wall',
    'The North',
    'The Riverlands',
    'The Iron Islands',
    'The Westerlands',
    'The Reach'
  ],
  'The Westerlands' : [
    'The Riverlands',
    'The Iron Islands',
    'The Westerlands',
    'The Reach'
  ],
  'The Crownlands'  : [
    'The Riverlands',
    'The Crownlands',
    'The Stormlands',
    'The Reach'
  ],
  'The Stormlands'  : [
    'The Wall',
    'The North',
    'The Vale',
    'The Crownlands',
    'The Stormlands',
    'The Reach',
    'Dorne'
  ],
  'The Reach'       : [
    'The Wall',
    'The North',
    'The Riverlands',
    'The Vale',
    'The Iron Islands',
    'The Westerlands',
    'The Crownlands',
    'The Stormlands',
    'The Reach',
    'Dorne'
  ],
  'Dorne'           : [
    'The Iron Islands',
    'The Stormlands',
    'The Reach',
    'Dorne'
  ]
};

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
    return land['region'] == region;
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
//    =>   lands: [32, 33, 34]
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
    return king['lands'].some(function(landNumber) {
      return (landName === lands[landNumber]['name']);
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
//    =>   lands: [
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
    return kingObj['name'] == name;
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

  return king['lands'].reduce(function(aggregate, currentLandNumber) {
    return aggregate += lands[currentLandNumber]['power'];
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

/********************************
 * CHAPTER 6: A Storm of Swords *
 ********************************/

// actually fight

/********************************
 * CHAPTER 7: The Dragon Awakes *
 ********************************/

// callbacks and object-namespaces
