import React from 'react';
import linkedInLogo from '../assets/img/linkedin.png'; // Path to LinkedIn logo
import githubLogo from '../assets/img/github.png'; // Path to GitHub logo

const Header: React.FC = () => {
  return (
    <header 
      className="flex items-center justify-center space-x-[50%] mx-auto fixed top-0 left-0 w-full mb-12 mt-0 h-20 bg-white"
    >
      <h1 className="text-4xl mb-4 font-bold">Petter Dalhaug</h1>
      <div className="flex space-x-4"> {/* Container for the logos */}
        <a href="https://www.linkedin.com/in/petter-dalhaug-001311270/" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="LinkedIn" className="w-10 mb-4" />
        </a>
        <a href="https://github.com/petdalh" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="w-10" />
        </a>
      </div>
    </header>
  );
};

export default Header;
