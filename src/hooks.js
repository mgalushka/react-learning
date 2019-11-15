import {useState, useEffect} from 'react';

export const useToggle = ({initial = false}) => {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(!value);

  return {value, setValue, toggle};
}

export const useNumber = ({initial = 0}) => {
  const [value, setValue] = useState(initial);
  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);

  return {value, setValue, increase, decrease};
}

export const useInput = (defaultValue = '', {persist = false, key = ''}) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    const tvalue = e.target.value;
    setValue(tvalue);
    if (persist) {
        window.localStorage.setItem(key, tvalue);
        console.log(window.localStorage.getItem(key));
    }
  }

  useEffect(() => {
    if (persist) {
        setValue(window.localStorage.getItem(key));
    }
    // return () => localStorage.removeItem(key);
  }, [persist, key]);

  return {value, onChange}
}

export const useDocumentTitle = (title = '') => {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export const useMeasureWindow = () => {
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handler = () => setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, []);

  return state;
}

export const useTimer = () => {
  const [intervalTime, setIntervalTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`increasing interval, current: ${intervalTime}`);
      setIntervalTime(intervalTime => intervalTime+1);
    }, 1000);

    return () => {
      console.log(`Changed current: ${intervalTime}`);
      clearInterval(interval);
    };
  }, [intervalTime]);
}
