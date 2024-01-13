import React from 'react';
import backgroundImage from '../assets/img/gpt_quiz_page/GPT_background.png';
import demo1 from '../assets/img/gpt_quiz_page/demo1.gif';
import demo2 from '../assets/img/gpt_quiz_page/demo1.gif';
import weatherImage from '../assets/img/ml_page/weather.png';
import PageLayout from '../components/PageLayout';
import ProjectDescription from '../components/ProjectDescription'; 



const GPTQuizPage: React.FC = () => {
  const projectDescriptions = [
    {
      imageUrl: [demo1],
      text: 'Lagde dette programmet for å kunne øve til eksamen i ulike fag. Man har muligheten til å legge inn spørsmål med tilsvarende fasit, som gjør det lett å legge inn tidligere eksamenere. Man har menyer der man kan navigere rundt til ulike fag, og ulike temaer innenfor de fagene. ',
      isImageLeft: true,
    },
    {
      imageUrl: [demo2],
      text: 'GPT-API blir brukt til å sammenligne brukerens fag med fasiten gitt. Dette gir brukeren tilbakemelding på svaret raskt. All dataene er for tiden hardkodet, vil senere bruke en databaseløsning hvis jeg får tid.',
      isImageLeft: false,
    },
  ];

  return (
    <div>
      <PageLayout image={backgroundImage} headerText="GPT-quiz" />
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

export default GPTQuizPage;
