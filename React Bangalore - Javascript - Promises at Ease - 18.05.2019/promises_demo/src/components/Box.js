import React from "react";
import './Box.css';

const Box = ({ state, name }) => {
  return <div className={`box ${state}`}>{name} - {state}</div>;
};

export default Box;
