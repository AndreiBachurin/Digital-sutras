import React from "react";
import { render } from "react-dom";
import Shop from "./Shop.js";
//import "./index.css";

function App() {
  return (
    <>
      <Shop />
  <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>);
  
}

render(<App />, document.querySelector("#root"));
