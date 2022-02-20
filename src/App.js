import React from "react";
import Nav from "./components/Header/Nav/Nav";
import Opening from "./components/Opening/Opening";
import GlobalStyle from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from './assets/styles/theme';
import About from './components/About/About';
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import HireMe from "./components/HireMe/HireMe";
import { useState } from "react";
import Skills from "./components/Skills/Skills";




export const SwitchContext = React.createContext({});


function App() {

  const [toggle, setToogle] = useState(false);

  const handleToggle = (e) => {
    setToogle(prev => !prev);
    e.stopPropagation()
  }


  return (
    <div>

      <ThemeProvider theme={theme}>
        <SwitchContext.Provider value={{ toggle, handleToggle }}>
          <GlobalStyle />
          <Nav />
          <Opening />
          <About />
          <Skills />
          <Portfolio />
          <HireMe />
          <Contact />
          <Footer />
        </SwitchContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
