import React from 'react';
import profile from '../assets/img/profile.jpg';
import ProjectCarousel from '../components/ProjectCarousel';



const HomePage: React.FC = () => {
  

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-1/2 bg-white">
          <div className="flex justify-between">
            <div> {/* Container for h1 and additional text */}
              <h1 className="text-black text-3xl">Om meg</h1>
              <p className="text-black text-xl">Hei, jeg heter Petter, og er en ingeniørstudent på Norges teknisk-naturvitenskapelige universitet...</p>
            </div>
            <img src={profile} className="h-72 w-72 rounded-3xl" />
          </div>
        </div>
        <ProjectCarousel></ProjectCarousel>
      </div>
    </>
  );
};

export default HomePage;
