import React from 'react';

interface FullPageBackgroundProps {
  image: string;
  headerText: string;
}

const PageLayout: React.FC<FullPageBackgroundProps> = ({ image, headerText }) => {
  return (
    <div className="h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="h-screen w-1/3 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-white text-3xl">{headerText}</h1>
      </div>
    </div>
  );
};

export default PageLayout;
