const { expect } = require('chai');

import collisionDetection from '../lib/collision';
import Exterminator from '../lib/exterminator';
import Centipede from '../lib/centipede';
import Obstacle from '../lib/Obstacle';
import Segment from '../lib/Segment';
import BulletPieces from "../lib/BulletPieces";


describe('Exterminator, Obstacle', () => {
  let exterminator;
  let centipede;
  let obstacle;

  beforeEach(() => {
    exterminator = new Exterminator(0, 0, 0, 0, 0);
    centipede = new Centipede(0, 0, 0, 0, 0);
    obstacle = new Obstacle(0, 0, 0, 0, 0);

  })
    
  it('should detect bullet centipede collision', () => {

    //setup
    obstacle = new Obstacle(0, 0, 0, 0, 0);
    
    centipede = new Centipede(10, 10, 0, 0, 0);
    exterminator = new Exterminator(0, 0, 0, 0, 0);

    centipede.centipedeArray = [new Segment(25, 25), new Segment(150, 150)];
    
    exterminator.bulletsArray = [new BulletPieces(25, 25, 0, 0, 0)]

    // action
    collisionDetection(exterminator, centipede, obstacle);

    // assert
    
    expect(centipede.centipedeArray.length).to.equal(1)
    
//   });

//   it('should detect exterminator centipede collision', () => {

//   });

  });
});