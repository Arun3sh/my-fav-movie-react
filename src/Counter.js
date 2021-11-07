import { useState } from 'react';
// import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';

export function Counter() {
	const [like, setLike] = useState(0);
	const [dislike, setDisLike] = useState(0);
	return (
		<div className="counter-container">
			<Badge
				badgeContent={like}
				className="like-dislike"
				onClick={() => setLike(like + 1)}
				color="primary"
				aria-label="Like"
			>
				👍
			</Badge>
			<Badge
				badgeContent={dislike}
				className="like-dislike"
				onClick={() => setDisLike(dislike + 1)}
				color="error"
				aria-label="DisLike"
			>
				👎
			</Badge>
		</div>
	);
}
