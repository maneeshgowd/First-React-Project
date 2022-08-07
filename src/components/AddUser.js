import React from "react";
import Card from "./card";
import style from "./AddUser.module.css";

function AddUser(props) {
  const deleteCurrentItemHandler = function (e) {
    e.currentTarget.remove();
  };
  return (
    <Card>
      {props.data.map((item) => (
        <div key={item.id} className={style.user} onClick={deleteCurrentItemHandler}>
          {item.name} ({item.age} years old)
        </div>
      ))}
    </Card>
  );
}

export default AddUser;
