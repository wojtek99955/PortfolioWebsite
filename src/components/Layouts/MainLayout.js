import Portfolio from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";
import Contact from "../../components/Contact/Contact";
import HireMe from "../../components/HireMe/HireMe";
import Skills from "../../components/Skills/Skills";
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn";
import TextMe from "../../components/TextMe/TextMe";
import Nav from "../../components/Header/Nav/Nav";
import Opening from "../../components/Opening/Opening";
import About from "../../components/About/About";

function MainLayout() {
  return (
    <>
      <ScrollTopBtn />
      <TextMe />
      <Nav />
      <Opening />
      <About />
      <Skills />
      <Portfolio />
      <HireMe />
      <Contact />
      <Footer />
    </>
  );
}

export default MainLayout;
