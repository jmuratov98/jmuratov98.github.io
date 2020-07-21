import React from 'react';
import './index.sass'
import styled from 'styled-components';

const Navigation = ({
    color,
}) => {
    return (
        <Navbar className='navbar' role="navigation">
            <div className="navbar-brand">
                <span className="navbar-burger" data-target="main-nav">
                    <span />
                    <span />
                    <span />
                </span>
            </div>
            <div className="container">
                <div id="main-nav" className="navbar-menu">
                    <div className="navbar-start">
                        <NavItem color={color} href="/" className="navbar-item">Joseph Muratov</NavItem>
                    </div>
                    <div className="navbar-center">
                        <NavItem color={color} href="/" className="navbar-item">Home</NavItem>
                        <NavItem color={color} href="/about" className="navbar-item">About</NavItem>
                        <NavItem color={color} href="/projects" className="navbar-item">Projects</NavItem>
                        <NavItem color={color} href="/resume" className="navbar-item">Resume</NavItem>
                        <NavItem color={color} href="/blog" className="navbar-item">Blog</NavItem>
                    </div>
                    <div className="navbar-end">
                        <NavItem color={color} href="/contact" className="navbar-item">Contact</NavItem>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}

const Navbar = styled.nav`
    background-color: #EBEBEB;
`;

const NavItem = styled.a`
    color: ${props => (props.color) ? props.color : 'black'};
`

export default Navigation;