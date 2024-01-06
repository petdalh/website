import React from 'react';
import profile from '../assets/img/profile.jpg';
// @ts-ignore
import ProjectCarousel from '../components/ProjectCarousel';
import { v4 as uuidv4 } from "uuid";




const HomePage: React.FC = () => {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-1/2 bg-white">
          <div className="flex justify-between mt-10">
            <div className="mr-10"> 
              <h1 className="text-black text-3xl mb-4">Om meg</h1>
              <p className="text-black text-xl">Hei, jeg heter Petter, og er en ingeniørstudent på Norges teknisk-naturvitenskapelige universitet. Jeg går spesialiseringen IKT og Marin hvor man fokuserer på kombinasjonen av IKT fag og marin teknologi fag. Jeg har mest fokus på datafag innenfor AI, og er interessert i å jobbe med implementasjon av AI og hvordan man kan bruke dette for å løse praktiske oppgaver</p>
            </div>
            <img src={profile} className="h-72 w-72 rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <ProjectCarousel></ProjectCarousel>
      </div>
    </>
  );
};

export default HomePage;

