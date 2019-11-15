import React from "react";
import ReactDOM from "react-dom";

import { SelectContext } from "./Select";

import {useInput} from "./hooks";
import {useState, useEffect, useContext} from 'react';

const Option = ({ children, value }) => {
  const { selectedOption, selectOption } = useContext(SelectContext);
  const isActive = selectedOption && selectedOption.value === value;

  return (
    <div
      className="option"
      style={{
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "#ffffff" : "rgba(255,255,255,0.7)",
        padding: 10,
        margin: 10
      }}
      onClick={() => selectOption({ value, children })}
    >
      {children}
    </div>
  );
};

export default Option;
