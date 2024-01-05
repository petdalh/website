import React from 'react';
import profile from '../assets/img/profile.jpg';

const HomePage: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-2/3 h-3/5 bg-white flex items-top justify-center">
        <div className="flex justify-between w-full">
          <div> {/* Container for h1 and additional text */}
            <h1 className="text-black text-3xl">Om meg</h1> {/* Increased text size */}
            <p className="text-black text-xl">Hei, jeg heter Petter, og er en ingeniørstudent på Norges teknisk-naturvitenskapelige universitet.
            Jeg går Ingeniørvitenskap og IKT med en spesialisering innenfor Marin og IKT. Jeg er interessert i bruk av AI til å løse praktiske 
            oppgaver.</p> {/* Increased text size */}
          </div>
          <img src={profile} className="h-72 w-72 rounded-3xl" /> {/* Increased image size */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
