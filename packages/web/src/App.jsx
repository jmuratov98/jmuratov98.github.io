import React from 'react';
import { Router } from '@reach/router';

import Layout from './Components/Layout';
import { Home, About, Projects, Resume, Contact } from './Routes'; 

function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/" />
            <Layout path="/" isNavbarFixed={true}>
                <About path="about" />
                <Projects path="projects" />
                <Resume path="resume" />
            </Layout>
            <Contact path="/contact" />
        </Router>
    </div>
  );
}

export default App;
