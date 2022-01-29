import { ShowMovie } from './ShowMovie';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import { API } from '../global';

export function Movielsit() {
	const history = useHistory();
	const [movies, setMovies] = useState([]);
	const getMovies = () => {
		fetch(`${API}/`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((mvs) => setMovies(mvs));
	};
	useEffect(getMovies, []);
	const removeMovie = (id) => {
		fetch(`${API}/${id}`, {
			method: 'DELETE',
		}).then(() => getMovies());
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
						<Button size="small" color="error" aria-label="delete" onClick={() => removeMovie(id)}>
							Delete
						</Button>
					}
				/>
			))}
		</section>
	);
}
