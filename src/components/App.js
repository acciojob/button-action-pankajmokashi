import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  let [name, setName] = useState("hide");

  return (
    <div className="App" id="main">
      <p id="para" className={name}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={() => {
        name == "show" ? setName("hide") : setName("show")
      }}>Button</button>
    </div>
  );
}

export default App
