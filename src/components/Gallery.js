import React from "react";
import ArtCard from "./ArtCard";

const Gallery = ({ arts }) => {
  return (
    <main>
      <div className="GalleryContainer">
        {arts.map((art) => {
          return <ArtCard {...art} key={art.title} />;
        })}
      </div>
    </main>
  );
};

export default Gallery;
