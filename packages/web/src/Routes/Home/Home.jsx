import React from 'react';

import Navigation from '../../Components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <header className="hero is-fullheight header-image">
                <div className="hero-head">
                    <Navigation color='white' />
                </div>
            </header>
        </div>
    );
}

export default Home;