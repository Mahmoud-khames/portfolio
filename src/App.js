
import './App.css';
import AboutMe from './component/AboutMe';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import ConcatMe from './component/Concat-Me';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ConcatMe />
      <Footer/>
    </div>
  );
}

export default App;
