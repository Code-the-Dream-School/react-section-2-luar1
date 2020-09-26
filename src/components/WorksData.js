import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root               : {
		flexGrow : 1,
		margin   : 20
	},
	gutterTopAndBottom : {
		margin : 20
	},
	card               : {
		maxWidth : 345
	},
	media              : {
		height : 350
	},
	button             : {
		border       : '1px solid #fe007d',
		borderRadius : 3,
		color        : 'black',
		height       : 48,
		padding      : '0 30px'
	}
}));

function WorksData({ title, role, link, description, coverImage }) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid item xs={10}>
				<Card className={classes.card}>
					<CardMedia className={classes.media} image={coverImage} title='Works' />
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{title}
						</Typography>
						<Typography variant='body2' color='textSecondary' component='p'>
							Role {role}
						</Typography>
					</CardContent>

					<CardContent>
						<Typography paragraph variant='body2'>
							{description.length > 150 ? description.slice(0, 150) + `...` : description}
						</Typography>
					</CardContent>
					<CardActions>
						<Button className={classes.button} href={link} target='_blank'>
							Launch
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</div>
	);
}

export default WorksData;
