import React from "react";

const Section = ({ category, images }) => {
  return (
    <div className="container">
      <p className="title">{category}</p>
      <div className="movies-list">
        {/* On boucle sur images sur les pics */}
        {images.map((pics, index) => {
          // On retourne les pics vers le props images
          return <img key={index} src={pics} alt="movies" />;
        })}
      </div>
    </div>
  );
};

export default Section;
