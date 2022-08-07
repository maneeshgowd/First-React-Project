import React from "react";
import style from "./card.module.css";

function Card(props) {
  const classes = `${style.card} ${props.classes}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
