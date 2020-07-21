import React from 'react';
import { Router } from '@reach/router';

import Layout from './Components/Layout';
import { Home, About, Projects, Resume, Contact } from './Routes'; 

function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/" />
            <Layout path="/">
                <About path="about" />
                <Projects path="projects" />
                <Resume path="resume" />
                <Contact path="contact" />
            </Layout>
        </Router>
    </div>
  );
}

export default App;
