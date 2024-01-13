import React from 'react';
import backgroundImage from '../assets/img/ml_page/ML-background.png';
import preprocessingImage from '../assets/img/ml_page/preprocessing2.png';
import weatherImage from '../assets/img/ml_page/weather.png';
import PageLayout from '../components/PageLayout';
import ProjectDescription from '../components/ProjectDescription'; 



const MachineLearningPage: React.FC = () => {
  const projectDescriptions = [
    {
      imageUrl: [preprocessingImage, weatherImage],
      text: 'I dette prosjektet skulle vi predikere energi produksjon var solcellepanel fra 3 ukjente lokasjoner. Dette var en oppgave i faget maskinlæring på NTNU, som hadde en kaggle konkurranse som vurderinsform, og man ble vurdert baser på scoren i konkurransen. I dette prosjektet fikk vi erfart at får å løse noen oppgaver, så må man prøve seg frem mye. Vi hadde 95 submissions, og havnet på 15. plass av 167 lag. ',
      isImageLeft: true,
    },
    {
      imageUrl: [weatherImage],
      text: 'Modellen som ga oss den beste scoren var en ensamble modell med CatBoost, XGBoost og Autogluon. Vi prøvde ut veldig mange engineered features, man kan se et lite utdrag i bilde over av ulike scripts vi brukte for å lage features utover de eksisterende. Vi forsøkte å få modellene til å kompensere for hverandres feil ved å kombinere dem på en måte som gjør at gjennomsnittsfeilen blir så nær 0 som mulig, og den gjennomsnittlige absolutte feilen blir så lav som mulig for å minimere variansen. For å gjøre dette, prøvde vi å minimere korrelasjonen mellom modellene våre samtidig som vi økte korrelasjonen med målet, og stable disse for å få gjennomsnittsfeilen nær 0. ',
      isImageLeft: false,
    },
  ];

  return (
    <div>
      <PageLayout image={backgroundImage} headerText="Machine Learning" />
      <div className="py-16"> {/* Increased vertical spacing between project descriptions */}
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

export default MachineLearningPage;
