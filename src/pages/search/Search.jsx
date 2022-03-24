import React from 'react';
import {useLocation} from 'react-router-dom';

function Search() {
	const location = useLocation();
	return (
		<>
			<div>{location.state.search}</div>
		</>
	);
}

export default Search;
