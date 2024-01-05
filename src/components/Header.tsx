import React from 'react';
import circle from '../assets/img/circle.png';

const Header: React.FC = () => {
  const headerStyle = {
    fontSize: '1.6em',
  };

  return (
    <header 
      style={headerStyle}
      className="flex items-center justify-center space-x-[50%] mx-auto fixed top-5 left-0 w-full"
    >
      <h1>Petter Dalhaug</h1>
      <img src={circle} alt="circle" className="w-8"></img>
    </header>
  );
};

export default Header;
