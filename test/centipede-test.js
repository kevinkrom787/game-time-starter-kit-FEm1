const { expect } = require('chai');

import Centipede from '../lib/Centipede.js';

describe('Centipede', () => {
  let centipede;

  beforeEach(() => centipede = new Centipede(10, 15, 30, 5, 1));

  it('should exist', () => expect(centipede).to.exist);

  it('should have a height and width', () => {
    expect(centipede.radius).to.equal(30);
  });

  it('should have an x value', () => {
    expect(centipede.x).to.equal(10);
  });

  it('should have a y value', () => {
    expect(centipede.y).to.equal(15);
  })

  it('should have a x velocity', () => {
    expect(centipede.dx).to.equal(5);
  });

  it('should have an empty array', () => {
    expect(centipede.centipedeArray).to.deep.equal([]);
  });

  it('should have a segment detection array of 0', () => {
    expect(centipede.segmentDetectionArray).to.equal(0);
  });

})