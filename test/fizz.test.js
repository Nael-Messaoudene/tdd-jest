import fizzbuzz from "../src/fizzbuzz";

describe ('Fizzbuzz App', () => {
  test('number is divisible by 3', () => {
    expect(fizzbuzz(6)).toBe('fizz');
  });
  test('number is divisible by 5', () => {
    expect(fizzbuzz(10)).toBe('buzz');
  });
  test('number is divisible by 3 and 5', () => {
    expect(fizzbuzz(30)).toBe('fizzbuzz');
  });
  test('number is not divisible by 3 and 5', () => {
    expect(fizzbuzz(1)).toBe(1);
  });
});