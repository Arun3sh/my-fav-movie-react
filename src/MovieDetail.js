import { useParams } from 'react-router';

export function MovieDetail({ movies }) {
	const { id } = useParams();
	const movie = movies[id];

	return (
		<div className="movie-detail">
			<div className="trailer">
				<iframe width="100%" height="450" src={movie.trailer} title={movie.name}></iframe>
			</div>
			<div className="heading">
				<h2>{movie.name}</h2>
				<h2 className="rating">⭐{movie.rating}</h2>
			</div>
			<div className="summary">{movie.summary}</div>
		</div>
	);
}
