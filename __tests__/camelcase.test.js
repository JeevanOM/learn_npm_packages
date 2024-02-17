import createCamelCase from '../src/utils/camelcase';

test('camel case', () => {
  expect(createCamelCase('jagat jeevan sahoo')).toEqual('jagatJeevanSahoo');
});
