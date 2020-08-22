import React from "react";

const Switcher = ({ onChange, checked }) => {
  return (
    <div className="Filter">
      <span>Todos</span>
      <label className="switch">
        <input type="checkbox" onChange={onChange} value={checked} />
        <span className="slider round"></span>
      </label>
      <span>Animados</span>
    </div>
  );
};

export default Switcher;
