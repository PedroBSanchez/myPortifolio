import Header from "./components/topContent/Header";
import Middle from "./components/middleContent/Middle";
import Projects from "./components/endContent/Projects";
import Footer from "./components/endContent/Footer";

import "./App.css";
import Skills from "./components/skillsContent/Skills";
import Experience from "./components/experienceContent/Experience";

function App() {
  return (
    <div className="app">
      <Header />
      <section id="about">
        <Middle />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
        <Footer />
      </section>
      <section id="experience"></section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
