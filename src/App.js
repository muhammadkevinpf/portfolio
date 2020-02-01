import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import About from './About.js';
import Contact from './Contact.js';
import Projects from './Projects.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faEnvelope)

function App() {
  return (
    <div className="App">
      <Welcome/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
