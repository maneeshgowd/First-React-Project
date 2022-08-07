import { useState } from "react";
import React from "react";
import Card from "./card";
import Button from "./Button";

import style from "./formCard.module.css";

function FormCard(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const sendUserDataHandler = (e) => {
    e.preventDefault();

    if (userName.length <= 0 && userAge <= 0) {
      return props.getOverlayErr("Name and age fields cannot be (empty)");
    }

    if (userAge <= 0) {
      return props.getOverlayErr("Please enter a valid age (age > 0)");
    }

    props.getUserData({ name: userName, age: userAge, id: Math.random() });

    setUserAge("");
    setUserName("");
  };

  const getUserNameHandler = (e) => setUserName(e.target.value.trim());

  const getUserAgeHandler = (e) => setUserAge(+e.target.value);

  return (
    <Card>
      <form className={style.form} onSubmit={sendUserDataHandler}>
        <label htmlFor="username" className={style.label}>
          Username
        </label>
        <input
          type="text"
          name="username"
          value={userName}
          className={style.input}
          onChange={getUserNameHandler}
        />
        <label htmlFor="age" className={style.label}>
          Age (Years)
        </label>
        <input
          type="number"
          name="age"
          value={userAge}
          className={style.input}
          onChange={getUserAgeHandler}
        />
        <Button text="Add User" />
      </form>
    </Card>
  );
}

export default FormCard;
