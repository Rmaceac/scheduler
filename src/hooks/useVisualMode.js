import React, { useState } from 'react';

export default function useVisualMode (initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial])
  
  const transition = (newMode) => {
    setHistory((prev) => ([newMode, ...prev]));
    setMode(newMode);
  }
  
  const back = () => {
    let historyCopy = history.slice(0);
    let prevMode = "";
    
    if (historyCopy.length <= 2) {
      prevMode = historyCopy[history.length - 1];
      historyCopy.shift()
      setMode(prevMode);
      setHistory(historyCopy);
    } else {
      prevMode = historyCopy[historyCopy.length - 2];
      historyCopy.shift();
      setHistory(historyCopy);
      setMode(prevMode);
    }
  }

  // const mode = history[history.length - 1];

  return { mode, transition, back, history }
}