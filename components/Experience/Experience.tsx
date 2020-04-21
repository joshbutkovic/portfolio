import React, { useEffect } from 'react';
import Link from 'next/link';
import './Experience.scss';

interface ExperienceProps {
    title: string;
    tech: Array<string>;
    description: string;
    isProject?: boolean;
    link?: string;
    linkTitle?: string;
}

function Experience({ title, tech, description, isProject, link, linkTitle }: ExperienceProps) {
    return (
        <section className="hero experience card">
            <div className="body">
                <div className="container">
                    <div className="columns">
                        <article className="media">
                            <div className="media-content">
                                <div className="content">
                                    <h4 className="is-6 experience-title">{title}</h4>
                                    <p className="experience-tech">
                                        {tech &&
                                            tech.map((item, index) => {
                                                return (
                                                    <span key={index} className="tag is-info">
                                                        {item}
                                                    </span>
                                                );
                                            })}
                                    </p>
                                    <p>{description}</p>
                                    {isProject && (
                                        <Link href={link}>
                                            <a className="is-small is-link" title={linkTitle} target="_blank">
                                                {linkTitle} Live Demo
                                            </a>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
