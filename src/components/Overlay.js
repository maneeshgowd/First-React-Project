import React from "react";
import Button from "./Button";
import Card from "./card";
import style from "./Overlay.module.css";

function Overlay(props) {
  const hideOverlayState = function (e) {
    if (!(e.currentTarget === e.target || e.target.tagName === "BUTTON")) return;
    props.changeOverlayState();
  };
  return (
    <div onClick={hideOverlayState} className={style.overlay}>
      <Card classes={style["overlay-card"]}>
        <h1 className={style["overlay-card__title"]}>Invalid input</h1>
        <p className={style["overlay-card__err"]}>{props.message}</p>
        <Button text="Okay" classes={style["overlay-button"]} />
      </Card>
    </div>
  );
}

export default Overlay;
