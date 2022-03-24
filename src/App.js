import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import {pingBackEnd} from './utils/ping';

function App() {
	const [isBackOnline, setIsBackOnline] = useState(pingBackEnd());
	return (
		<React.Fragment>
			<BrowserRouter>
				<Header />
				<main className="">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/search" element={<Search />} />
					</Routes>
				</main>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
