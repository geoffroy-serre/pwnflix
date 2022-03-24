import React, {useEffect, useRef, useState} from 'react';
import Carousel from '../../components/carousel/Carousel';
import Hero from '../../components/hero/Hero';
import MovieCard from '../../components/movieCard/MovieCard';

function Main() {
	const [trendingMovies, setTrendingMovies] = useState();
	const [trendingSeries, setTrendingSeries] = useState();
	const [moviesGenres, setMoviesGenres] = useState();
	const [seriesGenres, setSeriesGenres] = useState();

	let randomTrendingMedia = {};
	let tempConcatArray = [];

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
		)
			.then((res) => res.json())
			.then((data) => {
				setTrendingMovies(data.results);
			});

		fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
		)
			.then((res) => res.json())
			.then((data) => setMoviesGenres(data.genres));

		fetch(
			`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
		)
			.then((res) => res.json())
			.then((data) => setSeriesGenres(data.genres));

		fetch(
			`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
		)
			.then((res) => res.json())
			.then((data) => setTrendingSeries(data.results));
	}, []);

	if (trendingMovies && trendingSeries) {
		tempConcatArray = [...trendingMovies, ...trendingSeries];
		randomTrendingMedia =
			tempConcatArray[Math.floor(Math.random() * tempConcatArray.length)];
	}

	return (
		<section className="overflow-hidden">
			<Hero media={randomTrendingMedia} />
			<div className="mb-6 mt-6 px-10  ">
				<h2 className="text-lg font-semibold  text-left">Films en tendances</h2>
				<Carousel dataArray={trendingMovies} genre={moviesGenres} />
			</div>
			<div className="mb-6 mt-6 px-10 ">
				<h2 className="text-lg font-semibold  text-left">
					Séries en tendances
				</h2>
				<Carousel dataArray={trendingSeries} genre={seriesGenres} />
			</div>
		</section>
	);
}

export default Main;
