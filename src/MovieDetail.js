import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';

import { Button } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Error } from './ErrorPage';
// import { useContext, useEffect } from 'react';
// import { themeContext } from './App';

export function MovieDetail() {
	// const [theme, setTheme] = useContext(themeContext);
	const { id } = useParams();
	const history = useHistory();
	// console.log(id.match(/^[0-9]+$/) != null);
	// const color = { color: theme === 'dark' ? 'white' : 'black' };

	const [movie, setMovie] = useState({});
	useEffect(() => {
		fetch(`https://61988da7164fa60017c230e5.mockapi.io/myfavmovie/${id}`, { method: 'GET' })
			.then((data) => data.json())
			.then((mv) => setMovie(mv));
	});
	// const movie = movies[id];
	if (id.match(/^[0-9]+$/) != null) {
		return (
			<div className="movie-detail">
				<div className="trailer">
					<iframe width="100%" height="450" src={movie.trailer} title={movie.name}></iframe>
				</div>
				<div className="heading-summary">
					<div className="heading">
						<h2>{movie.name}</h2>
						<h2 className="rating">⭐{movie.rating}</h2>
					</div>
					<div className="summary">{movie.summary}</div>
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
