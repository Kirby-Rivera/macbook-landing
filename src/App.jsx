import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product />
    </main>
  );
};

export default App;
