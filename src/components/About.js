import React, { Component } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { IconContext } from 'react-icons';
class About extends Component {
	render() {
		return (
			<IconContext.Provider value={{ style: { color: '#fe007d', size: '16px', verticalAlign: 'middle' } }}>
				<div className='info'>
					<h1>About Me</h1>
					<p>
						I've always been passionate about design, I like to create user interfaces, but my desire to make something
						static to something functional led me to learn code.
					</p>
					<div>
						<div className='info'>
							<h1>Skills</h1>
							<p>HTML, CSS, JavaScript, React</p>
							<p>Curious, Goal-setter, Sense of humor, Problem solver, Eye for Details, Team-Player. </p>
							<h1>Education</h1>
							<h3>Software Development Engineering </h3>
							<h5>
								<FaCalendar /> 2018 - Ongoin
							</h5>
							<p className='pink'>
								<a href='https://www.unadmexico.mx/' target='_blank'>
									UNADM
								</a>
							</p>
							<hr className='dashed' />
							<h3>Intensive training in software development.</h3>
							<h5>
								<FaCalendar /> Jun 2020 - Ongoin
							</h5>
							<p className='pink'>
								<a href='https://www.codethedream.org/' target='_blank'>
									Code The Dream
								</a>
							</p>
							<hr className='dashed' />
						</div>
					</div>
				</div>
			</IconContext.Provider>
		);
	}
}

export default About;
