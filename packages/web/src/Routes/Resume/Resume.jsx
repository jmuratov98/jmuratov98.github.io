import React from 'react';
import logo from '../../imgs/photograph.jpg';
import styled from 'styled-components';

const Resume = () => {
    return (
        <div className="resume">
            
            <section className="hero">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <figure className="image is-128x128">
                                <img src={logo} alt="" className="is-rounded" />
                            </figure>
                        </div>
                        <div className="level-item">
                            <div>
                                <h1 className="title is-1 is-spaced">Joseph Muratov</h1>
                                <h2 className="subtitle is-5">Software Engineer</h2>
                            </div>
                        </div>
                    </div>
                </div>                
            </section>

            <br />

            <Container>
                <div className="columns">
                    <div className="column has-text-centered">
                        <h3 className="title is-3">Summary</h3>
                        <p>
                            A software engineer focused in working with graphics, artificial intelligence, ciruits, and fullstack web development 
                        </p>
                        <br />
                        <h3 className="title is-3">Work Experience</h3>

                        <h5 className="title is-5">Allstate Sales Group &mdash; Data Entry</h5>
                        <h6 className="subtitle is-6">Feb 2019 - Aug 2019</h6>
                        
                        <h5 className="title is-5">Lineup App &mdash; Fullstack Developer Intern</h5>
                        <h6 className="subtitle is-6">Jan 2020 - Present</h6>
                    </div>
                    <div className="column has-text-centered">
                        <h3 className="title is-3">Education</h3>

                        <h5 className="title is-5">The City College of New York &mdash; Bachelors Computer Engineering</h5>
                        <h6 className="subtitle is-6">Aug 2016 - Present</h6>

                        <br />
                        
                        <h3 className="title is-3">Skills</h3>
                        <div className="columns">
                            <div className="column">
                                <ul>
                                    <li>C/C++</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>VHDL</li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul>
                                    <li>OpenGL</li>
                                    <li>Flask</li>
                                    <li>MySQL</li>
                                    <li>AutoCAD</li>
                                    <li>Visio</li>
                                    <li>Microsoft Office</li>
                                </ul>
                            </div>
                            <div className="column">
                                <ul>
                                    <li>English</li>
                                    <li>Russian</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

export default Resume;