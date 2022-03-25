import axios from 'axios';
import React, {useEffect, useState} from 'react';
import MovieCard from '../../components/movieCard/MovieCard';
import {getSavedMovies} from '../../utils/backend';

function Collections() {
	const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
	const [bookmarkedSeries, setBookmarkedSeries] = useState([]);
	const [moviesGenres, setMoviesGenres] = useState();
	const [seriesGenres, setSeriesGenres] = useState();

	useEffect(() => {
		getSavedMovies().then((res) => {
			let tempArrayMovies = [];
			res.data.forEach((item) => {
				axios
					.get(
						`https://api.themoviedb.org/3/movie/${item.movieId}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
					)
					.then((res) => res.json())
					.then((data) => {
						tempArrayMovies.push(data);
					});
			});
			setBookmarkedMovies(tempArrayMovies);
		});

		axios
			.get(
				`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
			)
			.then((res) => res.json())
			.then((data) => setMoviesGenres(data.genres));

		axios
			.get(
				`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
			)
			.then((res) => res.json())
			.then((data) => setSeriesGenres(data.genres));
	}, []);

	console.log('bm', bookmarkedMovies);
	console.log('bs', bookmarkedSeries);
	console.log('mg', moviesGenres);
	console.log('sg', seriesGenres);

	return (
		<div>
			{bookmarkedMovies.map((item) => {
				// console.log('item', item);
				// if (item.media_type === 'tv') {
				return <MovieCard key={item.id} media={item} genre={moviesGenres} />;
				// 	}
				// 	return <MovieCard key={item.id} media={item} genre={moviesGenres} />;
			})}
		</div>
	);
}

export default Collections;
