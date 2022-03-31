import { useState } from 'react';

export default function useVisualMode (initial) {
  const [history, setHistory] = useState([initial])
  
  const transition = (newMode, replace = false) => {
    // newMode is added to the BEGINNING of the history array (0th index)
    setHistory((prev) => ([newMode, ...prev]));
    if (replace) {
      let historyCopy = [...history];
      historyCopy.splice(0, 1, newMode);
      setHistory(historyCopy);
    }
  }

  const back = () => {
    let historyCopy = history.slice(0);
    if (history.length < 2) {
      return;
    }
    if (historyCopy.length <= 2) {
      historyCopy.shift()
      setHistory(historyCopy);
    } else {
      historyCopy.shift();
      setHistory(historyCopy);
    }
  }

  const mode = history[0];

  return { mode, transition, back, history }
}