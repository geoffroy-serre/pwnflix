import React, {useRef} from 'react';
import MovieCard from '../movieCard/MovieCard';
import {scroll} from '../../utils/scroll';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

function Carousel({dataArray, genre}) {
	const ref = useRef();
	console.log(genre);
	return (
		<div className="relative ">
			<button
				className="absolute z-10 bg-black bg-opacity-50 top-16 left-2 rounded-full px-2 h-[30px] text-white font-bold hover:bg-opacity-100 transition-all ease-in-out duration-200 "
				onClick={() => scroll(ref, -800)}
			>
				<FiChevronLeft />
			</button>
			<button
				className="absolute z-10 bg-black bg-opacity-50 top-16 right-2 rounded-full px-2 py-2 text-white font-bold hover:bg-opacity-100 transition-all ease-in-out duration-200 "
				onClick={() => scroll(ref, 800)}
			>
				<FiChevronRight />
			</button>
			<div
				ref={ref}
				className="scroll-smooth scrollbar-hide flex gap-3 overflow-x-auto overflow-y-none"
			>
				{dataArray &&
					dataArray?.map((data) => {
						return <MovieCard key={data.id} media={data} genre={genre} />;
					})}
			</div>
		</div>
	);
}

export default Carousel;
