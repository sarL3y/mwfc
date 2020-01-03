import React from 'react';

import '../sass/pages/Home.scss';

export default function Home(props) {

    return (
        <main role="main">
            <div className="main-content">
                <section className="main-hero">
                    <div className="hero-img">
                        <img src={"/women_group.jpg"} alt="Women helping each other" />
                    </div>
                    <div className="hero-img-overlay">

                    </div>
                    <div className="teaser-hero-left">
                        <div className="main-headers">
                            <h1>MWFC</h1>
                            <h2>Moorpark Women's Fortnightly Club</h2>
                            <p>Women dedicated to serving the community since 1905</p>

                            <div className="hero-cta bold">
                                <a href="#Events">JOIN US!</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="teaser-content">
                        <div className="teaser-hero-left">

                            <div className="teaser-header">
                                <h3>Events</h3>
                            </div>
                        </div>

                        <div className="teaser-events">
                            <div className="event">

                            </div>
                            <div className="event">
                                
                            </div>
                            <div className="event">
                            
                            </div>
                            <div className="event">
                            
                            </div>
                            <div className="event">
                            
                            </div>
                            <div className="event">
                            
                            </div>
                        </div>
                </section>

                <section className="teaser-content">
                        
                        <div className="teaser-board">
                            <div className="board">
                                <div className="board-members">
                                    <div className="board-member-large">

                                    </div>
                                    <div className="board-member-large">
                                        
                                    </div>
                                    <div className="board-member-large">
                                    
                                    </div>
                                </div>
                                
                                <div className="board-members">
                                    <div className="board-member-small">
                                    
                                    </div>
                                    <div className="board-member-small">
                                    
                                    </div>
                                    <div className="board-member-small">
                                    
                                    </div>
                                    <div className="board-member-small">
                                    
                                    </div>
                                    <div className="board-member-small">
                                    
                                    </div>
                                    <div className="board-member-small">
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teaser-hero-right">

                            <div className="teaser-header">
                                <h3>Board</h3>
                            </div>
                        </div>
                </section>

                <section className="teaser-content">
                        <div className="teaser-hero-left">
                            <div className="teaser-header">
                                <h3>History</h3>
                            </div>
                        </div>

                        <div className="teaser-history">
                            <div className="history">
                                
                            </div>
                        </div>
                </section>
            </div>
        </main>
    )
}

