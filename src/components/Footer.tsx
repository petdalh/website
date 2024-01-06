import React from 'react';
import torusGif from '../assets/img/torus.gif';
import "./footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="mt-0 border-t border-black h-20 flex justify-between items-center">
      <div className="text-left ml-10">
        <p>Kontakt:</p>
        <p>Tlf: +47 908 09 730</p>
        <p>Email: petter.dalhaug00@outlook.com</p>
      </div>
      <div className="mr-10">
        <img src={torusGif} alt="Torus Animation" className="custom-width" />
      </div>
    </footer>
  );
};

export default Footer;
