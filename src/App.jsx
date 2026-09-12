import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import TechStack from "./components/sections/techStack";
import Project from "./components/sections/Projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Project />
      </main>
    </>
  );
}

export default App;
