import React, { ReactChild } from 'react';
import './Mission.scss';

interface MissionProps {
    children: ReactChild;
}

function Mission({ children }: MissionProps) {
    return (
        <section className="mission hero card">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <p className="is-size-6 mission-statement">{children}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;
