import { useState } from 'react';
import './App.css';
import { ShowMovie } from './ShowMovie';
import { Switch, Route, Link } from 'react-router-dom';
import { InnitialMovie } from './InnitialMovie';
import { Addmovie } from './AddMovie';

function App() {
	const MyFavMovie = InnitialMovie();
	const [movies] = useState(MyFavMovie);

	//setMovies([...movies, addedmovies]);
	// };
	return (
		<div className="App">
			{/* <RouterLink /> */}
			<ul>
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

			<Switch>
				<Route exact path="/">
					Home
				</Route>
				<Route path="/about">This is where you can find my fav movies!</Route>
				<Route exact path="/movies">
					<section className="fav-movies">
						{movies.map(({ name, poster, summary, rating }, index) => (
							<ShowMovie
								name={name}
								poster={poster}
								summary={summary}
								rating={rating}
								key={index}
							/>
						))}
					</section>
				</Route>
				<Route path="/movies/add">
					<Addmovie />
				</Route>
				<Route path="/movies/edit">"Edit movies here"</Route>
				<Route path="/movies/delete">"Delete movies here"</Route>
			</Switch>
		</div>
	);
}

export default App;
