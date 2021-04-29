import React from "react";
import ReactDOM from "react-dom";

//---------------- How we write in react-----Babel is converting it in necessary code behind the scene--------------
ReactDOM.render(
  <h1>Hello World!! I am learning react js</h1>,
  document.getElementById("root")
);

//------------If we want to do it in pure javaScript-----------------
var h1 = document.createElement("h1");
h1.innerHTML = "Saransh Lakra";
document.getElementById("root").appendChild(h1);
