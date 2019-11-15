import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import {useState, useEffect} from 'react';
import MountedCounter from './MountedCounter';

import Header from './Header'
import Footer from './Footer'

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
  const toggle = useToggle({initial: false  });
  const {value, increase, decrease} = useNumber({});

  const email = useInput('', {persist: true, key: 'email'});
  const password = useInput('', {});

  useDocumentTitle(`${value} is counter`);

  const {width, height} = useMeasureWindow();

  const [user, setUser] = useState({
    name: "John",
    surname: "Lennon"
  });

  let authObject = {
    user: user,
    logout: function() {
      setUser(null)
    },
    login: function(user) {
      setUser(user)
    }
  };

  return (
    <UserContext.Provider value={authObject}>
      <Header />
      <Footer />
      <div>
        <div>Width: {width}</div>
        <div>Height: {height}</div>
        <button onClick={toggle.toggle}>Toggle switch</button>
        {toggle.value &&
          <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <div>You clicked {value} times</div>
            <MountedCounter/>
          </div>
        }
        <div>
          Username: <input type="text" value={email.value} onChange={email.onChange}/><br/>
          Password: <input type="password" {...password}/><br/>
          <button onClick={() => console.log(email.value + ": " + password.value)}>Login</button>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
