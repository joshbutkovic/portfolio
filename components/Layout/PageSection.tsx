import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';

interface PageSectionProps {
    children: React.ReactNode;
    container?: boolean;
    classes?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ container, children, classes }) => {
    return (
        <div className={`page-section${container ? ' container' : ''}${classes ? ` ${classes}` : ''}`}>
            <div className="section">
                <div className="back-to-top-wrapper" style={{ opacity: 0.6 }}>
                    <ScrollUpButton
                        ContainerClassName="scroll-up-container"
                        EasingType="easeInOutCubic"
                        AnimationDuration={250}
                        ShowAtPosition={500}
                        style={{
                            width: '43px',
                            height: '43px',
                            right: '35px',
                            bottom: '35px',
                            borderRadius: '4px',
                            backgroundColor: '#b5b5b5',
                        }}
                        ToggledStyle={{
                            width: '43px',
                            height: '43px',
                            right: '35px',
                            bottom: '35px',
                        }}
                    />
                </div>
                {children}
            </div>
        </div>
    );
};

export default PageSection;
