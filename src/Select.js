import React from "react";
import ReactDOM from "react-dom";

import {UserContext} from './user-context';

import {useInput} from "./hooks";
import {useState, useEffect, useContext} from 'react';

export const SelectContext = React.createContext({});

function Select({ children }) {
  const [selectedOption, setSelectedOption] = useState();
  const [opened, setOpened] = useState(false);

  const selectOption = (option) => {
    setSelectedOption(option);
    setOpened(false);
  };

  const open = () => {
    setOpened(true);
  };

  if (opened) {
    return (
      <SelectContext.Provider value={{ selectedOption, selectOption }}>
        {children}
      </SelectContext.Provider>
    );
  } else {
    return (
      <div className="select" onClick={open}>
        {selectedOption ? selectedOption.children : "Pick one"}
      </div>
    );
  }
}

export default Select;
