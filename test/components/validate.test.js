/* eslint-env jest */
const validate = require('../../src/validate.js');
const {
  linkThen, linkValidate, linkFail, linkValida,
} = require('../carpetaMock/data.js');

describe('Validate', () => {
  it('should be a function', () => {
    expect(typeof validate.validate).toBe('function');
  });
  test('Should be OK', () => validate.validate(linkThen).then((res) => {
    expect(res).toEqual(linkValidate);
  }));
  test('Should be FAIL', () => validate.validate(linkFail).then((res) => {
    expect(res).toEqual(linkValida);
  }));
  test('Error', () => validate.validate([]).catch((err) => {
    expect(typeof (err)).toEqual('object');
  }));
});
