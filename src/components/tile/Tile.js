import React from "react";
import "./Tile.css";

export const Tile = ({ name, description }) => {
  const arr1 = Object.keys(description);
  const arr = arr1.map((key) => [key, description[key]]);

  return (
    <div className="tile-container">
      {name && (
        <p className="tile-title ">
          <span className="key">Name:</span>{" "}
          <span className="value">{name}</span>
        </p>
      )}

      {arr.map(([key, value]) => (
        <p className="title" key={value}>
          <span className="key">{key}:</span>{" "}
          <span className="value">{value}</span>
        </p>
      ))}
    </div>
  );
};
