import Grid from '@material-ui/core/Grid';
import React from 'react';
import WorksData from './WorksData';

class Works extends React.Component {
	state = {
		booksData : []
	};

	componentDidMount() {
		fetch('https://api.airtable.com/v0/appxKphuaWNwwMXI8/Table%201?api_key=keyMNcGMCmlUnyUIV')
			.then((res) => res.json())
			.then((res) => {
				console.log(res.records);
				this.setState({ booksData: res.records });
			})
			.catch((error) => console.log(error));
	}
	render() {
		const { booksData } = this.state;
		return (
			<div className='info'>
				<h1>My Work</h1>

				<Grid container direction='row' spacing={2}>
					{booksData.map((book) => <WorksData {...book.fields} key={book.fields.id} />)}
				</Grid>
			</div>
		);
	}
}
export default Works;
