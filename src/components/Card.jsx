import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useNavigate } from 'react-router-dom';


function Card({ imagen, header, text, technologies, link }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.1)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{header}</h2>
      <p>{text}</p>
      {technologies && (
        <div className={Styles.technologies}>
          {technologies.map((tech) => (
            <span key={tech} className={Styles.tech}>{tech}</span>
          ))}
        </div>
      )}
      <button 
        onClick={() => navigate(link)} // 'link' should be your route, e.g., '/Fern'
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
      >
        Learn More
      </button>
    </animated.div>
  );
}

export default Card;
