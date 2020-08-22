import React, { useState } from "react";
import "./assets/fonts/style.css";
import { arts } from "./constants";

import Header from "./components/Header";
import DarkMode from "./components/DarkMode";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Switcher from "./components/Switcher";

function App() {
  const [filtered, setFiltered] = useState(false);

  const toggleFiltered = () => setFiltered(!filtered);

  const galleryData = filtered
    ? arts.filter((art) => art.tags.includes("animado"))
    : arts;

  return (
    <div className="App">
      <Header />
      <Switcher checked={filtered} onChange={toggleFiltered} />
      <Gallery arts={galleryData} />
      <Footer />
      <DarkMode />
    </div>
  );
}

export default App;
