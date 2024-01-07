import React from 'react';
import backgroundImage from '../assets/img/ML-background.png'; // Replace with the path to your background image
import PageLayout from '../components/PageLayout'; // Update the import path as necessary

const MachineLearningPage: React.FC = () => {
  return (
    <PageLayout
      image={backgroundImage}// Replace with your image URL
      headerText="Machine Learning"
    />
  );
};

export default MachineLearningPage;