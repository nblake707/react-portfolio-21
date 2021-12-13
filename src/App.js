import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/work-sans";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" caseSensitive={false} element={<About />} />
            <Route path="/contact" caseSensitive={false} element={<Contact />} />
            <Route path="/projects" caseSensitive={false} element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
