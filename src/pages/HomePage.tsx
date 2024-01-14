import React, { useState, useEffect } from 'react';
import profile from '../assets/img/profile.jpg';
// @ts-ignore
import ProjectCarousel from '../components/ProjectCarousel';
import './HomePage.css'; 





const HomePage: React.FC = () => {
  const fullText = 'Hei, jeg heter Petter, og er en ingeniørstudent på Norges teknisk-naturvitenskapelige universitet. Jeg går spesialiseringen IKT og Marin hvor man fokuserer på kombinasjonen av IKT fag og marin teknologi fag. Jeg har mest fokus på datafag innenfor AI, og er interessert i å jobbe med implementasjon av AI og hvordan man kan bruke det til å løse praktiske oppgaver.'; 
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 30;

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + fullText.charAt(index));
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [index, displayedText]);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-1/2 bg-white">
          <div className="flex justify-between mt-10">
            <div className="mr-10">
              <h1 className="text-black text-3xl mb-4 font-bold">Om meg</h1>
              <p className="text-black text-xl">
                {displayedText}
                <span className="cursor"></span> {/* Cursor Element */}
              </p>
            </div>
            <img src={profile} className="h-72 w-62 rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center bg-black">
        <h1 className="text-center text-3xl mb-20 font-bold text-white">Mine prosjekter</h1>
        <div className="h-20"></div>
        <ProjectCarousel></ProjectCarousel>
      </div>
      <div className="h-20 bg-black"></div>
    </>
  );
};

export default HomePage;

