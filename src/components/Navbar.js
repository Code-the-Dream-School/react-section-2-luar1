import React, { Component } from 'react';
import Navitem from './Navitem';
import logo from '../img/logo.png';
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			NavItemActive : ''
		};
	}
	activeitem = (x) => {
		if (this.state.NavItemActive.length > 0) {
			document.getElementById(this.state.NavItemActive).classList.remove('active');
		}
		this.setState({ NavItemActive: x }, () => {
			document.getElementById(this.state.NavItemActive).classList.add('active');
		});
	};
	render() {
		return (
			<nav>
				<img src={logo} alt='Logo' className='logo' />
				<ul>
					<Navitem item='Home' tolink='/' activec={this.activeitem} />
					<Navitem item='About' tolink='/about' activec={this.activeitem} />
					<Navitem item='Work' tolink='/work' activec={this.activeitem} />
					<Navitem item='Contact' tolink='/contact' activec={this.activeitem} />
				</ul>
			</nav>
		);
	}
}

export default Navbar;
