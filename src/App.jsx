import "./App.css";
import TopBar from "./components/TopBar";
import TextContent from "./components/TextContent";
import Profile from "./components/Profile";
import Partenership from "./components/Partenership";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Language from "./components/Language";
import Awards from "./components/Awards";
import Recommandtion from "./components/Recommandtion";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />
      <TextContent />
      <Profile />
      <Partenership />
      <Experience />
      <Education />
      <Certificate />
      <Skills />
      <Language />
      <Awards />
      <Recommandtion />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
