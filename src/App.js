import './App.css';
import  { Link } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <About />
        {/* <Contact /> 
        <Projects />  */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
