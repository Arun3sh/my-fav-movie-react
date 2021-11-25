import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export function Nav({ mode, setMode }) {
	return (
		<div className="navbar">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" className="navbar-box">
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<ul className="navlinks">
								<li className="li-navbar">
									<Link to="/">
										<span style={{ color: 'blue' }}>Home</span>
									</Link>
								</li>
								<li className="li-navbar">
									<Link to="/about">
										<span style={{ color: 'blue' }}>About</span>
									</Link>
								</li>
								<li className="li-navbar">
									<Link to="/movies">Movies</Link>
								</li>
								<li className="li-navbar">
									<Link to="/movies/add">Add Movie</Link>
								</li>
								<li className="li-navbar-mode">
									<Button
										onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
										color="inherit"
									>
										{mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />} Mode
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
