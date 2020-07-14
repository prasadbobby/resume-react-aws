import React from "react";

let Greeting = (props) => {
  return (
    <div>
      <h1>{props.name}{props.mail}</h1>
      {props.children}
    </div>
  );
};

export default Greeting;
