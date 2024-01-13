import React from 'react';
import backgroundImage from '../assets/img/PageTurner_page/PageTurner_background.png';
import demo1 from '../assets/img/PageTurner_page/demo1.png';
import demo2 from '../assets/img/PageTurner_page/demo2.png';
import demo3 from '../assets/img/PageTurner_page/demo_white_mode.png';
import PageLayout from '../components/PageLayout';
import ProjectDescription from '../components/ProjectDescription'; 



const PageTurnerPage: React.FC = () => {
  const projectDescriptions = [
    {
      imageUrl: [demo3, demo1],
      text: 'Page-Turner var et gruppeprosjekt i faget Programvareutvikling på NTNU. Oppgaven vår var å lage en programvare, der man kunne rangere og legge inn reviews på bøker à la IMDB. Vi brukte MERN-stakken (MongoDB, Express, React, NodeJS), jeg jobbe hovedsakelig med API og frontend relaterte oppgaver. Dette gruppeprosjektet var første gang jeg brukte React noe som jeg har fortsatt å bruke i jobbsammenheng og fritidsprosjekter (denne nettsiden f.eks).',
      isImageLeft: true,
    },
    {
      imageUrl: [demo2],
      text: 'I PageTurner kunne man lage en bruker for å logge inn og bruke programmet. Man kunne legge inn bøker med en beskrivelse av boken. Brukere kunne da rangere bøkene og skrive reviews. Bøkene ble rangert og man hadde en "top 10 books" på hjem siden. Man hadde også dark og light mode som man se forskjellen på i de ulike bildene',
      isImageLeft: false,
    },
  ];

  return (
    <div>
      <PageLayout image={backgroundImage} headerText="Page Turner" />
      <div className="py-16">
        {projectDescriptions.map((project, index) => (
          <ProjectDescription
            key={index}
            imageUrls={project.imageUrl}
            text={project.text}
            isImageLeft={project.isImageLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default PageTurnerPage;
