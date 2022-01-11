import React, { useReducer, createContext, useEffect, useState } from 'react';
import { themeReducer } from '../reducers/ThemeReducer';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  // reducer, initial value, 3rd arg is a default value setter
  const [theme, dispatch] = useReducer(themeReducer, [], () => {
    const localData = localStorage.getItem('theme');
    return localData ? JSON.parse(localData) : { theme: { night: false } };
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const [light] = useState({
    text: '#000',
    layout: '#ddd',
    background: '#fff',
  });
  const [dark] = useState({ text: '#fff', layout: '#333', background: '#000' });

  return (
    <ThemeContext.Provider value={{ light, dark, theme, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
