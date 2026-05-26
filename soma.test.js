const soma = require('./soma');

test('deve somar dois números', () => {
  expect(soma(2, 3)).toBe(5);
});
