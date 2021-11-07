import { useState } from 'react';
import { Counter } from './Counter';
import { Button } from '@mui/material';

export function ShowMovie({ name, poster, summary, rating }) {
	const [show, setShow] = useState(true);
	const styles = { display: show ? 'block' : 'none' };
	return (
		<section className="movie">
			<div className="imageContainer">
				<img className="poster" src={poster} alt={name} />
			</div>
			<div className="otherContainer">
				<div className="heading">
					<h2>{name}</h2>
					<h2 className="rating">⭐{rating}/10</h2>
				</div>

				<p style={styles}>{summary}</p>
				<Button
					id="description"
					variant="outlined"
					onClick={() => setShow(!show)}
					// style={{ outline: 'none', border: 'none' }}
				>
					{!show ? '✔' : '❌'} Description
				</Button>

				<Counter />
			</div>
		</section>
	);
}
