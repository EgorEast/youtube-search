import React, { useEffect } from 'react';
import LoginPage from './components/LoginPage';
// import SearchPage from './components/SearchPage';
import users from './users.json';

function App() {
	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, []);
	return (
		<div>
			<LoginPage />
			{/* <SearchPage /> */}
		</div>
	);
}

export default App;
