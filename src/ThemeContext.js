import React, {useState, createContext, useEffect} from 'react';

export const ThemeContext = createContext();


export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({
    bodyBackgroundColor: '#f8f9fa',
    cardBackgroundColor: '#fff',
    headerBackgroundColor: '#343a40',
  })

  useEffect(() => {
    // fetch data here
  },[])
  return(
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children} 
    </ThemeContext.Provider>
  );
}