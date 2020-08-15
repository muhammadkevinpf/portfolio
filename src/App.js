import React, { Fragment } from "react";
import "./App.css";
import Welcome from "./Layout/Welcome.js";
import About from "./Layout/About.js";
import Contact from "./Layout/Contact.js";
import Projects from "./Layout/Projects.js";
import Navbar from "./Layout/Navbar.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import { Dots } from "react-preloaders";
library.add(fab, faEnvelope);

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Welcome />
        <About />
        <Projects />
        <Contact />
        {/* <Dots background="#f7f7f7" animation="slide" time={1000} /> */}
      </Fragment>
    </div>
  );
}

export default App;
