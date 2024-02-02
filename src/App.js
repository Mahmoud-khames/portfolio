
import './App.css';
import AboutMe from './component/AboutMe';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import ConcatMe from './component/Concat-Me';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/aboutMe"
          element={
            <>
              <Navbar />
              <AboutMe />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <Projects />
            </>
          }
        />
        <Route
          path="/concatMe"
          element={
            <>
              <Navbar />
              <ConcatMe />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
