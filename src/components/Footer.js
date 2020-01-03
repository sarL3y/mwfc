import React from 'react';

import '../sass/components/Footer.scss';

export default function Footer(props) {
    return (
        <footer className="footer">
            <nav role="navigation" className="footer-nav">
                <div className="footer-left">
                    <div className="footer-nav-headers">
                        <div className="footer-nav-logo">
                            MWFC
                        </div>
                        <div className="footer-nav-title">Moorpark Women's Fortnightly Club</div>
                    </div>
                    
                    <div className="footer-nav-links">
                        <div>
                            Events
                        </div>
                        <div>
                            Calendar
                        </div>
                        <div>
                            Board
                        </div>
                        <div>
                            About
                        </div>
                        <div>
                            Payments
                        </div>
                        <div>
                            <a href="https://www.facebook.com/MPFortnightly/">Facebook</a>
                        </div>
                    </div>

                    <div className="footer-contact-card">
                        <div className="footer-contact-info">
                            <p>Contact</p>
                            <p>MWFC</p>
                            <p>P.O. Box 432</p>
                            <p>Moorpark, CA 93020</p>
                        </div>
                    </div>
                </div>

                <div className="copyright-tag">
                    Designed and developed by: 
                    <a href="https://bytapper.com"> Matt Tapper</a>
                </div>
            </nav>
        </footer>
    )
}