/* eslint-env jest */
const validate = require('../../src/validate.js');
const stats = require('../../src/stats.js');
const mdLinks = require('../../src/mdlinks.js');
const { mdlinks } = require('../carpetaMock/data.js');

describe('mdLinks', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.f).toBe('function');
  });
  test('Should be just links', () => mdLinks.f('C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock', 'justLinks').then((res) => {
    expect(res).toEqual(mdlinks);
  }));
  test('Have been called validate function in mdLink function ', () => {
    const mock = jest.fn();
    mock.mockImplementation(() => Promise.resolve());

    validate.validate = jest.fn().mockImplementation(() => Promise.resolve());
    mdLinks.f('C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock', 'validate');

    expect(validate.validate).toHaveBeenCalled();
  });
  test('Have been called validate (reject) function in mdLink function ', () => {
    const mock = jest.fn();
    mock.mockImplementation(() => Promise.resolve());

    validate.validate = jest.fn().mockImplementation(() => Promise.reject());
    mdLinks.f('C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock/empty', 'validate');

    expect(validate.validate).toHaveBeenCalled();
  });
  test('Have been called stats function in mdLink function ', () => {
    const mock = jest.fn();
    mock.mockImplementation(() => Promise.resolve());

    stats.stats = jest.fn().mockImplementation();
    mdLinks.f('C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock', 'stast');

    expect(stats.stats).toHaveBeenCalled();
  });
  test('Opcion fallida', () => mdLinks.f('C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock', 'other').catch((err) => {
    expect(typeof (err)).toEqual('object');
  }));
});
