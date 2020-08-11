import React from 'react';
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
            return <ArtCard {...art} key={art.title} />;
          })}
        </div>
      </main>
      <div className='Footer'>
        Hecho con{' '}
        <span role='img' aria-label='purple heart'>
          💜
        </span>{' '}
        por{' '}
        <a
          href='https://github.com/musartedev'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mariangélica Useche
        </a>
      </div>
    </div>
  );
}

export default App;
