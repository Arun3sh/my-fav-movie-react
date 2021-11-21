import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export function Nav({ mode, setMode }) {
	const styles = { marginRight: '20px' };
	return (
		<div className="navbar">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" className="navbar-box">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<ul className="navlinks">
								<li style={styles}>
									<Link to="/">
										<span style={{ color: 'blue' }}>Home</span>
									</Link>
								</li>
								<li style={styles}>
									<Link to="/about">
										<span style={{ color: 'blue' }}>About</span>
									</Link>
								</li>
								<li style={styles}>
									<Link to="/movies">Movielist</Link>
								</li>
								<li style={styles}>
									<Link to="/movies/add">Add Movie</Link>
								</li>
								<li style={{ marginLeft: 'auto', color: 'white' }}>
									<Button
										onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
										color="inherit"
									>
										{mode === 'light' ? 'Dark' : 'Light'} Mode
									</Button>
								</li>
							</ul>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<hr />
		</div>
	);
}
