import { Logo, Home, Search, Viewbox, Hamburger } from '../assets';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [islistOpen, setIslistOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const togglelist = () => {
        setIslistOpen(!islistOpen);
    };

    return (
        <nav className="flex justify-between bg-black h-auto fixed top-0 w-full items-center px-3 py-2">
            <div className="flex items-center">
                <a href="/">
                    <img src={Logo} alt="Spotify Logo" className="w-[3rem]" />
                </a>
            </div>

            <div className="flex items-center space-x-4">
                <button>
                    <span className="hidden sm:block items-center justify-center w-12 h-12 rounded-full bg-[#1f1f1f] hover:bg-gray-700 p-3">
                        <a href="/"><img src={Home} alt="Home" className="w-[1.5rem] justify-center" /></a>
                    </span>
                </button>

                <div className="flex items-center md:bg-[#1f1f1f] bg-black text-gray-400   rounded-full md:px-2  w-[400px] md:w-[500px]">
                    <span className="hidden sm:block items-center justify-center w-12 h-12 bg-[#1f1f1f] rounded-full p-2">
                        <a href="/"><img src={Search} alt="Search" className="w-7 mr-2 text-gray-400 item center" /></a>
                    </span>

                    <input
                        type="text"
                        placeholder="What do you want to play?"
                        className="hidden md:block bg-transparent outline-none text-white w-full text-lg"
                    />
                    <span className="hidden md:block border-l border-gray-600 h-6  p-1 "></span>
                    <button className="hidden md:block items-center p-2" onClick={togglelist}>
                        <a href="/">
                            <img src={islistOpen ? "/path-to-close-icon.svg" : Viewbox} alt="Viewbox" className="w-[1.5rem]" />
                        </a>
                    </button>
                </div>
            </div>

            <div className="flex space-x-4">
                <button className="hidden sm:block text-gray-400 hover:text-white">Sign up</button>
                <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200">
                    <span>Log in</span>
                </button>
                <button className="sm:hidden text-2xl font-bold" onClick={toggleMenu}>
                    <img src={isMenuOpen ? "/path-to-close-icon.svg" : Hamburger} alt="Menu Toggle" />
                </button>

                
                {isMenuOpen ? (
                    <div className="flex flex-col bg-gray-900 p-4 rounded-sm absolute right-0 top-16">
                        <button
                            className="text-white self-end mb-2 hover:text-gray-400"
                            onClick={toggleMenu}
                        >
                            ✖ 
                        </button>
                        <a href="/home" className="mb-2 text-white hover:text-gray-400 flex items-center">
                            <img src={Home} alt="Home" className="w-5 h-5 mr-2" />
                            Home
                        </a>
                        <a href="/search" className="mb-2 text-white hover:text-gray-400 flex items-center">
                            <img src={Search} alt="Search" className="w-5 h-5 mr-2" />
                            Search
                        </a>
                        <a href="/play" className="text-white hover:text-gray-400 flex items-center">
                            <img src="" alt="Play Song" className="w-5 h-5 mr-2" />
                            Play Song
                        </a>
                    </div>
                ) : null}
                {islistOpen ? (
                    <div className="flex flex-col bg-gray-900 p-4 rounded-sm absolute right-0 top-16">
                        <button
                            className="text-white self-end mb-2 hover:text-gray-400"
                            onClick={togglelist}
                        >
                            ✖ 
                        </button>
                        <li></li>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

export default Navbar;
