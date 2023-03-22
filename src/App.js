import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="header">Weather App</h1>
        <Weather />
      </header>
      <footer>
        <p>
          This project was coded by Keri Ritenour and is open-sourced on{" "}
          <a
            href="https://github.com/keri-codes"
            target="_blank"
            rel="noreferrer"
            alt="link to profile page on github"
          >
            Github
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
