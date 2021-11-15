import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { themeContext } from './App';

export function Nav() {
	const [theme, setTheme] = useContext(themeContext);
	const style = {
		backgroundColor: theme === 'dark' ? 'black' : 'white',
	};
	const linkstyle = { color: theme === 'dark' ? 'var(--primary) !important' : 'black!important' };

	return (
		<div className="navbar">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" className="navbar-box" style={style}>
					<Toolbar>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							<ul className="navlinks" style={linkstyle}>
								<li>
									<Link style={linkstyle} to="/">
										Home
									</Link>
								</li>
								<li>
									<Link style={linkstyle} to="/about">
										About
									</Link>
								</li>
								<li>
									<Link style={linkstyle} to="/movies">
										Movielist
									</Link>
								</li>
								<li style={linkstyle}>
									<Link to="/movies/add">Add Movie</Link>
								</li>
							</ul>
						</Typography>
						<Button onClick={() => setTheme('white')}>Light</Button>
						<Button onClick={() => setTheme('dark')}>Dark</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<hr />
		</div>
	);
}
