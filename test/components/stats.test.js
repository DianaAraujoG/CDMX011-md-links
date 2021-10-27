/* eslint-env jest */
const stast = require('../../src/stats.js');
const { mdlinks, mdlinksVa } = require('../carpetaMock/data.js');

describe('Stats', () => {
  it('should be a function', () => {
    expect(typeof stast.stats).toBe('function');
  });
  it('should be return empty array.', () => {
    const statsE = stast.stats(mdlinks);
    expect(statsE).toEqual([{ total: 3, unique: 3, broken: 0 }]);
  });
  it('should be return empty array.', () => {
    const statsE = stast.stats(mdlinksVa, true);
    expect(statsE).toEqual([{ total: 4, unique: 3, broken: 1 }]);
  });
});
