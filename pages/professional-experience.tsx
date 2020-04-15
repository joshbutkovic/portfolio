import React from 'react';
import { NextPage } from 'next';
import experienceData from '../components/Experience/Experiences.json';
import Experience from '../components/Experience/Experience';

const ProfessionalExperience: NextPage = () => {
    const h2Classes = 'title is-size-3 is-capitalized has-text-weight-semibold has-text-centered-mobile';

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <h2 style={{ marginBottom: '1rem' }} className={h2Classes}>
                        Professional Experience
                    </h2>
                </div>
                <div className="columns">
                    <p style={{ marginBottom: '2rem', textAlign: 'justify', padding: '1rem' }}>
                        During my professional career I've worked on many exciting projects from animation and front-end
                        to back-end business logic based applications. Without revealing proprietary information, here
                        are some high level details.
                    </p>
                </div>
                {experienceData &&
                    experienceData.map((item, index) => {
                        return (
                            <div className="columns" key={index}>
                                <Experience title={item.title} tech={item.tech} description={item.description} />
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default ProfessionalExperience;
