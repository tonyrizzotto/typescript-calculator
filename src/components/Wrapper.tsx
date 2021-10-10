import React from 'react';
import '../styles/Wrapper.css';

const Wrapper: React.FC = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
