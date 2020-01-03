import React from 'react';

import '../sass/components/Header.scss';

export default function Header(props) {
    return (
        <header className="header sticky">
            <nav role="navigation" className="main-nav">
                <div className="nav-logo bold">
                    <a href={'#Home'}>MWFC</a>
                </div>

                <div className="nav-links">
                    <div className="nav-link bold">
                        <a href={'#Events'}>Events</a>
                    </div>
                    <div className="nav-link bold">
                        <a href={'#Calendar'}>Calendar</a>
                    </div>
                    <div className="nav-link bold">
                        <a href={'#Board'}>Board</a>
                    </div>
                    <div className="nav-link bold">
                        <a href={'#About'}>About</a>
                    </div>
                    <div className="nav-link bold">
                        <a href={'#Payments'}>Payments</a>
                    </div>
                </div>
                
                <div className="nav-burger">

                </div>
            </nav>
        </header>
    )
}