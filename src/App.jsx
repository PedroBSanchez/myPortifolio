import Header from "./components/topContent/Header";
import Middle from "./components/middleContent/Middle";
import Projects from "./components/endContent/Projects";
import Footer from "./components/endContent/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <section id="about">
        <Middle />
        <Footer />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
