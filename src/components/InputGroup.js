import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const InputGroup = (props) => {
  const { setLength, setPercentage } = props;

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <TextField
        variant="outlined"
        style={{ width: "100px", marginRight: "12px" }}
        label="Length"
        onChange={e => setLength(e.target.value)}
      />
      <TextField
        variant="outlined"
        style={{ width: "120px" }}
        label="Percentage"
        onChange={e => setPercentage(e.target.value)}
      />
    </div>
  );
};

InputGroup.propTypes = {
  length: PropTypes.string,
  percentage: PropTypes.string,
};

export default InputGroup;
