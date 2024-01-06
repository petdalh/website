import React, { useState, useEffect } from 'react';
import profile from '../assets/img/profile.jpg';
// @ts-ignore
import ProjectCarousel from '../components/ProjectCarousel';
import { v4 as uuidv4 } from "uuid";
import './HomePage.css'; 





const HomePage: React.FC = () => {
  const fullText = 'Hei, jeg heter Petter, og er en ingeniørstudent på Norges teknisk-naturvitenskapelige universitet. Jeg går spesialiseringen IKT og Marin hvor man fokuserer på kombinasjonen av IKT fag og marin teknologi fag. Jeg har mest fokus på datafag innenfor AI, og er interessert i å jobbe med implementasjon av AI og hvordan man kan bruke dette for å løse praktiske oppgaver'; // Full text to display
  const [displayedText, setDisplayedText] = useState('');
  const typingSpeed = 20; // Milliseconds per character

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-1/2 bg-white">
          <div className="flex justify-between mt-10">
            <div className="mr-10">
              <h1 className="text-black text-3xl mb-4">Om meg</h1>
              <p className="text-black text-xl">
                {displayedText}
                <span className="cursor"></span> {/* Cursor Element */}
              </p>
            </div>
            <img src={profile} className="h-72 w-62 rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl mb-20">Mine prosjekter</h1>
        <div className="h-5"></div>
        <ProjectCarousel></ProjectCarousel>
      </div>

    </>
  );
};

export default HomePage;

