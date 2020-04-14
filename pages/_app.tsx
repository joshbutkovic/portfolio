import React from 'react';
import App from 'next/app';
import DocumentHead from '../components/Layout/DocumentHead';
import MainMenu from '../components/Layout/MainMenu/MainMenu';
import Footer from '../components/Layout/Footer/Footer';
import '../styles/app.scss';

class Portfolio extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <DocumentHead title="Josh Butkovic's Online Portfolio" />
                <MainMenu title="Josh Butkovic" subtitle="Full Stack Web Developer" />
                <Component {...pageProps} />
                <Footer />
            </>
        );
    }
}

export default Portfolio;
