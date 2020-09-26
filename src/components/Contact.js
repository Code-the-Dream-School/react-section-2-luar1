import React, { Component } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaPhoneSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
class Contact extends Component {
	render() {
		return (
			<div className='info'>
				<IconContext.Provider value={{ style: { color: '#fe007d', size: '16px', verticalAlign: 'middle' } }}>
					<h1>Contact Me</h1>
					<p>I am available for any project. Feel free to send me a message.</p>
					<p>
						<FaPhoneSquare /> (714)000-0000
					</p>
					<p>
						<FaEnvelope /> <a href='mailto:luar_uidev@gmail.com'>luar_uidev@gmail.com</a>
					</p>
					<p>
						<FaGithubSquare /> <a href='https://github.com/luar1'>Github</a>
					</p>
				</IconContext.Provider>
			</div>
		);
	}
}

export default Contact;
