import React from "react";
import { Tile } from "../tile/Tile";
import "./TileList.css";

export const TileList = (props) => {
  // console.log("Props from TileList::", props);

  const contactDetail = props.data.map(({ name, ...contact }, index) => (
    <Tile name={name} description={{ ...contact }} key={index} />
  ));

  return (
    <div className="TileList-container">
      <div className="TileList-info">{contactDetail}</div>
    </div>
  );
};
