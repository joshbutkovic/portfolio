import React from 'react';
import App from 'next/app';
import DocumentHead from '../components/Layout/DocumentHead';
import MainMenu from '../components/Layout/MainMenu/MainMenu';
import Footer from '../components/Layout/Footer/Footer';
import { initGA, logPageView } from '../utils/index';
import '../styles/app.scss';

declare global {
    interface Window {
        GA_INITIALIZED: any;
    }
}

class Portfolio extends App {
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }
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
