export function numClickHander(num: any) {
  return Number(num);
}

export function equalsHandler(
  num1: number,
  num2: string,
  method: string
): string {
  let result: number = 0;

  // detect addition
  if (method === '+') {
    result = num1 + Number(num2);
  }

  // // detect subtraction
  if (method === '-') {
    result = num1 - Number(num2);
  }

  // // detect multiplication
  if (method === 'X') {
    result = num1 * Number(num2);
  }

  // // detect division
  if (method === '/') {
    result = num1 / Number(num2);
  }

  return result.toString();
}

// An array of characters for the calculator buttons
export const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];
