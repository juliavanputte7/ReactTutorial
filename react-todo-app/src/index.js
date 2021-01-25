import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./Components/TodoContainer"

//stylesheet
import "./App.css"

ReactDOM.render(
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
  )