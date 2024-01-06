import React from 'react';
import circle from '../assets/img/circle.png';

const Header: React.FC = () => {
  return (
    <header 
      className="flex items-center justify-center space-x-[50%] mx-auto fixed top-0 left-0 w-full mb-12 mt-0 h-20 bg-white"
    >
      <h1 className="text-4xl mb-4">Petter Dalhaug</h1>
      <img src={circle} alt="circle" className="w-8"></img>
    </header>
  );
};

export default Header;