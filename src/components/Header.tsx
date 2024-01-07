import React from 'react';
import { Link } from 'react-router-dom';
import linkedInLogo from '../assets/img/social/linkedin.png';
import githubLogo from '../assets/img/social/github.png';

const Header: React.FC = () => {
  return (
    <header className="z-10 flex justify-center items-center fixed top-0 left-0 w-full h-12 bg-white">
      <div className="flex justify-between items-center w-3/4">
        <Link to="/">
          <h1 className="text-3xl font-bold">Petter Dalhaug</h1>
        </Link>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com/in/petter-dalhaug-001311270/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt="LinkedIn" className="w-10" />
          </a>
          <a href="https://github.com/petdalh" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
