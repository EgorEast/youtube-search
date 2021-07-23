import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SearchPage from './components/SearchPage';
import users from './users.json';

function App() {
	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, []);
	return (
		<BrowserRouter>
			<div className='container'>
				<Switch>
					<Route exact path='/' component={LoginPage} />
					<Route path='/search' component={SearchPage} />
					<Redirect to='/' />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
