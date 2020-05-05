import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BorderRadius = styled.div`
  height: 100%;
  width: 100%;
  border: solid 5px;
  border-top-left-radius: ${({ borderA1, borderA2 }) =>
    `${borderA1}px ${borderA2}%`};
  border-top-right-radius: ${({ borderB1, borderB2 }) =>
    `${borderB1}px ${borderB2}%`};
  border-bottom-left-radius: ${({ borderC1, borderC2 }) =>
    `${borderC1}px ${borderC2}%`};
  border-bottom-right-radius: ${({ borderD1, borderD2 }) =>
    `${borderD1}px ${borderD2}%`};
`;

const Border = (props) => {
  const {
    borderA1,
    borderA2,
    borderB1,
    borderB2,
    borderC1,
    borderC2,
    borderD1,
    borderD2,
  } = props;

  return (
    <BorderRadius
      borderA1={borderA1}
      borderA2={borderA2}
      borderB1={borderB1}
      borderB2={borderB2}
      borderC1={borderC1}
      borderC2={borderC2}
      borderD1={borderD1}
      borderD2={borderD2}
    />
  );
};

Border.propTypes = {
  borderA1: PropTypes.string,
  borderA2: PropTypes.string,
  borderB1: PropTypes.string,
  borderB2: PropTypes.string,
  borderC1: PropTypes.string,
  borderC2: PropTypes.string,
  borderD1: PropTypes.string,
  borderD2: PropTypes.string,
};

export default Border;
