import "./App.css";
import { v4 as uuidv4 } from "uuid";
// @ts-ignore
import Card from "./Card";
// @ts-ignore
import Carousel from "./Carousel";
import addwize_image from "../assets/img/addwize.png"
import Page_Turner from "../assets/img/PageTurner.png"
import machine_learning from "../assets/img/machine_learning.png"
import student_guide from "../assets/img/student_guide.png"
import gpt_quiz from "../assets/img/GPT-quiz.png"

function ProjectCarousel() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen= {addwize_image}
          header="Fern"
          text="Gjennom jobben min i Addwize så bidro jeg til utviklingen av PLM-programvare, med fokus på backend-arbeid og integrering av Fusion 360 ved bruk av Prisma, TypeScript, Express og Fusion 360 Python API. Dette prosjektet har gitt meg mulighet til å sammerbeide med utviklere med flere års arbeidserfaring, noe som har vært veldig givende"
          technologies={["Prisma", "TypeScript", "React", "Python", "Node", "Fusion 360 API"]}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen={Page_Turner}
          header="Page Turner"
          text="Gruppeprosjekt i faget programvareutvikling (TDT4140). Fikk som oppgave å lage en imdb.com ratingside for bøker. Vi brukte MERN-stacken for å utvikle programvaren. Her fikk jeg mye erfaring innenfor git, og jeg fikk erfare det å jobbe på et gruppeprosjekt med mennesker jeg ikke kjente fra før. Det var mye fokus på agile metodikk."
          technologies={["MongoDB", "Javascript", "Express", "Node", "React"]}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen={machine_learning}
          header="Prediksjon av energi produksjon"
          text="Inneholder arbeidet for TDT4173 Maskinlæring-kurset ved NTNU Trondheim. Prosjektet er en del av en konkurranse fokusert på å forutsi solenergiproduksjon. Målet er å forutsi timevis solenergiproduksjon for neste dag.
          Datasettet som ble brukt i dette prosjektet ble levert av Aneo. Vårt lag kom på 16. plass av over 100 lag i konkurransen."
          technologies={["Python", "Scikit-learn", "Pandas", "Numpy", "Autogluon"]}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen={student_guide}
          header="Student guide"
          text="prosjektet for IT2805 - Webteknologi. Prosjektet er en simpel nettside designet ved bruk av sigma av noen gruppemedlemmer, mitt fokus var å implementere design ved bruk av html, css og javascript. Vårt prosjekt er en guide designet for studenter, som inneholder informasjon om barer og klubber, treningssentre, kafeer, turstier, og andre studentrelevante aktiviteter i Trondheim."
          technologies={["HTML", "CSS", "Javascript"]}
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card 
          imagen={gpt_quiz}
          header="GPT quiz"
          text="Dynamisk quizapplikasjon som benytter GPT API for sanntidsvurdering av svar. Designet for en interaktiv og brukervennlig opplevelse, appen krever en GPT API-nøkkel."
          technologies={["Javascript", "React", "Node", "GPT-API"]}
        />
      )
    },
  ];
  return (
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={3}
        showArrows={false}
      />
  );
}

export default ProjectCarousel;
