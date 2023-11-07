import Footer from "./components/Footer";
import About from "./components/About";
import AboutAlaCarte from "./components/AboutAlaCarte";
import AboutMenu from "./components/AboutMenu";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OpeningHours from "./components/OpeningHours";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <AboutMenu />
      <AboutAlaCarte />
      <Footer />
      <OpeningHours />
    </>
  );
};

export default App;
