import Footer from "./components/Footer";
import About from "./components/About";
import AboutAlaCarte from "./components/AboutAlaCarte";
import AboutMenu from "./components/AboutMenu";
import HeroSection from "./components/HeroSection";
import TopNavBar from "./components/TopNavBar";

const App = () => {
  return (
    <>
      <TopNavBar />
      <HeroSection />
      <About />
      <AboutMenu />
      <AboutAlaCarte />
      <Footer />
    </>
  );
};

export default App;
