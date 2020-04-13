import React from 'react';
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal, faGlobe, faDatabase, faServer, faBrain } from '@fortawesome/free-solid-svg-icons';

interface SkillsProps {
    title: string;
}

function Skills({ title }: SkillsProps) {
    const h1Classes = 'title is-size-4 is-capitalized has-text-weight-semibold has-text-centered-mobile';
    const h4Classes = 'is-size-6 is-capitalized has-text-weight-semibold has-text-centered-mobile';
    const languages: Array<string> = ['JavaScript', 'Java', 'Python', 'PHP'];
    const webTechnologies: Array<string> = ['React', 'Vue', 'Typescript', 'SASS/LESS', 'Flexbox', 'jQuery'];
    const frameworksAndLibraries = ['AEM', 'Django', 'Express', 'Laravel', 'Spring Boot', 'Wordpress'];
    const database: Array<string> = ['PostgreSQL', 'MSSQL', 'MySQL', 'SQLite', 'GraphQL', 'Rest'];
    const other: Array<string> = ['Maven', 'NPM', 'Pip', 'Composer', 'Git', 'Jira'];
    const learningInterested: Array<string> = ['AWS', 'C#', 'Go', 'Docker', 'Fintech', 'AI'];

    return (
        <section className="skills hero has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className={h1Classes}>{title}</h1>
                        </div>
                    </div>
                    <div className="columns is-multiline">
                        <div className="column is-4 has-text-centered">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className={h4Classes}>
                                        <FontAwesomeIcon className="icon is-small" icon={faCode} /> Languages
                                    </h4>
                                    <ul>
                                        {languages.map((item: string, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 has-text-centered">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className={h4Classes}>
                                        <FontAwesomeIcon className="icon is-small" icon={faGlobe} /> Web Technologies
                                    </h4>
                                    <ul>
                                        {webTechnologies.map((item: string, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 has-text-centered">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className={h4Classes}>
                                        <FontAwesomeIcon className="icon is-small" icon={faServer} /> Frameworks /
                                        Libraries
                                    </h4>
                                    <ul>
                                        {frameworksAndLibraries.map((item: string, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 has-text-centered">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className={h4Classes}>
                                        <FontAwesomeIcon className="icon is-small" icon={faDatabase} /> Database
                                    </h4>
                                    <ul>
                                        {database.map((item: string, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 has-text-centered">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className={h4Classes}>
                                        <FontAwesomeIcon className="icon is-small" icon={faTerminal} /> Other
                                    </h4>
                                    <ul>
                                        {other.map((item: string, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 has-text-centered">
                            <div className="card">
                                <div className="card-content">
                                    <h4 className={h4Classes}>
                                        <FontAwesomeIcon className="icon is-small" icon={faBrain} /> Learning /
                                        Interested
                                    </h4>
                                    <ul>
                                        {learningInterested.map((item: string, index) => {
                                            return <li key={index}>{item}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
