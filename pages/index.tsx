import React from 'react';
import { NextPage } from 'next';
import Mission from '../components/Mission/Mission';
import Skills from '../components/Skills/Skills';

const Home: NextPage = () => {
    return (
        <>
            <Mission>
                Hi my name is Josh and I'm a passionate, experienced, and driven web developer. I have 7+ years of
                professional experience. I have worked with a variety of languages and frameworks including React,
                Django, and Express. I'm located in Henderson, NV just outside of Las Vegas. My day job is working for a
                top US hotel company as a React/Java developer. I value well planned, clean, and scalable code written
                with modern tooling. If my skillset fits your next project, get in touch for a free proposal.
            </Mission>
            <Skills title="Skills" />
        </>
    );
};

export default Home;
