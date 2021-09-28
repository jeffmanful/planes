import React from "react";
import Deck from "./components/Deck";
import "./App.css";
import { workers } from "./data/workers";

function App() {

  const onChange = (data: any) => {
    console.log('do something with data...', data);
  };
  return (
    <div className="flc tc">
      <header>
        <img src="/mi3-logo.png" alt="mission impossible" />
      </header>
      <p className="text-large">Position: Stunt double</p>
      <div className="flc">
        <Deck cards={workers} onChange={onChange} />
      </div>
    </div>
  );
}

export default App;
