import React from 'react';
import ReactDOM from 'react-dom'
import "./styles/main.scss"

function App(props) {
  return <h1 className="test">Hello, project!</h1>
}

const node = document.getElementById("root")
ReactDOM.render(<App />, node)