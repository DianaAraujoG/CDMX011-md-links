/* eslint-env jest */
const mdLinks = require('../../src/mdlinks.js');
const { mdlinks, mdlinksValidate } = require('../carpetaMock/data.js');

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.f).toBe('function');
  });
  test('Should be just links', () => mdLinks.f('C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock', 'justLinks').then((res) => {
    expect(res).toEqual(mdlinks);
  }));
});
describe('md2', () => {
  test('Should be validate', () => mdLinks.f('C:/Cursos/GitHub/CDMX011-md-links/Prueba', 'validate').then((res) => {
    expect(res).toEqual(mdlinksValidate);
  }));
});
