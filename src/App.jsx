import Blog from "./components/Blog";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Navbar from "./components/Navbar";

import We from "./components/We";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Cards />
      
      <Blog />
      <We />
      <Footer />
    </>
  );
}

export default App;
