import React, { ReactChild } from 'react';
import './Mission.scss';

interface MissionProps {
    children: ReactChild;
}

function Mission({ children }: MissionProps) {
    const h1Classes = 'title is-size-4 is-capitalized has-text-weight-semibold has-text-centered-mobile';
    return (
        <section className="mission hero card">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div
                            className="column is-2 has-text-centered"
                            style={{ width: 'auto', display: 'flex', alignItems: 'center' }}
                        >
                            <figure className="image">
                                <img
                                    alt="Josh and Charlie"
                                    className="mission-image"
                                    src={require('../../public/images/josh-charlie.jpg')}
                                />
                            </figure>
                        </div>
                        <div className="column">
                            <h1 className={h1Classes}>I Love Code</h1>
                            <p className="is-size-6 mission-statement">{children}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;
