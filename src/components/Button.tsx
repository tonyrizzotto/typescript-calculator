import React from 'react';
import '../styles/Button.css';
import { ButtonProps } from '../models/button.model';

const Button = ({ className, value, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
