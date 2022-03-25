import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai';
import {FaSearch} from 'react-icons/fa';

function Header() {
	const navigate = useNavigate();

	return (
		<div className="w-full items-end py-3 px-10 flex z-10 bg-gradient-to-b from-black ">
			<span className="text-[#E50914] font-semibold text-3xl ">PwnFlix</span>
			<nav className="ml-20">
				<ul className="flex items-end h-full">
					<li className="mr-3 hover:text-gray-300 font-semibold cursor-pointer transition-all duration-150 ease-in-out pb-1">
						<Link to="/">
							<AiFillHome />
						</Link>
					</li>
					<li className="mr-3 hover:text-gray-300 font-semibold cursor-pointer transition-all duration-150 ease-in-out">
						Films
					</li>
					<li className="mr-3 hover:text-gray-300 font-semibold cursor-pointer transition-all duration-150 ease-in-out">
						Séries
					</li>
					<li className="mr-3 hover:text-gray-300 font-semibold cursor-pointer transition-all duration-150 ease-in-out">
						<Link to="/collections">Collections</Link>
					</li>
					<li className="ml-20 ">
						<div className="relative">
							<FaSearch className="absolute right-1 text-[#141414] top-1" />
							<input
								className="outline-none w-[300px] pl-1  mb-[4px] py-[2px] pr-6 rounded-sm text-[#141414] text-sm "
								type="text"
								placeholder="Recherche"
								onKeyDown={(e) => {
									console.log(e.key);
									e.key === 'Enter' &&
										navigate('/search', {state: {search: e.target.value}});
								}}
							/>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Header;
