import { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Addmovie } from './AddMovie';
import { Editmovie } from './Editmovie';
import { Nav } from './Navbar';
import { Error } from './ErrorPage';
import { MovieDetail } from './MovieDetail';
import { Movielsit } from './Movielist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {
	// const MyFavMovie = InnitialMovie();
	const [movies, setMovies] = useState([]);
	const [mode, setMode] = useState('dark');

	useEffect(() => {
		fetch(`https://61988da7164fa60017c230e5.mockapi.io/myfavmovie/`, { method: 'GET' })
			.then((data) => data.json())
			.then((mvs) => setMovies(mvs));
	}, []);

	const theme = createTheme({
		palette: {
			mode: mode,
		},
	});

	const stylePaper = { borderRadius: '0', minHeight: '100vh' };
	return (
		<ThemeProvider theme={theme} value={[mode]}>
			<Paper elevation={5} style={stylePaper}>
				<div className="App">
					{/* Navbar component */}
					<Nav mode={mode} setMode={setMode} />

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
							<MovieDetail />
						</Route>

						<Route path="**">
							<Error />
						</Route>
					</Switch>
				</div>
			</Paper>
		</ThemeProvider>
	);
}

export default App;
