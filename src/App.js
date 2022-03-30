import './App.scss';

import About from './components/About';
import Education from './components/Education';
import Courses from './components/Courses';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

function App() {
  return (
    <div id="app">
      <img id="banner" src="./images/baner.png" alt="" />

      <main>
        <div id="content">
          <About />
          <Education />
          <Courses />
          <Technologies />
          <Projects />
        </div>

        <div id="info">
          <img src="./images/avatar.png" alt="avatar" />
          <div className="name">Imię i nazwisko</div>
          <div className="email">adres emial</div>
          <div>numer telefony</div>
        </div>
      </main>
    </div>
  );
}

export default App;
