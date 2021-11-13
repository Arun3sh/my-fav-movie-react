import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory, useParams } from 'react-router';

export function Editmovie({ movies, setMovies }) {
	const { id } = useParams();
	const [name, setName] = useState(movies[id].name);
	const [poster, setPoster] = useState(movies[id].poster);
	const [summary, setSummary] = useState(movies[id].summary);
	const [rating, setRating] = useState(movies[id].rating);
	const [trailer, setTrailer] = useState(movies[id].trailer);
	const history = useHistory();

	const updateMovie = () => {
		const editedMovie = { name, poster, summary, rating };
		const copyMovies = [...movies];
		copyMovies[id] = editedMovie;
		setMovies(copyMovies);
		clearEntry();
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
				<form className="myForm" noValidate autoComplete="off">
					<TextField
						id="outlined-basic"
						label="Movie Title"
						variant="outlined"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<TextField
						id="outlined-basic"
						label="Poster link"
						variant="outlined"
						type="link"
						value={poster}
						onChange={(e) => setPoster(e.target.value)}
					/>

					<TextField
						id="outlined-multiline-static"
						label="Movie Summary"
						variant="outlined"
						type="text"
						multiline
						rows={4}
						value={summary}
						onChange={(e) => setSummary(e.target.value)}
					/>

					<TextField
						id="outlined-basic"
						label="Movie Rating"
						variant="outlined"
						type="text"
						value={rating}
						onChange={(e) => setRating(e.target.value)}
					/>

					<TextField
						id="outlined-basic"
						label="Movie Trailer"
						variant="outlined"
						type="link"
						value={trailer}
						onChange={(e) => setTrailer(e.target.value)}
					/>

					<div className="add-cancel">
						<Button
							variant="outlined"
							type="button"
							className="addBtn"
							onClick={updateMovie}
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
