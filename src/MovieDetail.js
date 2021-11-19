import { useHistory, useParams } from 'react-router';
import { Button } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Error } from './ErrorPage';
import { useContext } from 'react';
import { themeContext } from './App';

export function MovieDetail({ movies }) {
	const [theme, setTheme] = useContext(themeContext);
	const { id } = useParams();
	const history = useHistory();
	// console.log(id.match(/^[0-9]+$/) != null);
	const color = { color: theme === 'dark' ? 'white' : 'black' };

	const movie = movies[id];
	if ((movies.length > id) & (id.match(/^[0-9]+$/) != null)) {
		return (
			<div className="movie-detail">
				<div className="trailer">
					<iframe width="100%" height="450" src={movie.trailer} title={movie.name}></iframe>
				</div>
				<div className="heading-summary">
					<div className="heading">
						<h2 style={color}>{movie.name}</h2>
						<h2 className="rating" style={color}>
							⭐{movie.rating}
						</h2>
					</div>
					<div className="summary" style={color}>
						{movie.summary}
					</div>
				</div>
				<div className="nav-button">
					<Button
						variant="outlined"
						onClick={() => history.goBack()}
						startIcon={<KeyboardBackspaceRoundedIcon />}
					>
						Back
					</Button>
				</div>
			</div>
		);
	} else {
		return <Error />;
	}
}
