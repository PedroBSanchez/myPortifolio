import Header from "./components/topContent/Header";
import Middle from "./components/middleContent/Middle";
import Projects from "./components/endContent/Projects";
import Footer from "./components/endContent/Footer";

import "./App.css";
import Skills from "./components/skillsContent/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <section id="about">
        <Middle />
        <Skills />
        <Footer />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
