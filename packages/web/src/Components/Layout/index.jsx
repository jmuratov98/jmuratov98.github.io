import React from 'react';
import Navigation from '../Navigation'
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import Hero from './Components/Hero';
import bg from '../../imgs/marble-bg.jpg';

const Layout = ({
    children,
    isNavbarFixed
}) => {

    const location = useLocation();

    function getHeroFromPath() {
        console.log(location.pathname);
        switch(location.pathname) {
            case '/about': return { title: 'About Me', profilePic: true};
            case '/projects': return { title: 'My Projects' } ;
            case '/resume': return { title: 'Joseph Muratov', subTitle: 'Software Engineer', profilePic: true};
            case '/blog': return { title: 'Blog' };
            case '/contact': return { custom: children }
            default: break;
        }
    }

    const hero = getHeroFromPath();

    return (
        <Container>
            <Navigation bc='dark' isFixed={isNavbarFixed} />
            <Hero bg={bg} items={hero} />
            <section className="section">
                <div className="container">
                    {children}
                </div>
            </section>
        </Container>
    );
}

const Container = styled.div`
    background-color: #EBEBEB;
    min-height: 100vh;
`

export default Layout;