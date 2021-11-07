import { Switch, Route, Link } from 'react-router-dom';
import App from './App';
export function RouterLink() {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/dashboard">Movielist</Link>
				</li>
			</ul>

			<hr />

			<Switch>
				<Route exact path="/">
					<App />
				</Route>
				<Route path="/about">
					<App />
				</Route>
				<Route path="/movielist">
					<App />
				</Route>
			</Switch>
		</div>
	);
}
