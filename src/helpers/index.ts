import React from 'react';

export function numClickHander(event: React.BaseSyntheticEvent, num: any) {
  event.preventDefault();

  return event.target.innerHTML;
}

export function methodHandler(method: string) {
  if (method === '+') {
  }
}

export const btnValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];
