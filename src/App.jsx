import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative overflow-x-hidden bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative">
          <Contact />
          <div className="absolute inset-0 z-[-1]">
            <StarsCanvas />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
