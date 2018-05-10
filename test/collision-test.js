// const { expect } = require('chai');

// import Collision from '../lib/Collision';
// import Exterminator from '../lib/exterminator';
// import Centipede from '../lib/centipede';
// import Obstacle from '../lib/Obstacle';


describe('Exterminator', () => {
  let exterminator;
  let centipede;
  let obstacle;

  beforeEach(() => {
    exterminator = new Exterminator();
    centipede = new Centipede(0, 0, 0, 0, 0);
    obstacle = new Obstacle(0, 0, 0, 0, 0);
  })
    
  it.only('should detect bullet centipede collision', () => {
    centipede.populate();
    exterminator.populateBullets();
    obstacle.populate();
    Collision.bulletCentipedeCollision(exterminator, centipede, obstacle);
   

    expect(centipede.x && obstacle.x).to.equal(0)
    expect(centipede.y && obstacle.y).to.equal(0)
  });
  it('should detect bullet mushroom collision', () => {


//   });
//   it('should detect mushroom centipede collision', () => {

//   });
//   it('should detect exterminator centipede collision', () => {

//   });

// })