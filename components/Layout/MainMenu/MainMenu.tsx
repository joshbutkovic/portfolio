import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import './MainMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Resource from '../../Resource/Resource';

interface MainMenuProps {
    title: string;
    subtitle: string;
}

const mainMenuBgImage = `${require('../../../public/images/hero.jpg')}`;

const navStyle = {
    background: 'linear-gradient(45deg, rgba(41,41,48,0.6) 0%, rgba(41,41,48,1) 100%)',
};

const mainMenuStyle = {
    backgroundImage: `url(${mainMenuBgImage})`,
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
};

function MainMenu({ title, subtitle }: MainMenuProps) {
    const [hamburgerActive, setHamburgerActive] = useState<boolean>(false);
    const [projectsText, setProjectsText] = useState<string>('Projects');
    const router = useRouter();
    const small = router.route !== '/';

    const handleInProgressLinkClick = (e: React.MouseEvent, type) => {
        setProjectsText('Coming Soon');
        setTimeout(() => {
            setProjectsText('Projects');
        }, 1500);
    };

    const renderBrand = (): JSX.Element => {
        return (
            <div className="container">
                <div className="navbar-brand">
                    <span
                        className={`navbar-burger burger${hamburgerActive ? ' is-active' : ''}`}
                        data-target="navbarMenuHero"
                        onClick={() => setHamburgerActive(!hamburgerActive)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                <div id="navbarMenuHero" className={`navbar-menu ${hamburgerActive ? ' is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link href="/">
                            <a className="navbar-item is-uppercase" title="Home">
                                Home
                            </a>
                        </Link>
                        <Link href="#">
                            <a
                                onClick={(e) => handleInProgressLinkClick(e, 'projects')}
                                className="navbar-item is-uppercase"
                                title="Projects"
                            >
                                {projectsText}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    };

    const renderHeroBody = (): JSX.Element => {
        return (
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column banner-intro">
                            <div className="banner-intro-container">
                                <figure className="image is-96x96">
                                    <img
                                        alt="Josh Github"
                                        className="josh-github"
                                        src={require('../../../public/images/josh_github.jpeg')}
                                    />
                                </figure>
                                <div className="banner-intro-copy-container">
                                    <p className="title has-text-centered-mobile">{title}</p>
                                    <p className="subtitle has-text-centered-mobile is-italic">
                                        {subtitle}
                                        <FontAwesomeIcon className="icon is-small" icon={faLaptopCode} />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="column"
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Resource />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section
            className={`hero is-small${small ? 'is-small' : 'is-large'}`}
            style={!small ? mainMenuStyle : navStyle}
        >
            <div className="hero-container">
                <div className="hero-head">
                    <nav className="navbar">{renderBrand()}</nav>
                </div>
                {!small && renderHeroBody()}
            </div>
        </section>
    );
}

export default MainMenu;
