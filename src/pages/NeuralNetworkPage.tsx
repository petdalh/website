import React from 'react';
import backgroundImage from '../assets/img/Neural_Network_page/neural_network_background.webp'
import demo1 from '../assets/img/Neural_Network_page/demo1.png'
import demo2 from '../assets/img/Neural_Network_page/demo2.png'
import PageLayout from '../components/PageLayout';
import ProjectDescription from '../components/ProjectDescription'; 

const NeuralNetworkPage: React.FC = () => {
    const projectDescriptions = [
        {
        imageUrl: [demo1],
        text: 'I dette prosjektet har jeg utviklet et rammeverk for nevralnettverk fra grunnen av ved bruk av Python og NumPy, med det formål å klassifisere syntetiske bilder av geometriske figurer som rektangler, trekanter, sirkler og kors. Prosjektet demonstrerer hvordan en kan bygge opp et fleksibelt og modulært system for maskinlæring, som tillater tilpasning og utvidelse etter behov.'
        + ' Bildet til venstre viser et utvalg av prediksjonene til nevralnettverket, og hvordan det har prøvd å klassifisere de ulike geometriske figurene med OK resultat. Som man ser sliter denne spesifikke konfigurasjonen med å skille mellom sirkler og rektangler',
        isImageLeft: true,
        },
        {
            imageUrl: [demo2],
            text: 'Jeg har testet ut litt ulike konfigurasjoner og sammenlignet resultatene. En del av vurderingen i prosjektet gikk ut på å se på hvordan ulike konfigurasjoner av nevralnettverket påvirker resultatene, og det var fokus på å ha en robust model.'
            + ' Bildet til venste viser aktiveringen av neuronene og hvordan det utvikler seg i løpet av treningsperioden. Denne visualiseringen funker ikke bra for store nettverk, så dette er eksempel på et lite/simpelt nettverk.',
            isImageLeft: false,
        }
    ]

    return (
        <div>
          <PageLayout image={backgroundImage} headerText="Neural Network" />
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

}

export default NeuralNetworkPage;