import React from 'react';
import backgroundImage from '../assets/img/student_guide_page/student_guide_background.png';
import demo1 from '../assets/img/student_guide_page/demo1.gif';
import demo2 from '../assets/img/student_guide_page/demo2.gif';
import PageLayout from '../components/PageLayout';
import ProjectDescription from '../components/ProjectDescription'; 



const StudentGuidePage: React.FC = () => {
  const projectDescriptions = [
    {
      imageUrl: [demo1],
      text: 'Enkel html, css og javascript nettside i faget Webteknologi. Faget var gruppeprosjekt der noen av gruppemedlemmene designet nettsiden i Figma først. Jeg merket at det var mye lettere å lage en nettside som var designet på forhånd i Figma',
      isImageLeft: true,
    },
    {
      imageUrl: [demo2],
      text: '',
      isImageLeft: false,
    },
  ];

  return (
    <div>
      <PageLayout image={backgroundImage} headerText="Student Guide" />
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

export default StudentGuidePage;
