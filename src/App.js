import React from "react";
import "./assets/fonts/style.css";
import { arts } from "./constants";

import Header from "./components/Header";
import DarkMode from "./components/DarkMode";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery arts={arts} />
      <Footer />
      <DarkMode />
    </div>
  );
}

export default App;
