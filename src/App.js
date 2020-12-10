import React, { useState, useEffect } from "react";
import "./assets/fonts/style.css";
import { arts } from "./constants";

import Header from "./components/Header";
import DarkMode from "./components/DarkMode";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Switcher from "./components/Switcher";
import Filter from "./components/Filter";

function App() {
  const [filtered, setFiltered] = useState(false);
  const [galleryData, setGalleryData] = useState([]);

  const toggleFiltered = () => setFiltered(!filtered);

  const filterArts = (type) => {
    setGalleryData(arts.filter((art) => type === 'todos' ? art : art.tags.includes(type)))
  }

  useEffect(() => {
    setGalleryData(filtered ? arts.filter((art) => art.tags.includes("animado")) : arts);
  }, [filtered]);


  return (
    <div className="App">
      <Header />
      <Switcher checked={filtered} onChange={toggleFiltered} />
      <Filter onChange={filterArts} />
      <Gallery arts={galleryData} />
      <Footer />
      <DarkMode />
    </div>
  );
}

export default App;
