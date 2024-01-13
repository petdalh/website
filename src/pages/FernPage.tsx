import React from 'react';
import backgroundImage from '../assets/img/Fern_page/Fern_background.png';
import demo1 from '../assets/img/Fern_page/sync_BOM.png';
import demo2 from '../assets/img/Fern_page/demo1.gif';
import PageLayout from '../components/PageLayout';
import ProjectDescription from '../components/ProjectDescription'; 



const FernPage: React.FC = () => {
  const projectDescriptions = [
    {
      imageUrl: [demo1],
      text: 'Fern var programvaren jeg jobbet med sommeren 2023. Fern var en PLM-programvare i oppstartsfasen, og min jobb gikk ut på synkronisere Fern med Fusion 360. Bildet til venstre viser menyen over de ulike operasjonene man kunne gjennomføre inne i Fusion 360. Funksjonalitetene jeg implementerte var å knytte opp autodesk brukeren med Fern og det å synkronisere BOM (Bill of Materials) med Fern. Utfordringene med uvikling av disse funksjonalitene lå mye i bruker-logikken og håndtering av BOM. BOM er en liste over alle komponentene som er nødvendig for å bygge et produkt. ',
      isImageLeft: true,
    },
    {
      imageUrl: [demo2],
      text: 'Det var viktig at BOM ble synkronisert riktig. Hvis brukeren gjorde en liten endring på et produkt, så skulle ikke hele BOM bli synkronisert på nytt. Det var også viktig at BOM ble synkronisert raskt, siden det kunne være mange komponenter i BOM. Jeg viser ikke til bilder eller videoer av Fern, siden det er et proprietært program, men til høyre kan man se hvordan det så ut fra Fusion 360.'
      + ' Det som er morsomt med denne oppgaven er at synkronisering av BOMer ble brukt som et eksempel på bruken av algoritmer i pensumboka i Algoritmer og Datastrukturer på NTNU: "Given a mechanical design in terms of a library of parts, where each part may include instances of other parts, list the parts in order so that each part appears before any part that uses it." Fra: "Introduction to Algorithms, Fourth Edition" by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein.',
      isImageLeft: false,
    },
  ];

  return (
    <div>
      <PageLayout image={backgroundImage} headerText="Fern" />
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

export default FernPage;