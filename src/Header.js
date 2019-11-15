import React from "react";
import ReactDOM from "react-dom";

import {UserContext} from './user-context';

import {useState, useEffect, useContext} from 'react';

const Header = () => {
  const auth = useContext(UserContext);

  return (
    <div>
      {auth.user &&<div>Hi {auth.user.name} - {auth.user.surname}</div>}
      {!auth.user &&<div>Nobody is currently logged in</div>}
    </div>
  );
}

export default Header;
