/* eslint-env jest */
const files = require('../../src/searchFiles.js');
const { fileMD } = require('../carpetaMock/data.js');

describe('Search Files', () => {
  it('should be a function', () => {
    expect(typeof files.searchFiles).toBe('function');
  });
  it('should be return empty array.', () => {
    const routeNoMD = 'C:/Cursos/GitHub/CDMX011-md-links/test/components';
    const funcionNo = files.searchFiles(routeNoMD);
    expect(funcionNo).toEqual([]);
  });
  it('should be return the route of md files of Directory.', () => {
    const routeDirectory = 'C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock';
    const funcionFile = files.searchFiles(routeDirectory);
    expect(funcionFile).toContain('C:\\Cursos\\GitHub\\CDMX011-md-links\\test\\carpetaMock\\mock.md');
  });
  it('should be return the route of md files.', () => {
    const routeFile = 'C:/Cursos/GitHub/CDMX011-md-links/test/carpetaMock/emptyMock.md';
    const funcionF = files.searchFiles(routeFile);
    expect(funcionF).toEqual(fileMD);
  });
});
