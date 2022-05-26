import React from "react"
import {render} from "react-dom"
import Card from "./App.js"

function App() {

  function handleCardClick() {
    console.log("Кнопка нажата")
  }
  
  return <Card onCardClick={handleCardClick} />
}

render(<App />, document.querySelector("#root"))
