import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'react-spring';

const ProjectCarousel = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig, setAnimationConfig] = useState(config.gentle);

  const slides = [
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/801/?random" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => setGoToSlide(index) };
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
  
    if (type === 'checkbox') {
      if (name === 'showNavigation') {
        setShowNavigation(checked);
      }
    } else if (type === 'number') {
      const numericValue = parseInt(value, 10) || 0;
      if (name === 'goToSlide') {
        setGoToSlide(numericValue);
      } else if (name === 'offsetRadius') {
        setOffsetRadius(numericValue);
      }
    }
  };

  return (
    <div className="w-1/2 h-2/5 mx-auto mt-10"> 
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={animationConfig}
      />
    </div>
  );
};

export default ProjectCarousel;
