import About from "./components/About";
import Navbar from "./components/Navbar";
import Tours from "./components/Tours";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
