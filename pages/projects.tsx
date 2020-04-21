import React from 'react';
import { NextPage } from 'next';
import projectData from '../Projects.json';
import Experience from '../components/Experience/Experience';

const ProfessionalExperience: NextPage = () => {
    const h2Classes = 'title is-size-3 is-capitalized has-text-weight-semibold has-text-centered-mobile';

    return (
        <section className="section" style={{ minHeight: '85vh' }}>
            <div className="container">
                <div className="columns">
                    <h2 style={{ marginBottom: '1rem' }} className={h2Classes}>
                        Projects
                    </h2>
                </div>
                <div className="columns">
                    <p className="experience-intro-text">
                        Here are some samples of my work that is deployed to public domains. Github pages is an amazing
                        free tool!
                    </p>
                </div>
                {projectData &&
                    projectData.map((item, index) => {
                        return (
                            <div className="columns" key={index}>
                                <Experience
                                    title={item.title}
                                    tech={item.tech}
                                    description={item.description}
                                    link={item.link}
                                    linkTitle={item.linkTitle}
                                    isProject
                                />
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default ProfessionalExperience;
