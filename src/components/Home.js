import React, { Component } from 'react';
import profilepic from '../img/me.jpeg';

class Home extends Component {
	render() {
		return (
			<div className='info home'>
				<img src={profilepic} alt='ProfilePic' className='profilepic' />
				<div className='info'>
					<h1>
						<span className='pink'>Hi, I’m Lu.</span> An UI Designer studying to be a Front-end Developer
					</h1>
					<p>
						I always want to create cool things thats why I love Design and Cooking. Born and raised in Mexico. I have
						worked as a web designer and UI Designer for more than 10 years.{' '}
					</p>
				</div>
			</div>
		);
	}
}

export default Home;
