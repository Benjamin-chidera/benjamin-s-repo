import './App.css'
import { About } from './components/pages/About'
import { GetInTouch } from './components/pages/GetInTouch';
import { Home } from './components/pages/Home'
import { Skills } from './components/pages/Skills';
import { Work } from './components/pages/Work';
import { Footer } from './components/ui/Footer';
import { Navbar } from './components/ui/Navbar'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {


  return (
    <div className="dark ">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Work/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
}

export default App
