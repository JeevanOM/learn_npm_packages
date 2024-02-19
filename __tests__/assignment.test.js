import assignment from '../src/utils/assignment';

test('assignment test', () => {
  const params = { a: 4, b: 2 };
  const zeroParam = { a: 4, b: 0 };
  const stringParam = { a: 4, b: 'helo' };
  expect(assignment(params, 'plus').value).toBe(6);
  expect(assignment(params, 'minus').value).toBe(2);
  expect(assignment(params, 'multiply').value).toBe(8);
  expect(assignment(params, 'divide').value).toBe(2);
  expect(assignment(params, 'expo').value).toBe(16);
  expect(assignment(params, 'root').value).toBe('Invalid operation');
  expect(assignment(zeroParam, 'divide').value).toBe('Cannot divide by 0');
  expect(assignment(stringParam, 'divide').value).toBe('Please pass numbers to operate');
});
