import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';

export function ShowMovie({ name, poster, summary, rating, index }) {
	const [show, setShow] = useState(true);
	const styles = { display: show ? 'block' : 'none' };
	return (
		<div className="movie" key={index}>
			{/* new way */}
			<Card sx={{ maxWidth: 300 }} className="card">
				{/* contents */}

				<CardMedia component="img" height="140" image={poster} alt={name} className="image" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div" className="heading">
						<h4>
							{name}
							<IconButton aria-label="fingerprint" color="primary" onClick={() => setShow(!show)}>
								{!show ? <ExpandMore /> : <ExpandLess />}
							</IconButton>
						</h4>
						<h2 className="rating">⭐{rating}</h2>
					</Typography>
					<Typography variant="body2" color="text.secondary" style={styles}>
						{summary}
					</Typography>
					<Counter />
				</CardContent>

				{/* For action buttons */}
				<CardActions className="buttons">
					<Button size="small" color="primary">
						Edit
					</Button>
					<Button size="small" color="error">
						Delete
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}
