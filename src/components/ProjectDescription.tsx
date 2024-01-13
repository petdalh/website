import React, { useEffect, useRef, useState } from 'react';
import "./ProjectDescription.css"

interface ProjectDescriptionProps {
    imageUrls: string[];
    text: string;
    isImageLeft: boolean;
  }
  

  const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ imageUrls, text, isImageLeft }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const containerClasses = isImageLeft ? "flex-row" : "flex-row-reverse";

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };
      
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    };
      
    const onImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const element = e.currentTarget; // Use currentTarget to refer to the element the event handler is attached to
        const { left, width } = element.getBoundingClientRect();
        const x = e.clientX - left;
        if (x < width / 2) {
          prevImage();
        } else {
          nextImage();
        }
      };

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            { threshold: 0.5 }
        );
    
        if (ref.current) {
            observer.observe(ref.current);
        }
    
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);
    

    return (
        <div ref={ref} className={`flex ${containerClasses} items-center half-screen-height justify-center fade-in ${isVisible ? 'fade-in-visible' : ''}`}>
            <div className="w-3/5 flex justify-center px-4"> {/* Adjusted width */}
                {imageUrls.length > 1 && (
                    <div>
                        <button onClick={prevImage}></button>
                        <button onClick={nextImage}></button>
                    </div>
                )}
                <img 
                    src={imageUrls[currentImageIndex]} 
                    alt="Project" 
                    className="w-4/5 h-auto rounded-lg" 
                    onClick={onImageClick} 
                />
            </div>
            <div className="w-2/5 flex justify-center" style={{ maxWidth: '40%' }}> {/* Adjusted width and always center aligned */}
                <p className="px-10 text-xl text-left w-full">{text}</p> {/* Center aligned text */}
            </div>
        </div>
    );
    


};

export default ProjectDescription;

