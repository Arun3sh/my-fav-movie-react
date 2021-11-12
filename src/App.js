import { useState } from 'react';
import './App.css';
import { ShowMovie } from './ShowMovie';
import { Switch, Route, Redirect } from 'react-router-dom';
import { InnitialMovie } from './InnitialMovie';
import { Addmovie } from './AddMovie';
import { Nav } from './Routerlink';
import { Error } from './ErrorPage';
import { MovieDetail } from './MovieDetail';

function App() {
	const MyFavMovie = InnitialMovie();
	const [movies] = useState(MyFavMovie);

	//setMovies([...movies, addedmovies]);
	// };
	return (
		<div className="App">
			{/* Navbar component */}
			<Nav />

			<Switch>
				<Route exact path="/">
					Home
				</Route>

				<Route path="/about">This is where you can find my fav movies!</Route>

				<Route path="/films">
					<Redirect to="/movies" />
				</Route>

				<Route exact path="/movies">
					<section className="fav-movies">
						{movies.map(({ name, poster, summary, rating }, index) => (
							<ShowMovie
								name={name}
								poster={poster}
								summary={summary}
								rating={rating}
								index={index}
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

				<Route exact path="/movies/:id">
					<MovieDetail movies={movies} />
				</Route>

				<Route path="**">
					<Error />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
