import React from 'react';

function Hero({media}) {
	let title = '';

	media.media_type === 'tv' ? (title = media.name) : (title = media.title);

	return (
		<div className="relative h-[700px] w-screen ">
			<div className="w-full absolute bottom-0 px-6 py-6 bg-black bg-opacity-50">
				<h2 className="text-7xl mb-10  font-semibold">{title}</h2>
				<p className="w-5/12 line-clamp-5 text-justify">{media.overview}</p>
			</div>
			<div>
				<img
					className="object-cover w-full h-[700px]"
					src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
					alt={`Poster de ${title}`}
				/>
			</div>
		</div>
	);
}

export default Hero;
