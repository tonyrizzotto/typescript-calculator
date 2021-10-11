export function numClickHander(num: any) {
  return Number(num);
}

/**
 * @description Processes all mathmatical functions as expected while handing type manipulations.
 * @returns a calculated number converted to a string
 */
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

/**
 * @description computes the percentage of a number and returns the value based on the previous number.
 * @returns a number converted to a string
 */
export function percentageHandler(num1: number, num2: string): string {
  let result: string = '';

  const convertedNum2 = Number(num2);
  const percentageNum = convertedNum2 / Math.pow(10, 2);
  // num1 is the first number / num2 the percentage
  result = (num1 * percentageNum).toString();

  return result;
}

/**
 *
 * @description Adds a '.' into the number.
 * @returns a string with the . appended to it
 */
export function decimalHandler(num: string): string {
  if (num.includes('.')) {
    return num;
  } else {
    num += '.';
    return num;
  }
}

// An array of characters for the calculator buttons
export const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];
