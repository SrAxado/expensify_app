const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

test('sould be greeting Mike', () => {
  expect(generateGreeting('Mike')).toBe('Hello Mike');
});

test('sould greet no one', () => {
  expect(generateGreeting()).toBe('Hello Anonymous');
});