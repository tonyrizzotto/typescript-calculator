import React from 'react';
import '../styles/ButtonBox.css';

interface ButtonBoxProps extends React.HTMLProps<JSX.Element> {
  children: any;
}

const ButtonBox = ({ children }: ButtonBoxProps) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;
