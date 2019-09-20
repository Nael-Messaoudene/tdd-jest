import fizzbuzz from "../src/fizzbuzz";

test('if number is divisible by 3 to equal 0', () => {
  expect(fizzbuzz(3,30)).not.toBe(1);
});
