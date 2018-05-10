const { expect } = require('chai');

import Obstacle from '../lib/obstacle.js';
import Mushroom from '../lib/Mushroom.js';
import Centipede from '../lib/centipede';
import Exterminator from '../lib/Exterminator'

describe('Obstacle', () => {
  let obstacle;
  let centipede;
  let exterminator;
  let Segment;

  beforeEach(() => obstacle = new Obstacle(10,10));


  it('should have an empty array', () => {
    expect(obstacle.mushroomArray).to.deep.equal([]);
  })
  it('should have an x and y coordinate', () => {
    expect(obstacle.x).to.equal(10);
    expect(obstacle.y).to.equal(10);
  }) 

  it.only('should detect mushroom centipede collision', () => {
    // setup
    obstacle = new Obstacle(0, 0, 0, 0, 0);

    centipede = new Centipede(0, 0, 0, 0, 0);
    exterminator = new Exterminator(0, 0, 0, 0, 0);

    centipede.centipedeArray.Segment = [new Segment(25, 25), new Segment(150, 150)];
    obstacle.mushroomArray = [new Mushroom(25, 25), new Mushroom(500, 500)];

    collisionDetection(exterminator, centipede, obstacle);
    


  });
  
});

