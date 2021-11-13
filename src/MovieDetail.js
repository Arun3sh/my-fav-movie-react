import { useHistory, useParams } from 'react-router';
import { Button } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Error } from './ErrorPage';

export function MovieDetail({ movies }) {
	const { id } = useParams();
	const history = useHistory();
	console.log(id.match(/^[0-9]+$/) != null);

	const movie = movies[id];
	if ((movies.length > id) & (id.match(/^[0-9]+$/) != null)) {
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
