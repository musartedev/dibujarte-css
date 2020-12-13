import React, { useState, useEffect } from "react";
import "./assets/fonts/style.css";
import { arts } from "./constants";

import Header from "./components/Header";
import DarkMode from "./components/DarkMode";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Filter from "./components/Filter";

function App() {
  const [galleryData, setGalleryData] = useState([]);

  const filterArts = (type) => {
    setGalleryData(arts.filter((art) => type === 'todos' ? art : art.tags.includes(type)))
  }

  useEffect(() => filterArts('todos'), []);

  return (
    <div className="App">
      <Header />
      <Filter onChange={filterArts} />
      <Gallery arts={galleryData} />
      <Footer />
      <DarkMode />
    </div>
  );
}

export default App;
