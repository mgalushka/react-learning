import React from "react";
import ReactDOM from "react-dom";

import {UserContext} from './user-context';

import {useInput} from "./hooks";
import {useState, useEffect, useContext} from 'react';

const Footer = () => {
  const auth = useContext(UserContext);
  const name = useInput("", {});
  const surname = useInput("", {});

  const submit = () => {
    let user = { name: name.value, surname: surname.value };
    auth.login(user);
  };

  return (
    <div>
      <div>
        <div><input placeholder="name" type="text" {...name}/></div>
        <div><input placeholder="name" type="text" {...surname}/></div>
        <button onClick={submit}>Login</button>
      </div>
      <button onClick={auth.logout}>Logout</button>
    </div>
  );
}

export default Footer;
