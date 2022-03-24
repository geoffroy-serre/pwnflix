import React from 'react';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';
import {FiHeart} from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa';

function MovieCard({media, genre}) {
	const {isShowing, toggle} = useModal();
	const title = media.media_type === 'tv' ? media.name : media.title;

	return (
		<React.Fragment>
			<div
				className="cursor-pointer relative  border-2 border-transparent hover:border-white  transition-all ease-in-out duration-200 rounded-md min-w-[300px] hover:border-opacity-50"
				onClick={toggle}
			>
				<h2 className=" w-full absolute bottom-2 px-3 py-2 font-semibold bg-black  bg-opacity-30  truncate ">
					{title}
					<FiHeart className="absolute top-1/2 -translate-y-1/2 right-2" />
				</h2>
				<img
					className="object-fill rounded-md"
					src={`https://image.tmdb.org/t/p/w500${media.backdrop_path}`}
					alt={`Poster du film ${media.title}`}
				/>
			</div>
			<Modal isShowing={isShowing} close={toggle} media={media} genre={genre} />
		</React.Fragment>
	);
}

export default MovieCard;
