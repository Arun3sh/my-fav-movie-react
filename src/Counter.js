import { useState } from 'react';
import { Button } from '@mui/material';

export function Counter() {
	const [like, setLike] = useState(0);
	const [dislike, setDisLike] = useState(0);
	return (
		<div className="counter-container">
			<Button variant="outlined" className="like-dislike" onClick={() => setLike(like + 1)}>
				👍{like}
			</Button>
			{/* <button className="like-dislike" onClick={() => setLike(like + 1)}>
				👍{like}
			</button> */}
			<Button variant="outlined" className="like-dislike" onClick={() => setDisLike(dislike + 1)}>
				👎{dislike}
			</Button>
			{/* <button className="like-dislike" onClick={() => setDisLike(dislike + 1)}>
				👎{dislike}
			</button> */}
		</div>
	);
}
