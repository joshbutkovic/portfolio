import React from 'react';
import './Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faTerminal, faGlobe, faDatabase, faServer, faBrain } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SkillsProps {
    title: string;
}

interface CardListItem {
    label: string;
    icon: IconProp;
    items: Array<string>;
}

function Skills({ title }: SkillsProps) {
    const h1Classes = 'title is-size-4 is-capitalized has-text-weight-semibold has-text-centered-mobile';
    const h4Classes = 'is-size-6 is-capitalized has-text-weight-semibold has-text-centered-mobile';
    const cardColumnClasses = 'column is-4-desktop is-6-tablet has-text-centered';
    const languages: Array<string> = ['JavaScript', 'Java', 'Python', 'PHP'];
    const frontEndTech: Array<string> = ['React', 'Vue', 'Bulma', 'SASS/LESS', 'Flexbox', 'jQuery'];
    const frameworks = ['AEM', 'Django', 'Express', 'Laravel', 'Spring Boot', 'Wordpress'];
    const database: Array<string> = ['PostgreSQL', 'MSSQL', 'MySQL', 'SQLite', 'GraphQL', 'Rest'];
    const misc: Array<string> = ['Maven', 'NPM', 'Pip', 'Composer', 'Git', 'Jira'];
    const learningInterested: Array<string> = ['AWS', 'C#', 'Go', 'Docker', 'Fintech', 'AI'];

    const cardList: Array<CardListItem> = [
        {
            label: 'Languages',
            icon: faCode,
            items: languages,
        },
        {
            label: 'Front End Tech',
            icon: faGlobe,
            items: frontEndTech,
        },
        {
            label: 'Frameworks',
            icon: faServer,
            items: frameworks,
        },
        {
            label: 'Database',
            icon: faDatabase,
            items: database,
        },
        {
            label: 'Miscellaneous',
            icon: faTerminal,
            items: misc,
        },
        {
            label: 'Learning / Interested',
            icon: faBrain,
            items: learningInterested,
        },
    ];

    const renderCardList = (): Array<JSX.Element> => {
        let renderedList: Array<JSX.Element> = cardList.map((cardListItem: CardListItem, index1: number) => {
            return (
                <div className={cardColumnClasses} key={index1}>
                    <div className="card">
                        <div className="card-content">
                            <h4 className={h4Classes}>
                                <FontAwesomeIcon className="icon is-small" icon={cardListItem.icon} /> Languages
                            </h4>
                            <ul>
                                {cardListItem.items.map((item: string, index2: number) => {
                                    return <li key={index2}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        });
        return renderedList;
    };

    return (
        <section className="skills hero has-text-centered">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <h1 className={h1Classes}>{title}</h1>
                        </div>
                    </div>
                    <div className="columns is-multiline">{renderCardList()}</div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
