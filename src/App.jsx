import { Navbar } from "./components/Navbar";
import Home from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </div>
);

export default App;
