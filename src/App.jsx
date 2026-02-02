import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import Showcase from "./components/Showcase/Showcase";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product />
      <Showcase />
    </main>
  );
};

export default App;
