import { useHistory, useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Error } from './ErrorPage';
import { API } from '../global';

export function MovieDetail() {
	const { id } = useParams();
	const history = useHistory();

	const [movie, setMovie] = useState({});
	useEffect(() => {
		fetch(`${API}/${id}`, { method: 'GET' })
			.then((data) => data.json())
			.then((mv) => setMovie(mv));
	}, []);

	if (movie.id !== undefined) {
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
