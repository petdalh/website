import React, { useState, useEffect } from 'react';
import circle from '../assets/img/circle.png';

const Header: React.FC = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setSticky(scrollTop >= 145); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle = {
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: '1.6em',
  };

  return (
    <header 
      style={headerStyle}

      className={`flex items-center justify-center space-x-[50%] mx-auto ${isSticky ? 'fixed top-5 left-0 w-full' : 'my-[10rem]'}`}
    >
      <h1>Petter Dalhaug</h1>
      <img src={circle} alt="circle" className="w-8"></img>
    </header>
  );
};

export default Header;
