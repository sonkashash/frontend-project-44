import _ from 'lodash';

export const generateRandomNums = () => Math.ceil(Math.random() * 10 * Math.random() * 10);

export const getRandomPair = () => {
  const num1 = Math.ceil(Math.random() * 10 * Math.random() * 10);
  const num2 = Math.ceil(Math.random() * 100);
  return [num1, num2];
};

export const generateProgression = (min, max, step) => {
  const range = [];
  for (let i = min; i < max; i += step) {
    range.push(i);
  }
  return _.sample(range);
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const calculateExpression = (num1, num2, operator) => {
  const operand1 = Number(num1);
  const operand2 = Number(num2);

  switch (operator) {
    case '*':
      return operand1 * operand2;
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '/':
      return operand2 ? operand1 / operand2 : 'Division by 0 is prohibited';
    default:
      console.log(`Your operator ${operator} is not on the list.`);
  }
  return `Your operator ${operator} is not on the list.`;
};

// Find the greatest common divisor of given numbers
export const findGcd = (a, b) => {
  if (a === 0 || b === 0) return 0;
  let first = Math.abs(a);
  let second = Math.abs(b);
  if (first < second) {
    const variable = first;
    first = second;
    second = variable;
  }
  if (first % second === 0) {
    return second;
  }
  return findGcd(first - second, second);
};

export const isPrime = (num) => {
  const number = Number(num);

  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const checkProperty = (someFunc) => {
  const number = generateRandomNums();
  console.log(`Question: ${number}`);
  return someFunc(number) ? 'yes' : 'no';
};
