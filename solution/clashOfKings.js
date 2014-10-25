


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
    lands: [30, 31, 25, 26, 27, 28, 29],
    warCry: ' demands allegiance, and orders his men to fight!',
    allies: [],
    enemies: ['Stannis', 'Renly', 'Robb']
  },
  {
    name:  'Stannis',
    house: 'Baratheon',
    lands: [32, 33, 34],
    warCry: ' calls upon his god to bring fire to his enemies!',
    allies: [],
    enemies: ['Joffrey', 'Renly', 'Robb']
  },
  {
    name:  'Renly',
    house: 'Baratheon',
    lands: [39, 40, 41, 42, 43, 44, 45, 35, 36, 37, 38],
    warCry: ' marches gloriously to battle!',
    allies: ['Robb'],
    enemies: ['Joffrey']
  },
  {
    name:  'Balon',
    house: 'Greyjoy',
    lands: [24],
    warCry: ' sails to war with his reavers!',
    allies: [],
    enemies: ['Robb']
  },
  {
    name:  'Robb',
    house: 'Stark',
    lands: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
    warCry: ', the Young Wolf, demands vengeance!',
    allies: ['Renly'],
    enemies: ['Joffrey']
  }
]

var neutral = [0, 1, 2, 20, 21, 22, 23, 46, 47, 48, 49, 50, 51, 52, 53];

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
    return king.lands.some(function(landNumber) {
      return (landName === lands[landNumber].name);
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

  return king.lands.reduce(function(aggregate, currentLandNumber) {
    return aggregate += lands[currentLandNumber].power;
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

  // king.move = function() {}
    // can be: request ally, request peace, raid, or attack
    //
    // if dipStat is make ally, then request ally
    // else if allied with everyone, then bide time
    //
    // if dipStat is make peace, then attempt to make peace with an enemy
    // else if no enemies can be attacked, then bide time
    //
    // if dipStat is break ally, then raid allied territory
    // else if no allies, then attack neutral
    // else if no neutral, then raid random
    //
    // if dipStat is make enemy, then attack someone who is not an ally or enemy
    // else if no one is not an ally or enemy, then attack enemy
    // else if no enemy can be attacked (ie everyone is ally), then attack ally
    //
    // else (dipStat is accept ally, accept peace, or fight)
    //   if have an enemy, attack enemy
    //   if no enemy can be attacked, then raid random non ally
    //   if no non-ally, then bide time
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
        console.log('makin peace!', this, partner);
        if (partner) {
          this.makePeace(partner);
          moveDescription = '  ' + this.name + ' offers peace to ' + partner.name + '... And ' + partner.name + ' accepts!';
        } else {
          moveDescription = '  ' + this.name + ' ponders peace, but finds no partners.';
        }
        return moveDescription;
      }
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
    var thisIndex  = this.enemies.indexOf(otherKing.name);
    var otherIndex = otherKing.enemies.indexOf(this.name);
    if (thisIndex === -1) {
      this.enemies.splice(thisIndex, 1);
    }
    if (otherIndex === -1) {
      otherKing.enemies.splice(otherIndex, 1);
    }

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
    // remove from enemies if necessary
    var thisIndex  = this.enemies.indexOf(otherKing.name);
    var otherIndex = otherKing.enemies.indexOf(this.name);
    if (thisIndex === -1) {
      this.enemies.splice(thisIndex, 1);
    }
    if (otherIndex === -1) {
      otherKing.enemies.splice(otherIndex, 1);
    }
  }

  king.raid = function(territory) {}
  king.attack = function(territory) {}
});

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

  console.log('\nThe balance of power is:');

  for (var j = 0, len = regions.length, region, lands; j < len; j++) {
    region = regions[j];

    var plural = (region[region.length-1] === 's') ? true : false;

    regionsLands = landsInRegion(region);
    regionsLands = regionsLands.map(function(land) {
      return allegianceOf(land.name).name;
    });
    var powers = regionsLands.reduce( function(aggregator, value) {
      if (aggregator.indexOf(value) == -1) {
        aggregator.push(value);
      }
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
        console.log('  ' + region + (plural ? ' are ' : ' is ') + 'contested by ' + powers.join(', ') + '; but desires neutrality.');
      } else {
        console.log('  ' + region + (plural ? ' are ' : ' is ') + 'contested by ' + powers.join(', ') + '.');
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
