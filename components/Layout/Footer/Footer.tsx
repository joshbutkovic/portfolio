import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer className="footer is-dark">
            <div className="content has-text-centered">
                <p className="is-italic">{new Date().getFullYear()} joshbutkovic.com</p>
            </div>
        </footer>
    );
}

export default Footer;
