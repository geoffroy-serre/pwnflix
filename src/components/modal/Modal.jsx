import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {FiHeart} from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa';
import {FaTimesCircle} from 'react-icons/fa';

function Modal({isShowing, close, media, genre}) {
	const title = media.media_type === 'tv' ? media.name : media.title;
	const [isFavorite, setIsFavorite] = useState(true);
	let genreArray = [];

	media.genre_ids.forEach((id) => {
		genre?.forEach((genre) => {
			if (id === genre.id) {
				genreArray.push(genre.name);
			}
		});
	});
	return isShowing
		? ReactDOM.createPortal(
				<div className="select-none fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 ">
					<div className="fixed bg-[#141414] w-[800px] rounded-md">
						<FaTimesCircle
							className="cursor-pointer absolute top-2 right-3 text-2xl font-bold text-black opacity-50 hover:scale-110 hover:rotate-180 transition-all ease-in-out duration-200"
							onClick={() => close()}
						/>

						<div>
							<img
								src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
								alt={title}
								className="object-cover rounded-t-md w-full h-[450px]"
							/>
							<div className="p-6">
								<div className="relative">
									<h2 className="text-4xl mb-3">{title}</h2>
									{isFavorite ? (
										<FaHeart
											onClick={() => setIsFavorite(!isFavorite)}
											className=" cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 text-[#E50914] absolute top-1/2 right-2 -translate-y-1/2 text-2xl"
										/>
									) : (
										<FiHeart
											onClick={() => setIsFavorite(!isFavorite)}
											className=" cursor-pointer hover:scale-125 transition-all ease-in-out duration-200 absolute top-1/2 -translate-y-1/2 right-2 text-2xl"
										/>
									)}
								</div>

								<div className="flex items-end mb-10">
									<div className="text-xs underline mr-3">Genres: </div>
									<ul className="flex">
										{genreArray.map((genreName) => {
											return <li className="text-xs mr-1">{genreName}</li>;
										})}
									</ul>
								</div>

								<p className="text-sm text-justify mt-4 mb-5">
									{media.overview}
								</p>
							</div>
						</div>
					</div>
				</div>,
				document.body
		  )
		: null;
}

export default Modal;
