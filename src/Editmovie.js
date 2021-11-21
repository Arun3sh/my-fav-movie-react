import { Button, InputBase } from '@mui/material';
import { useState, useEffect } from 'react';
import './App.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory, useParams } from 'react-router';

export function Editmovie() {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	useEffect(() => {
		fetch(`https://61988da7164fa60017c230e5.mockapi.io/myfavmovie/${id}`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((mv) => setMovie(mv));
	}, []);

	return movie ? <Editform movie={movie} /> : '';
}

function Editform({ movie }) {
	const [name, setName] = useState(movie.name);
	const [poster, setPoster] = useState(movie.poster);
	const [summary, setSummary] = useState(movie.summary);
	const [rating, setRating] = useState(movie.rating);
	const [trailer, setTrailer] = useState(movie.trailer);
	// console.log(name);
	const history = useHistory();

	const inputstyle = {
		border: '1px solid green',
		borderRadius: '20px',
	};

	const editMovie = () => {
		const editedMovie = { name, poster, summary, rating, trailer };
		fetch(`https://61988da7164fa60017c230e5.mockapi.io/myfavmovie/${movie.id}`, {
			method: 'PUT',
			body: JSON.stringify(editedMovie),
			headers: { 'Content-type': 'application/json' },
		})
			// copyMovies[id] = editedMovie;
			// setMovie(copyMovies);
			.then(() => history.push('/movies'));
	};

	const clearEntry = () => {
		setName(movie.name);
		setPoster(movie.poster);
		setSummary(movie.summary);
		setRating(movie.rating);
		setTrailer(movie.trailer);
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
