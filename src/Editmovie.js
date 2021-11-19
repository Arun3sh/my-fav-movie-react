import { Button, InputBase } from '@mui/material';
import { useState } from 'react';
import './App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory, useParams } from 'react-router';

import { useContext } from 'react';
import { themeContext } from './App';

export function Editmovie({ movies, setMovies }) {
	const { id } = useParams();
	const [theme, setTheme] = useContext(themeContext);
	const [name, setName] = useState(movies[id].name);
	const [poster, setPoster] = useState(movies[id].poster);
	const [summary, setSummary] = useState(movies[id].summary);
	const [rating, setRating] = useState(movies[id].rating);
	const [trailer, setTrailer] = useState(movies[id].trailer);
	const history = useHistory();
	const inputstyle = {
		border: theme === 'dark' ? '1px solid green' : '1px solid yellow',
		color: theme === 'dark' ? 'white' : 'black',
		borderRadius: '20px',
	};

	const editMovie = () => {
		const editedMovie = { name, poster, summary, rating };
		const copyMovies = [...movies];
		copyMovies[id] = editedMovie;
		setMovies(copyMovies);
		history.push('/movies');
	};

	const clearEntry = () => {
		setName('');
		setPoster('');
		setSummary('');
		setRating('');
		setTrailer('');
	};
	return (
		<div>
			<h1>Update Movie</h1>
			<div className="addMovie">
				<form className="myForm" noValidate autoComplete="off" style={{ color: 'white' }}>
					<InputBase
						id="outlined-basic"
						placeholder="Movie Title"
						variant="outlined"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						style={inputstyle}
					/>

					<InputBase
						id="outlined-basic"
						placeholder="Poster link"
						variant="outlined"
						type="link"
						value={poster}
						onChange={(e) => setPoster(e.target.value)}
						style={inputstyle}
					/>

					<InputBase
						id="outlined-basic-multi"
						placeholder="Movie Summary"
						variant="outlined"
						type="text"
						multiline
						rows={4}
						value={summary}
						onChange={(e) => setSummary(e.target.value)}
						style={inputstyle}
					/>

					<InputBase
						id="outlined-basic"
						placeholder="Movie Rating"
						variant="outlined"
						type="text"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
						style={inputstyle}
					/>

					<InputBase
						id="outlined-basic"
						placeholder="Movie Trailer"
						variant="outlined"
						type="link"
						value={trailer}
						onChange={(e) => setTrailer(e.target.value)}
						style={inputstyle}
					/>

					<div className="add-cancel">
						<Button
							variant="outlined"
							type="button"
							className="addBtn"
							onClick={editMovie}
							startIcon={<EditIcon />}
						>
							Update Movie
						</Button>
						<Button
							variant="outlined"
							type="button"
							className="resetBtn"
							color="error"
							onClick={clearEntry}
							startIcon={<DeleteIcon />}
						>
							Reset
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
