import React from 'react';
import Navigation from '../../Components/Navigation';

const Contact = () => {
    return (
        <section className="hero is-fullheight">
            <Navigation />
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-8 is-variable ">
                        <div className="column is-two-thirds has-text-left">
                            <h1 className="title is-1">Contact Me</h1>
                            <p className="is-size-4">Liked what you see. Send me an email. 😎</p>
                            <div className="social-media">
                                {/* eslint-disable-next-line */}
                                <a href="https://www.facebook.com/joseph.muratov/" className="button is-light is-large"><i className="fab fa-facebook-square" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="column is-one-third has-text-left">
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input is-medium" type="text" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input is-medium" type="text" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Message</label>
                                <div className="control">
                                    <textarea className="textarea is-medium"></textarea>
                                </div>
                            </div>
                            <div className="control">
                                <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;