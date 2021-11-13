import { ShowMovie } from './ShowMovie';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';

export function Movielsit({ movies, setMovies }) {
	const history = useHistory();
	const removeMovie = (index) => {
		const removeMovieIndex = index;
		const remainingMovies = movies.filter((mv, idx) => idx !== removeMovieIndex);
		setMovies(remainingMovies);
	};
	return (
		<section className="fav-movies">
			{movies.map(({ name, poster, summary, rating }, index) => (
				<ShowMovie
					name={name}
					poster={poster}
					summary={summary}
					rating={rating}
					index={index}
					key={index}
					updateButton={
						<Button
							size="small"
							color="primary"
							aria-label="edit"
							onClick={() => history.push(`/movies/edit/${index}`)}
						>
							Update
						</Button>
					}
					deleteButton={
						<Button
							size="small"
							color="error"
							aria-label="delete"
							onClick={() => removeMovie(index)}
						>
							Delete
						</Button>
					}
				/>
			))}
		</section>
	);
}
