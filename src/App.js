import { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { InnitialMovie } from './InnitialMovie';
import { Addmovie } from './AddMovie';
import { Editmovie } from './Editmovie';
import { Nav } from './Routerlink';
import { Error } from './ErrorPage';
import { MovieDetail } from './MovieDetail';
import { Movielsit } from './Movielist';

function App() {
	const MyFavMovie = InnitialMovie();
	const [movies, setMovies] = useState(MyFavMovie);

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
					<Movielsit movies={movies} setMovies={setMovies} />
				</Route>

				<Route path="/movies/add">
					<Addmovie movies={movies} setMovies={setMovies} />
				</Route>

				<Route path="/movies/edit/:id">
					<Editmovie movies={movies} setMovies={setMovies} />
				</Route>

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
