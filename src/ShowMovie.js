import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { themeContext } from './App';

export function ShowMovie({ name, poster, summary, rating, index, updateButton, deleteButton }) {
	const [theme, setTheme] = useContext(themeContext);
	const [show, setShow] = useState(true);
	const styles = { display: show ? 'block' : 'none', color: theme === 'dark' ? 'white' : 'black' };
	const history = useHistory();

	const style = {
		backgroundColor: theme === 'dark' ? 'black' : 'white',
	};

	const color = { color: theme === 'dark' ? 'white' : 'black' };

	return (
		<div className="movie">
			<Card sx={{ maxWidth: 300 }} className="card" style={style}>
				{/* contents */}
				<img src={poster} alt={name} className="image" />

				<CardContent>
					<Typography gutterBottom variant="h5" component="div" className="heading">
						<h4 style={color}>
							<span style={color}>{name}</span>
							<IconButton aria-label="Expand" color="primary" onClick={() => setShow(!show)}>
								{!show ? <ExpandMore /> : <ExpandLess />}
							</IconButton>
							<IconButton
								aria-label="To Trailer"
								color="primary"
								onClick={() => history.push(`/movies/${index}`)}
							>
								<InfoIcon />
							</IconButton>
						</h4>
						<h2 className="rating" style={color}>
							⭐{rating}
						</h2>
					</Typography>
					<Typography variant="body2" color="text.secondary" style={styles}>
						{summary}
					</Typography>
					<Counter />
				</CardContent>

				{/* For action buttons */}
				<CardActions className="buttons">
					{/* <Button
						size="small"
						color="primary"
						onClick={() => history.push(`/movies/edit/${index}`)}
					>
						Edit
					</Button> */}
					{updateButton}
					{deleteButton}
				</CardActions>
			</Card>
		</div>
	);
}
