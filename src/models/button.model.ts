import React from 'react';

export interface ButtonProps extends React.HTMLProps<JSX.Element> {
  key: any;
  className: string;
  value: any;
  onClick: (e: React.BaseSyntheticEvent) => any;
}
