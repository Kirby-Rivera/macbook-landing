import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import Showcase from "./components/Showcase/Showcase";
import Performance from "./components/Performance/Performance";
import Features from "./components/Features/Features";
import Highlights from "./components/Highlights/Highlights";
import Footer from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product />
      <Showcase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
