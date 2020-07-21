import React from 'react';
import styled from 'styled-components';
import logo from '../../imgs/photograph.jpg';

const About = () => {
    return (
        <div className="about">
            <Title className="title">About Me</Title>
            <div className="is-horizontal-centered py-5">
                <Image image={logo} />
            </div>
            <div className="content">
                <p>
                    I'm a Computer Engineering student from the Grove School of Engineering located at the City College of New York. I love graphics programming, solving problems, 
                    debugging, and circuitry. 
                </p>
                <p>
                    Growing up I was always fascinated with electronics, especially computers. I admired the hardware; what they can become. Over time I became interested in what computers can do for AI and robotics. As such I always wanted to do something along those lines.
                </p>
                <p>
                    Aside from school work and side projects, I work and help my family in the family buisness.
                </p>
                <p>
                    If added to your team I am a hardworking, and stubborn indivual, who hates quitting on tasks that are not yet completed.
                </p>
                <p>You can always contact me <a href="/contact">here</a></p>
            </div>
        </div>
    );
}

const Title = styled.h1`
    display: flex;
    justify-content: center;
`

const Image = (props) => {
    return (
        <figure className="image is-128x128">
            <img src={props.image} className='is-rounded' alt="img" />
        </figure>
    );
}

export default About;