

import React from 'react';

function Filter({ onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} name="type-arts" className="filter-arts" id="type-arts">
      <option value="todos">Todos</option>
      <option value="cartoon">Cartoon</option>
      <option value="ilustración">Ilustración</option>
      <option value="realismo">Realismo</option>
      <option value="animado">Animado</option>
      <option value="pixel-art">Pixel Art</option>
    </select>
  );
}

export default Filter;
