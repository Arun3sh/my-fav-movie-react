import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';

export function ShowMovie({ name, poster, summary, rating, index }) {
	const [show, setShow] = useState(true);
	const styles = { display: show ? 'block' : 'none' };
	return (
		<div className="movie" key={index}>
			<div className="imageContainer">
				<img className="poster" src={poster} alt={name} />
			</div>
			<div className="otherContainer">
				<div className="heading">
					<h2>
						{name}
						<IconButton aria-label="fingerprint" color="primary" onClick={() => setShow(!show)}>
							{!show ? <ExpandMore /> : <ExpandLess />}
						</IconButton>
					</h2>

					<h2 className="rating">⭐{rating}</h2>
				</div>

				<p style={styles}>{summary}</p>

				<Counter />
			</div>
		</div>
	);
}
