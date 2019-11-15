import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import {useState, useEffect} from 'react';
import MountedCounter from './MountedCounter';

import Header from './Header'
import Footer from './Footer'

import Select from './Select'
import Option from './Option'

import {UserContext} from './user-context';

// hooks
import {
  useToggle,
  useNumber,
  useInput,
  useDocumentTitle,
  useMeasureWindow,
  useTimer
} from './hooks'

const App = () => {

  return (
    <Select>
     <Option value="blue"> Blue </Option>
     <Option value="red"> Red </Option>
     <Option value="white"> White </Option>
  </Select>

  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
