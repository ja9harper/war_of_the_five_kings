// TODO: don't use the term lands -- maybe domains? estates?
//       having sea lands is too weird



/* ************************************************************************** *
 *                          DATA SETS OF WESTEROS                             *
 * ************************************************************************** */

// For really modeling this war, we're going to need some better **data**:
//   - regions: a list of the regions of Westeros -- the Seven Kingdoms et al
//   - domains: a list of the major domains of each of these regions
//   - kings:   a list of the claimants to kingship, and the lands that recognize
//       allegiance to each,
//   - neutral: the list of lands not claiming any king.

var data = {};

// holding an entire region gives a +2 to defending any stronghold there
data.regions = [
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
];

data.domains = [
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
    adjacent: [2, 3, 7, 9, 27] // and the lands beyond the wall (73)
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
    adjacent: [6, 15, 17, 19, 20, 21, 23, 27, 32]
  },
  { /* 19 */
    name: 'The Trident',        type: 'territory',  region: 'The Riverlands',
    power: 2, defense: 2,
    adjacent: [18, 20, 23, 24, 35]
  },
  { /* 20 */ // should be called Harrenhall?
    name: 'God\'s Eye',         type: 'stronghold', region: 'The Riverlands',
    power: 1, defense: 2,
    adjacent: [18, 19, 21, 35, 46, 47]
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
    adjacent: [34, 38, 39, 41, 43, 47, 48]
  },
  { /* 38 */
    name: 'King\'s Landing', type: 'city',      region: 'The Crownlands',
    power: 12, defense: 10,
    adjacent: [34, 35, 37, 47]
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
    adjacent: [41, 40, 48, 49, 52, 55, 61, 60]
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
    power: 3, defense: 1,
    adjacent: [20, 21, 30, 31, 44, 47, 51]
  },
  { /* 47 */
    name: 'The Mander',         type: 'territory',  region: 'The Reach',
    power: 3, defense: 1,
    adjacent: [20, 35, 37, 38, 46, 48, 51]
  },
  { /* 48 */
    name: 'Grassy Vale',        type: 'territory',  region: 'The Reach',
    power: 3, defense: 1,
    adjacent: [37, 41, 42, 47, 49, 51]
  },
  { /* 49 */
    name: 'Horn Hill',          type: 'territory',  region: 'The Reach',
    power: 1, defense: 3,
    adjacent: [42, 44, 45, 48, 50, 51, 52]
  },
  { /* 50 */
    name: 'Redwyne Straits',    type: 'territory',  region: 'The Reach',
    power: 2, defense: 1,
    adjacent: [44, 45, 49, 53]
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
    power: 8, defense: 2, // if neutral, make 9/9
    adjacent: [45, 50] // make neutral??????
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
    adjacent: [45, 54, 57, 59, 62]
  }
  // the sunset sea: 64
  // the shivering sea: 65
  // the narrow sea: 66
  // braavos: 67, pentos: 68, myr: 69, tyrosh: 70, lys: 71
  // skagos: 72
  // the far north: 73
];

data.kings = [
  {
    name:        'Joffrey',
    house:       'Baratheon-Lannister',
    // influence is an indicator of personal charisma and power, ie the loyalty
    //   and dedication a king inspires in those who serve him -- the king brings
    //   their influence as power to every fight!
    influence:   4, // the king is cruel and cowardly, but his family is strong
                    // also: sitting the Iron Throne adds + 4 to influence
    seaPower:    0, // a multiplier for fighting at sea (ie, when sea == true)
    landIndices: [28, 29, 30, 31, 32, 33, 35, 38],
    warCry:      ' demands allegiance, and orders his men to fight!',
    allies:      [],
    enemies:     ['Stannis', 'Renly', 'Robb'],
    other:       ['Balon']
  },
  {
    name:        'Stannis',
    house:       'Baratheon',
    influence:   4, // the red woman inspires terror, but Stannis does not inspire love...
    seaPower:    2,
    landIndices: [34, 36, 37, 40],
    warCry:      ' calls upon his god to bring fire to his enemies!',
    allies:      [],
    enemies:     ['Joffrey', 'Renly', 'Robb'],
    other:       ['Balon']
  },
  {
    name:        'Renly',
    house:       'Baratheon',
    influence:   6, // the people love him, and his guard is devoted! But there are rumors...
    seaPower:    0,
    landIndices: [39, 41, 42, 43, 44, 45, 46, 47, 48, 49,
                  50, 51, 52, 53],
    warCry:      ' marches gloriously to battle!',
    allies:      ['Robb'],
    enemies:     ['Joffrey'],
    other:       ['Stannis','Balon']
  },
  {
    name:        'Balon',
    house:       'Greyjoy',
    influence:   8, // the Ironborn are sure to rise again, and have nothing to lose!
    seaPower:    4,
    landIndices: [27],
    warCry:      ' sails to war with his Reavers!',
    allies:      [],
    enemies:     ['Robb'],
    other:       ['Joffrey', 'Stannis', 'Renly']
  },
  {
    name:        'Robb',
    house:       'Stark',
    influence:   6, // the young wolf is untested, but his virtue is true
    seaPower:    -2,
    landIndices: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                   15, 16, 17, 18, 19, 20, 21],
    warCry:      ', the Young Wolf, demands vengeance!',
    allies:      ['Renly'],
    enemies:     ['Joffrey'],
    other:       ['Stannis', 'Balon']
  }
];

data.neutral = [0, 1, 2, 22, 23, 24, 25, 26, 46, 47, 48, 49,
                50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62];

// welcome, maester... stuff about citadel, etc.

// our maps are old and dusty, and our men unlearned -- it is up to you to make
// us ready for war.

// we must be able to survey the land! let's work with the above data structures
// to pull out the necessary information we need to commit to our effort and
// gain the iron throne!

// ...

// 1.  english list
// 2.  stringify JSON Object (obj, propList)
// 3.  enumerate Object --> forEachPropIn(obj, callback)

// 4.  regionString xxxxxxxxxxxxx
// 5.  domainString
// 6.  kingString

// 7.  list the domains (each)
// 8.  list the regions xxxxxxxxxx
// 9.  find the domains in a region (map)
// 10. find a region's power (reduce)

// 11. sort the regions by power (sort)
// 12. sort the regions by number of domains
// 13. sort the regions by average defense (2 functions -- avg & sortByAvg)
// 14. sort the regions by median defense...

// 15. list the kings
// 16. find the allegiance of any given domain
// 17. list a king's dominion (all their domains)
// 18. find a king's power
// 19. list the neutrals
// 20. list the neutral's power by region
// 21. sort the neutrals by their average power

// 22. sort the neutral regions by their power-to-defense ratio

// 23. get adjacent domains by any domain's index
// 24. use select/filter to grab the seas adjacent to any domain

// 25. create a list of sea indices and add it to the data object
// 26. select/filter out just seas from domain lists

// 27. list the adjacent seas to any domain index
// 28. list the reachable domains to any domain index:
  // from any land: adjacent lands and seas, and
  //                seas adjacent to any adjacent sea
  // from any sea: adjacent lands and seas, and
  //               seas adjacent to any adjacent sea, and
  //               lands adjacent to any adjacent sea

// 29. create a table of reachable lands from any index, and add it to the data object
  // - a hashmap-style object, where the properties are the domain indices
  // - each domain-index value is a hashmap-style object where the properties are
    // - the domain-indices of the reachable lands, and they map to array values
    // - that include 'direct' (if they are directly adjacent), and
    // - a list of domain-indices they can be reached thru (seas)

// 30. finally, write a function that maps any domain to a list of reachable domains
// that include:
  // an allegiance index
  // a path index that is the relationship in the reachable table btwn the lands



var clc = require('cli-color');
var pad = require('pad');

var utilities = {};

// 1.  english list

utilities.englishList = function(list) {
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

// 2.  stringify object properties (obj, propList)

utilities.stringifyProps = function(obj, propList) {
  var len     = propList.length,
      prop    = '',
      str     = '';
  if (len > 0) {
    prop = propList[0];
    str  = prop + ': ' + obj[prop];
    for(var i = 1; i < len; i++) {
      prop = propList[i];
      str += ', ' + prop + ': ' + obj[prop];
    }
  }
  return str;
}

// 3.  enumerate Object --> forEachPropIn(obj, callback)
// passes key, value, obj to the callback

utilities.enumerateObject = function(obj, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  // http://jsperf.com/object-keys-vs-hasownproperty/4
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
  var keys = Object.keys(obj);
  for(var i = 0, len = keys.length; i < len; i++) {
    key   = keys[i];
    value = obj[key];
    callback(key, value, obj);
  }
}

// Array.prototype.includes = function(item) {
//   return this.indexOf(item) !== -1;
// }
// utilities.stringifyProps = function(obj, propList) {
//   var len     = propList.length,
//       prop    = '',
//       str     = '';
//   utilities.enumerateObject(obj, function(property, value) {
//     if (propList.includes(property)) {
//       str += property + ': ' + value + ', ';
//     }
//   });
//   return str.substring(0, str.length - 2);;
// }

// xxxxxx 4.  printRegion xxxxxx
// makes no sense

// 5.  printDomain
utilities.domainString = function(domain, idx) {
  var str = '';

  if (idx !== undefined) {
    str = pad(2, idx.toString(), '0') + ' ';
  }
  str += domain.name + ' (' +
         utilities.stringifyProps(domain, ['power', 'defense']) + ')';
  if (domain.sea) {
    str = clc.blue(str);
  }
  if (domain.type === 'stronghold') {
    str = clc.underline(str);
  } else if (domain.type === 'city') {
    str = clc.bold(str);
  }
  return str;
}

// function landToString(land, idx, delimiter, padding) {
//   var isSea        = land.sea,
//       isStronghold = land.type === 'stronghold',
//       isCity       = land.type === 'city',
//       cobbleMessage;
//
//   delimiter = delimiter || '';
//   padding   = padding   || 0;
//
//   if (delimiter) {
//     cobbleMessage = function() {return pad(message + land.name + delimiter, padding);}
//   } else {
//     cobbleMessage = function() {return message + land.name;}
//   }
//
//   message = pad(2, idx.toString(), '0') + ' ';
//
//   if (isSea && isStronghold) {
//     message = clc.magenta(cobbleMessage());
//   } else if (isSea) {
//     message = clc.blue(cobbleMessage());
//   } else if (isStronghold) {
//     message = clc.yellow(cobbleMessage());
//   } else if (isCity) {
//     message = clc.green(cobbleMessage());
//   } else {
//     message = cobbleMessage();
//   }
//   return message
// }

// 6.  kingString
utilities.kingString = function(king) {
  var str = king.name + ' (' +
            utilities.stringifyProps(king, ['influence']) + ')';
  return str;
}

// 7.  log the domains in the console...
utilities.logDomains = function() {
  data.domains.forEach(function(domain, idx) {
    console.log(utilities.domainString(domain, idx));
  });
}

// 8.  list the regions (each) xxxxxxxxxx

// 9.  find the domains in a region (select/filter)
data.domainsInRegion = function(region) {
  return data.domains.filter(function(domain) {
    return domain.region === region;
  });
}

// 10. find a region's power (reduce)
utilities.powerOfRegion = function(region) {
  var domains = utilities.domainsInRegion(region);
  return domains.reduce(function(aggregator, domain) {
    return aggregator + domain.power;
  }, 0);
}

// ... return a region with a power
utilities.regionWithPower = function(region) {
  return {name: region, power: utilities.powerOfRegion(region)}
}

// 11. sort the regions by power (map, sort)
data.regionsByPower = function() {
  var regionsWithPower = data.regions.map(function(region) {
    return utilities.regionWithPower(region);
  });
  return regionsWithPower.sort(function(reg1, reg2) {
    return reg2.power - reg1.power;
  });
}

// 12. sort the regions by number of domains
data.regionsByDomains = function() {
  var regionsWithDomains = data.regions.map(function(region) {
    return {name: region, domains: utilities.domainsInRegion(region).length};
  });
  return regionsWithDomains.sort(function(reg1, reg2) {
    return reg2.domains - reg1.domains;
  });
}

// 13. sort the regions by average defense (2 functions -- avg & sortByAvg)
utilities.averageOf = function(list, property) {
  for (var i = 0, len = list.length, sum = 0; i < len; i++) {
    sum += list[i][property];
  }
  return Math.round(sum/len);
}

data.regionsByAvgDefense = function() {
  var regionsWithDomains = data.regions.map(function(region) {
    var domainsInRegion = utilities.domainsInRegion(region);
    var avgDefense = utilities.averageOf(domainsInRegion, 'defense');
    return {name: region, avgDefense: avgDefense};
  });
  return regionsWithDomains.sort(function(reg1, reg2) {
    return reg2.avgDefense - reg1.avgDefense;
  });
}

// 14. sort the regions by median defense...
utilities.medianOf = function(list, property) {
  var sortList = list.slice(0), // clone array
      len      = sortList.length,
      medianIdx;

  sortList = sortList.sort(function(reg1, reg2) {
    return reg2[property] - reg1[property];
  });

  // http://stackoverflow.com/questions/25305640/find-median-values-from-array-in-javascript-8-values-or-9-values
  medianIdx = Math.floor((len - 1) / 2); // NB: operator precedence
  if (len % 2) {
    return sortList[medianIdx][property]
  } else {
    return (sortList[medianIdx][property] + sortList[medianIdx + 1][property])/2.0;
  }
}

data.regionsByMedDefense = function() {
  var regionsWithDomains = data.regions.map(function(region) {
    var domainsInRegion = utilities.domainsInRegion(region);
    var medDefense = utilities.medianOf(domainsInRegion, 'defense');
    return {name: region, medDefense: medDefense};
  });
  return regionsWithDomains.sort(function(reg1, reg2) {
    return reg2.medDefense - reg1.medDefense;
  });
}

// 15. log the kings to the console
utilities.kingString = function(king) {
  var str = king.name + ' (' +
            utilities.stringifyProps(king, ['influence']) +
            
             ')';
  return str;
}

utilities.logKings = function() {
  data.kings.forEach(function(king) {
    console.log(utilities.kingString(king));
  });
}

// 16. find the allegiance of any given domain
// 17. list a king's dominion (all their domains)
// 18. find a king's power
// 19. list the neutrals
// 20. list the neutral's power by region
// 21. sort the neutrals by their average power

// function allegianceOf(landName) {
//   var foundKing = data.kings.filter(function(king) {
//     return king.landIndices.some(function(landIndex) {
//       return (landName === data.lands[landIndex].name);
//     });
//   });
//   if (foundKing.length === 0) {
//     foundKing = data.neutral.filter(function(land) {
//       return landName === data.lands[land].name;
//     });
//     return foundKing.length === 1 ? {name: 'Neutral'} : null;
//   } else {
//     return foundKing[0];
//   }
// }
//
// function powerOfKing(kingObj) {
//   // var king = getKing(kingName);
//   // if (king === null) return null;
//
//   return kingObj.landIndices.reduce(function(aggregate, currentLandIndex) {
//     return aggregate += data.lands[currentLandIndex].power;
//   }, 0);
// }
//
// function powerOfRegion(regionName) {
//   // var king = getKing(kingName);
//   // if (king === null) return null;
//
//   return king.landIndices.reduce(function(aggregate, currentLandIndex) {
//     return aggregate += data.lands[currentLandIndex].power;
//   }, 0);
// }
//

//
// function adjacentTo(land) {
//   var adjacentLandIndices = land.adjacent;
//
//   return adjacentLandIndices.map(function(idx) {
//     var land = data.lands[idx];
//     land.index = idx;
//     return land;
//   });
// }
//
// function filterSeasFromLands(landList) {
//   return landList.filter(function(adjLand) {
//     return (adjLand.sea == true);
//   });
// }
//
// // function adjacentSeas(land) {
// //   var adjacentLands = adjacentTo(land);
// //
// //
// // }
//
// //DUP ARRAY!
// // function dup(arr) {
// //   return arr.slice(0);
// // }
// //
// // function uniqueArray(arr) {
// //   arr = dup(arr).sort(function(a, b) {return a - b;});
// //   for(var i = 0; i < arr.length; i++) {
// //     if (arr[i] == arr[i+1]) {
// //       arr.splice(i+1,1);
// //     }
// //   }
// //   return arr;
// // }
// //
// // function uniqueMergeArrays() {
// //   var mergedArray = [];
// //   for (var i = 0; i < arguments.length; i++) {
// //     mergedArray = mergedArray.concat(arguments[i]);
// //   }
// //   return uniqueArray(mergedArray);
// // }
//
// function allReachable(land) {
//
//   // get list of adjacenct lands
//   adjacentLands = adjacentTo(land);
//
//   // pick out the adjancenct lands that are seas
//   adjacentSeas =  filterSeasFromLands(adjacentLands);
//
//   // for each sea, get the list of adjacent lands
//   adjacentLandsToSeas = {};
//   adjacentSeas.forEach(function(sea) {
//     adjacentLandsToSeas[sea.index] = adjacentTo(sea).map(function(l) {
//       return l.index;
//     });
//   });
//
//   // create a list of all, unique, adjacent lands -- OR NOT???
//   adjacentIndexList = {};
//
//   land.adjacent.forEach(function(adj) {
//     // console.log(adj)
//     adjacentIndexList[adj] = ['direct'];
//   });
//
//   for(var sea in adjacentLandsToSeas) {
//     // console.log(sea);
//     adjacentIndexList[sea].push('sea');
//     // console.log(adjacentLandsToSeas[sea])
//     adjacentLandsToSeas[sea].forEach(function(adj) {
//       var idx = Object.keys(adjacentIndexList).indexOf(adj.toString());
//
//       if (idx === -1) {
//         // console.log('add with via sea');
//         adjacentIndexList[adj] = [sea];
//       } else {
//         // console.log('push via sea');
//         adjacentIndexList[adj].push(sea);
//       }
//     });
//
//   }
//   return adjacentIndexList;
//
//   // for each adjacent land, add a reference as direct or via (if it can be
//   //   reached in multiple ways)
//
// }
//
// // for(var i = 0, len = data.lands.length, land, message, itother; i < len; i++) {
// //   land = data.lands[i];
// //
// //   message = landToString(land, i, ':', 25);
// //   message += adjacentToString(land);
// //   // message += allegianceToString(land.name);
// //
// //   console.log(message);
// // }
//
//
//
// // for(var i = 0, len = data.kings.length, king, name, influence, power, message; i < len; i++) {
// //   king      = data.kings[i];
// //   name      = king.name;
// //   influence = king.influence;
// //   power     = powerOfKing(king);
// //
// //   message =  pad(name + ':', 8);
// //   message += ' influence ('          + pad(2, influence, '0') + ')';
// //   message += ', power ('             + pad(2, power, '0') + ')';
// //   message += ', total power ('       + pad(2, influence + power, '0') + ')';
// //   message += ', total power at sea(' + pad(2, influence + power + king.seaPower, '0') + ')';
// //
// //   console.log(message);
// // }
//
// function adjacentToString(land) {
//   var adjacentLandIndices = land.adjacent,
//       adjacentLands,
//       adjacentNames,
//       message;
//
//   adjacentLands = adjacentSeas(land);
//
//   adjacentNames = adjacentLands.map(function(adjLand) {
//     var name = adjLand.name.replace('The ',''),
//         adjacentToThisSea;
//     if (adjLand.sea) {
//       message = clc.blue(name) + ': ';
//       // message = clc.underline(' ' + message + ': ');
//
//       adjacentToThisSea = adjacentSeas(adjLand).map(function(l){
//         return l.name;
//       });
//
//       message += '(' + adjacentToThisSea + ')';
//
//     } else {
//       message = ' ' + clc.yellow(name) + ' ';
//       // message = clc.yellow(' ' + message + ' ')
//     }
//
//     return message;
//   });
//
//   return englishList(adjacentNames);
// }
//
// function allegianceToString(land) {
//   var allegiance = allegianceOf(land);
//   return allegiance ?  allegiance.name : clc.red('n/a');
// }
//


// Below you will see this function used... Ignore it or ask us about it! It's
// how we will test your work to see if it is correct.
function exportToModule(localModules) {
  if (typeof module !== 'undefined' && module.exports) {
    for(var moduleName in localModules) {
      module.exports[moduleName] = localModules[moduleName];
    }
    module.exports.load = function(ctx) {
      for(var moduleName in localModules) {
        ctx[moduleName] = this[moduleName];
      }
    }
  }
}

exportToModule({
  data:      data,
  utilities: utilities
});

// Use this elsewhere to autoload the exported modules...
// require('./data').load(this)
