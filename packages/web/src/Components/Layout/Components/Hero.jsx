import React from 'react';
import styled from 'styled-components';
import logo from '../../../imgs/photograph.jpg';
import bg from '../../../imgs/marble-bg.jpg';

const Hero = ({
    items: { title, subTitle, profilePic, custom }
}) => {

    return !custom ?
        <Container bg={bg} className="hero">
            <div className="hero-body">
                <div className="container">
                    <nav className="level">
                        <div className="level-left" style={{ margin: 'auto' }}>
                            <div className="level-item">
                                {
                                    profilePic &&
                                    <figure className="image is-128x128">
                                        <img src={logo} alt="" className="is-rounded" />
                                    </figure>
                                }
                            </div>
                            <div className="level-item">
                                <div>
                                    {
                                        title &&
                                        <h1 className="title is-1 is-spaced">{title}</h1>
                                    }
                                    {
                                        subTitle &&
                                        <h2 className="subtitle">{subTitle}</h2>
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </Container>
    : custom === 'Contact' && <custom />
}

const Container = styled.section`
    background-image: url(${props => props.bg});
`

export default Hero;