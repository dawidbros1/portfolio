import './App.scss';

import About from './components/About';
import Education from './components/Education';
import Courses from './components/Courses';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

function App() {
  return (
    <div id="app">
      <img id="banner" src="./images/banner.jpg" alt="" />

      <main>
        <div id="content">
          <About />
          <Education />
          <Courses />
          <Technologies />
          <Projects />
        </div>

        <div id="info">
          <img src="./images/avatar.jpg" alt="avatar" />
          <div className="name">Dawid Gołębiowski</div>
          <div className="email">dawidbros1@wp.pl</div>
          <div>782 107 684</div>
        </div>
      </main>
    </div>
  );
}

export default App;
