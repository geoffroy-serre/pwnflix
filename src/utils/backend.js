import axios from 'axios';

export const postMovie = (movieId) => {
	return axios
		.post(`http://${process.env.REACT_APP_BACK_SERVER}/api/movies`, {movieId})
		.then((res) => {
			return res;
		});
};

export const deleteMovie = (movieId) => {
	return axios
		.delete(`http://${process.env.REACT_APP_BACK_SERVER}/api/movies/${movieId}`)
		.then((res) => {
			console.log('delete', res);
			return res;
		})
		.catch((err) => {
			console.log('delete', err);
		});
};

export const getMovie = (movieId) => {
	return axios
		.get(`http://${process.env.REACT_APP_BACK_SERVER}/api/movies/${movieId}`)
		.then((res) => {
			return res;
			// console.log('axios request', res);
		})
		.catch((err) => {
			// console.log('erreur', err.response.status);
		});
};

export const isMovieSaved = (movieId) => {
	return axios
		.get(
			`http://${process.env.REACT_APP_BACK_SERVER}/api/movies/favorite/${movieId}`
		)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			// console.log('erreur', err.response.status);
		});
};

export const getSavedMovies = () => {
	return axios
		.get(`http://${process.env.REACT_APP_BACK_SERVER}/api/movies`)
		.then((res) => {
			return res;
			// console.log('axios request', res);
		})
		.catch((err) => {
			// console.log('erreur', err.response.status);
		});
};
