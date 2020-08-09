import React from 'react';
import './App.css';
import './assets/fonts/style.css';
import { arts } from './constants';

import ArtCard from './components/ArtCard';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <div className='GalleryContainer'>
          {arts.map((art) => {
            return <ArtCard {...art} />;
          })}
        </div>
      </main>
      <div className='Footer'>
        Hecho con 💜 por <a href=''>Mariangélica Useche</a>
      </div>
    </div>
  );
}

export default App;
