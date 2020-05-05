import React, { useState } from "react";
import "./App.css";
import Border from "./components/Border";
import InputGroup from "./components/InputGroup";

function App() {
  const [borderA1, setBorderA1] = useState("12");
  const [borderA2, setBorderA2] = useState("12");
  const [borderB1, setBorderB1] = useState("12");
  const [borderB2, setBorderB2] = useState("12");
  const [borderC1, setBorderC1] = useState("12");
  const [borderC2, setBorderC2] = useState("12");
  const [borderD1, setBorderD1] = useState("12");
  const [borderD2, setBorderD2] = useState("12");
  return (
    <div className="App">
      <div className="container">
        <div className="input-group" style={{ marginBottom: "12px" }}>
          <InputGroup setLength={setBorderA1} setPercentage={setBorderA2} />
          <InputGroup setLength={setBorderB1} setPercentage={setBorderB2}/>
        </div>
        <Border
          borderA1={borderA1}
          borderA2={borderA2}
          borderB1={borderB1}
          borderB2={borderB2}
          borderC1={borderC1}
          borderC2={borderC2}
          borderD1={borderD1}
          borderD2={borderD2}
        />
        <div className="input-group" style={{ marginTop: "12px" }}>
          <InputGroup setLength={setBorderC1} setPercentage={setBorderC2}/>
          <InputGroup setLength={setBorderD1} setPercentage={setBorderD2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
