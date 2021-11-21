import { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Addmovie } from './movie/AddMovie';
import { Editmovie } from './movie/Editmovie';
import { Nav } from './movie/Navbar';
import { Error } from './movie/ErrorPage';
import { MovieDetail } from './movie/MovieDetail';
import { Movielsit } from './movie/Movielist';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function App() {
	const [mode, setMode] = useState('dark');

	const theme = createTheme({
		palette: {
			mode: mode,
		},
	});

	const stylePaper = { borderRadius: '0', minHeight: '100vh' };
	return (
		<ThemeProvider theme={theme}>
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
							<Movielsit />
						</Route>

						<Route path="/movies/add">
							<Addmovie />
						</Route>

						<Route path="/movies/edit/:id">
							<Editmovie />
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
