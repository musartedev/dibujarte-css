import React from 'react';

function Filter({ onChange }) {
  const changeCategoryArt = (e) => {
    onChange(e.target.value);
  }

  return (
    <div className="filter-arts">
      <select onChange={changeCategoryArt} name="type-arts" id="type-arts">
        <option value="todos">Todos</option>
        <option value="cartoon">Cartoon</option>
        <option value="ilustración">Ilustración</option>
        <option value="realismo">Realismo</option>
        <option value="animado">Animado</option>
        <option value="pixel-art">Pixel Art</option>
      </select>
    </div>
  );
}

export default Filter;
