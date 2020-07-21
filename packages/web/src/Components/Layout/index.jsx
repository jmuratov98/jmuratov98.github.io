import React from 'react';
import Navigation from '../Navigation'
import styled from 'styled-components';

const Layout = ({
    children
}) => {

    return (
        <Container>
            <Navigation bc='dark' />
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
    height: 100vh;
`

export default Layout;