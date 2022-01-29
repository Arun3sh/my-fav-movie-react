import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import '../../src/App.css';
import '../../src/App';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory, useParams } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API } from '../global';

export function Editmovie() {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);
	useEffect(() => {
		fetch(`${API}/${id}`, {
			method: 'GET',
		})
			.then((data) => data.json())
			.then((mv) => setMovie(mv));
	}, []);

	return movie ? <Editform movie={movie} /> : '';
}

// this is a higher order function
function Editform({ movie }) {
	const history = useHistory();

	const inputstyle = {
		marginTop: '15px',
	};

	const editMovie = (editedMovie) => {
		fetch(`${API}/${movie.id}`, {
			method: 'PUT',
			body: JSON.stringify(editedMovie),
			headers: { 'Content-type': 'application/json' },
		}).then(() => history.push('/movies'));
	};

	const formValidationSchema = yup.object({
		name: yup.string().required('Movie name is required'),
		poster: yup
			.string()
			.min(5, 'Must be greater than 5 characters')
			.required('Movie Poster is required'),
		summary: yup
			.string()
			.min(5, 'Must be more than 5 characters')
			.required('Summary of the movie is required'),
		trailer: yup
			.string()
			.min(5, 'Must be more than 5 characters')
			.required('Embeded Trailer link is required'),
		rating: yup
			.number()
			.positive('Value must be positive')
			.transform((value) => (isNaN(value) ? undefined : value))
			.max(10, 'Value must be between 0 - 10')
			.required('Rating must be between 0 - 10'),
	});
	const { errors, handleSubmit, handleBlur, handleChange, touched, values, resetForm } = useFormik({
		initialValues: {
			name: `${movie.name}`,
			poster: `${movie.poster}`,
			rating: `${movie.rating}`,
			summary: `${movie.summary}`,
			trailer: `${movie.trailer}`,
		},
		validationSchema: formValidationSchema,

		onSubmit: (values) => {
			editMovie(values);

			resetForm();
		},
	});

	return (
		<div>
			<h1>Update Movie</h1>
			<div className="addMovie">
				<form
					className="myForm"
					onSubmit={handleSubmit}
					autoComplete="off"
					style={{ color: 'white' }}
				>
					<TextField
						id="outlined-basic"
						name="name"
						label="Movie Title"
						variant="outlined"
						type="text"
						value={values.name}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.name && touched.name}
						helperText={errors.name && touched.name ? errors.name : ''}
					/>

					<TextField
						id="outlined-basic"
						name="poster"
						label="Poster link"
						variant="outlined"
						type="link"
						value={values.poster}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.poster && touched.poster}
						helperText={errors.poster && touched.poster ? errors.poster : ''}
					/>

					<TextField
						id="outlined-basic-multi"
						name="summary"
						label="Movie Summary"
						variant="outlined"
						type="text"
						multiline
						rows={4}
						value={values.summary}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.summary && touched.summary}
						helperText={errors.summary && touched.summary ? errors.summary : ''}
					/>

					<TextField
						id="outlined-basic"
						name="rating"
						label="Movie Rating"
						variant="outlined"
						type="text"
						value={values.rating}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.rating && touched.rating}
						helperText={errors.rating && touched.rating ? errors.rating : ''}
					/>

					<TextField
						id="outlined-basic"
						name="trailer"
						label="Movie Trailer"
						variant="outlined"
						type="link"
						value={values.trailer}
						onChange={handleChange}
						onBlur={handleBlur}
						style={inputstyle}
						error={errors.trailer && touched.trailer}
						helperText={errors.trailer && touched.trailer ? errors.trailer : ''}
					/>

					<div className="add-cancel">
						<Button
							variant="outlined"
							type="submit"
							className="addBtn"
							color="success"
							startIcon={<EditIcon />}
						>
							Update Movie
						</Button>
						<Button
							variant="outlined"
							type="button"
							className="resetBtn"
							color="error"
							onClick={resetForm}
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
