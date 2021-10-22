/* eslint-env jest */
const links = require('../../src/searchForLinks.js');
const { mdlinks } = require('../carpetaMock/data.js');

describe('Search links in MD files', () => {
  it('should be a function', () => {
    expect(typeof links.searchForLinks).toBe('function');
  });
  it('should be return empty array.', () => {
    const routeFile = [];
    const MDlinks = links.searchForLinks(routeFile);
    expect(MDlinks).toEqual([]);
  });
  it('should be return empty array.', () => {
    const routeFile = ['C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\emptyMock.md'];
    const MDlinks = links.searchForLinks(routeFile);
    expect(MDlinks).toEqual([]);
  });
  it('should be return empty array.', () => {
    const routeFile = ['C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md'];
    const MDlinks = links.searchForLinks(routeFile);
    expect(MDlinks).toEqual(mdlinks);
  });
});
