import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MyList from "./MyList";
import * as serviceWorker from "./serviceWorker";

let toDos = [
  "Buy ice cream",
  "Get a cat",
  "Return Dragon",
  "Go on an Adventure",
  "Pardon a Turkey",
];

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
