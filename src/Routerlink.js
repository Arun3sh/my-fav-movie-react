import { Link } from 'react-router-dom';

export function Nav() {
	return (
		<div>
			<ul className="navlinks">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/movies">Movielist</Link>
				</li>
				<li>
					<Link to="/movies/add">Add Movie</Link>
				</li>
				<li>
					<Link to="/movies/edit">Edit Movie</Link>
				</li>
				<li>
					<Link to="/movies/delete">Delete Movie</Link>
				</li>
			</ul>

			<hr />
		</div>
	);
}
