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
			{movies.map(({ id, name, poster, summary, rating, trailer }, index) => (
				<ShowMovie
					name={name}
					poster={poster}
					summary={summary}
					rating={rating}
					trailer={trailer}
					id={id}
					key={index}
					updateButton={
						<Button
							size="small"
							color="primary"
							aria-label="edit"
							onClick={() => history.push(`/movies/edit/${id}`)}
						>
							Edit
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
