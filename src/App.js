import React from "react";
import "./App.css";

// Import des components Section, Logo et Footer
import Section from "./components/Section";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

// Import du fichier Json un objet data
import data from "./assets/movies.json";

function App() {
  // console.log(data);
  return (
    <div className="container">
      {/* Import du components Logo */}
      <Logo />

      {/* On boucle sur la Section pour passer les props category et images
      à la Section ainsi que pour mutliplier les Sections */}
      {/* On boucle grâce à map() sur data */}
      {data.map((item, i) => {
        return (
          <Section key={i} category={item.category} images={item.images} />
          // category et images sont accessibles pour la Section
        );
      })}
      <Footer />
    </div>
  );
}
export default App;
