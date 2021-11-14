import { Button } from '@mui/material';
import { useState } from 'react';
import './App.css';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router';

export function Addmovie({ movies, setMovies }) {
	const [name, setName] = useState('');
	const [poster, setPoster] = useState('');
	const [summary, setSummary] = useState('');
	const [rating, setRating] = useState('');
	const [trailer, setTrailer] = useState('');
	const history = useHistory();

	const addMovie = () => {
		const newMovie = { name, poster, summary, rating };

		setMovies([...movies, newMovie]);
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
			<h1>Add Movie</h1>
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
						type="text"
						value={trailer}
						onChange={(e) => setTrailer(e.target.value)}
					/>

					<div className="add-cancel">
						<Button
							variant="outlined"
							type="button"
							className="addBtn"
							onClick={addMovie}
							startIcon={<AddIcon />}
						>
							Add Movie
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
