const { expect } = require('chai');

import Exterminator from '../lib/Exterminator.js';
import BulletPieces from '../lib/BulletPieces.js';

describe('Exterminator', () => {
  let exterminator;

  beforeEach(() => exterminator = new Exterminator(0, 0, 0, 0, 0));

  it('should exist', () => expect(exterminator).to.exist);

  it('should have a radius', () => {
    expect(exterminator.radius).to.equal(20);
  });

  it('should start with an empty bullets array', () => {
    expect(exterminator.bulletsArray).to.deep.equal([]);
  });

  it('should have a move function', () => {

    exterminator.move();
    expect('left').to.equal('left');
    expect('right').to.equal('right');
    expect('up').to.equal('up');
    expect('down').to.equal('down');
    expect('space').to.equal('space');

  })

  it('should have a velocity', () => {
    expect(exterminator.dx).to.equal(0);
  })

  it('should populate bullets', () => {

    exterminator.populateBullets();
    expect(exterminator.bulletsArray[0].radius).to.equal(5)
  })

  it('should shoot bullets', () => {
    exterminator.populateBullets();
    exterminator.moveBullets();

    expect(exterminator.bulletsArray[0].y).to.equal(-13);
  })
})