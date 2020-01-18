import React from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.scss';

// const routes = [
//     { path: '/', name: 'home', Component: HomeContainer },
//     { path: '/about', name: 'about', Component: AboutContainer },
//     { path: '/portfolio', name: 'portfolio', Component: PortfolioContainer },
//     { path: '/contact', name: 'contact', Component: ContactContainer },
//     { path: '/success', name: 'success', Component: SuccessContainer }
// ];

function App() {
	return (
		<div className="app">
			<Header />

				<Home />
			<Footer />
		</div>
	);
}

export default App;
