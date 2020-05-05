import React, { useState } from "react";
import "./App.css";
import Border from "./components/Border";
import InputGroup from "./components/InputGroup";
import { TextField, Button } from "@material-ui/core";

function App() {
  const [borderA1, setBorderA1] = useState("0");
  const [borderA2, setBorderA2] = useState("0");
  const [borderB1, setBorderB1] = useState("0");
  const [borderB2, setBorderB2] = useState("0");
  const [borderC1, setBorderC1] = useState("0");
  const [borderC2, setBorderC2] = useState("0");
  const [borderD1, setBorderD1] = useState("0");
  const [borderD2, setBorderD2] = useState("0");

  function copyFunc(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copied!")
  }

  return (
    <div className="App">
      <div className="container">
        <div className="input-group" style={{ marginBottom: "12px" }}>
          <InputGroup setLength={setBorderA1} setPercentage={setBorderA2} />
          <InputGroup setLength={setBorderB1} setPercentage={setBorderB2} />
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
          <InputGroup setLength={setBorderC1} setPercentage={setBorderC2} />
          <InputGroup setLength={setBorderD1} setPercentage={setBorderD2} />
        </div>
        <div
          style={{ alignSelf: "flex-start", marginTop: "24px", width: "100%" }}
        >
          <TextField
            disabled
            className="js-copytextarea"
            style={{ width: "80%", marginRight: "12px" }}
            variant="outlined"
            value={`${borderA1}px ${borderA2}% ${borderB1}px ${borderB2}% / ${borderC1}px ${borderC2}% ${borderD1}px ${borderD2}%`}
            label="border-radius"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              copyFunc(
                `${borderA1}px ${borderA2}% ${borderB1}px ${borderB2}% / ${borderC1}px ${borderC2}% ${borderD1}px ${borderD2}%`
              )
            }
          >
            Copy
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
