import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Technology from "./components/Technology/Technology";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Skills/>  
     <Projects/>  
     <Technology/>  
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
