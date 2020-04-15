import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './Resource.scss';

interface link {
    href: string;
    title: string;
    icon: JSX.Element;
}

function Resource() {
    const h4Classes: string = 'is-size-6 is-capitalized has-text-weight-semibold';
    const links: Array<link> = [
        {
            href: '/pdfs/JoshuaButkovicResume.pdf',
            title: 'Resume',
            icon: <FontAwesomeIcon className="icon is-medium" color="white" icon={faFileAlt} />,
        },
        {
            href: 'https://github.com/joshbutkovic',
            title: 'Github',
            icon: <FontAwesomeIcon className="icon is-medium" color="white" icon={faGithub} />,
        },
        {
            href: 'https://www.linkedin.com/in/josh-butkovic-3097384b/',
            title: 'Linkedin',
            icon: <FontAwesomeIcon className="icon is-medium" color="white" icon={faLinkedin} />,
        },
        {
            href: 'mailto:joshbutkovic@gmail.com',
            title: 'Email',
            icon: <FontAwesomeIcon className="icon is-medium" color="white" icon={faEnvelope} />,
        },
    ];

    return (
        <section className="resource hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-mobile is-multiline">
                        {links.map((item, index) => {
                            return (
                                <div className="column has-text-centered item-column" key={index}>
                                    <div className="item-container">
                                        <div className="item">
                                            <a rel="noreferrer" className="item-link" href={item.href} target="_blank">
                                                <h4 className={h4Classes}>{item.title}</h4>
                                                {item.icon}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resource;
