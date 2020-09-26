import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/work'>
					<Works />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</div>
		</Router>
	);
}

export default App;
