import { useContext, useEffect } from "react";
import "./App.css";
import {} from "./";
import { ThemeContext } from "./context/theme/theme";
import NavBar from "./components/navbar/navbar";
import HeroSection from "./components/hero/hero";
import About from "./components/about/about";
import ResponsiceDesign from "./components/design/design";
import Skills from "./components/skils/skills";
import BottomNavigation from "./components/bottom_navigation/bottomnavigation";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
import { Clients } from "./components/clients/clients";
import { Services } from "./components/services/services";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );
  }, [theme, toggleTheme]);

  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <About />
      <ResponsiceDesign />
      <Skills />
      <Services />
      <Clients />
      <Contact />
      <BottomNavigation />
      <Footer />
    </div>
  );
}

export default App;
