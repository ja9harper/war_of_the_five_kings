var exercise = require('../clashOfKings');

var lands           = exercise.data.lands,
    kings           = exercise.data.kings,
    neutral         = exercise.data.neutral,
    adjacentRegions = exercise.data.adjacentRegions,
    random          = exercise.chapter5.random,
    isAdjacent      = exercise.chapter5.isAdjacent,
    landsInRegion   = exercise.chapter5.landsInRegion
    allegianceOf    = exercise.chapter5.allegianceOf,
    getKing         = exercise.chapter5.getKing,
    powerOf         = exercise.chapter5.powerOf;

describe('A Clash of Kings', function() {
  describe('Chapter 5', function() {
    it('defines random', function() {
      expect([1,2,3,4,5]).toContain(random([1,2,3,4,5]));
      expect(random([1])).toBe(1);
    });

    it('defines isAdjacent', function() {
      expect(isAdjacent('The Wall', 'The North')).toBeTruthy();
      expect(isAdjacent('The Wall', 'Dorne')).toBeFalsy();
    });

    it('defines landsInRegion', function() {
      var ironIslands = landsInRegion('The Iron Islands');
      var theWall     = landsInRegion('The Wall');
      var ohio        = landsInRegion('Ohio');
      var land        = {
        region:  'The Iron Islands',
        name:    'The Iron Islands',
        type:    'stronghold',
        power:   10,
        defense: 10
      };
      expect(ironIslands.length).toBe(1);
      expect(theWall.length).toBe(4);
      expect(ironIslands[0]).toEqual(land);
      expect(ohio).toEqual([]);
    });

    it('defines allegianceOf', function() {
      // expect().to();
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
    });

    it('defines getKing', function() {
      // expect().to();
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
    });

    it('defines powerOf', function() {
      // expect().to();
      //    $ powerOf('Balon');
      //    => 10
    });
  });
  
  describe('Chapter 6', function() {
  //   it('has a kings array that is full', function() {
  //     var kings = exercise.chapter2.kings;
  //     expect(kings.sort()).toEqual(['Joffrey','Renly','Stannis']);
  //   });
  });
});
