import React, { createContext, useState } from "react";
createContext;

export const myContext = createContext("");

const ThemeProvider = ({ children }) => {
  const [text, setText] = useState("2");

  return (
    <div>
      <myContext.Provider value={{ text, setText }}>
        {children}
      </myContext.Provider>
    </div>
  );
};

export default ThemeProvider;
