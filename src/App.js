import React from "react";
import GlobalStyle from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import { useState } from "react";
import MainLayout from "./components/Layouts/MainLayout";
import { Routes, Route } from "react-router-dom";
import NoRoutes from "./components/Layouts/NoRoutes/NoRoutes";

export const SwitchContext = React.createContext({});

function App() {
  const [toggle, setToogle] = useState(+false);

  const handleToggle = (e) => {
    setToogle((prev) => !prev);
    e.stopPropagation();
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SwitchContext.Provider value={{ toggle, handleToggle }}>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="*" element={<NoRoutes />} />
          </Routes>
        </SwitchContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
