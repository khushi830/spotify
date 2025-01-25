import { useState } from "react";
import { Logo, Hamburger, Spotify } from "../assets";
import { Home, Viewbox, Search, Install, Cross, Songsign } from "../assets";


const Navbar = () => {
    const [Isopen, setIsopen] = useState(false);
    const togglemenu = () => {
        setIsopen(!Isopen);
    };
    const navItems = [
        { id: 1, text: 'Spotify' },
        { id: 2, text: 'Home' },
        { id: 3, text: 'Search' },


    ];

    return (
        <div className="flex cursor-auto justify-between items-center sticky top-0 z-[20] -m-4 bg-[#000000] w-full h-[64px]  p-[12px]">

            <div className="hidden md:block">
                <div className="  flex items-center">
                    <a href="/">
                        <img src={Logo} alt="logo" className="w-[3rem]" />
                    </a>
                </div>
            </div>
            <div className="block md:hidden">
                <div className="  flex items-center gap-6">
                    <a href="/" className="flex justify-center items-center text-[#fff] gap-3 font-bold p-[4px]  mx-2">
                        <img src={Logo} alt="logo" className="w-[3rem]" />
                        <span>Spotify</span>
                    </a>
                    <span className=" bg-[#1F1F1F]  rounded-full"><a href="/"><img src={Search} alt="Search" className=" w-[3rem] p-[8px] md:w-[4rem] md:px-[12px]" /></a></span>
                </div>
            </div>


            <div className="flex items-center">
                <button className="hidden md:block bg-[#1F1F1F] p-[12px] rounded-full">
                    <a href="/">
                        <img src={Home} alt="home" className="w-[24px] h-full" />
                    </a>
                </button>
                <div className="hidden md:block  items-center px-[8px] bg-black md:bg-[#1F1F1F]  w-[360px] md:w-[400px] lg:w-[500px] h-full g-[#1F1F1F] rounded-full md:ml-2">
                    <span className="flex justify-center items-center">
                        <span className="bg-[#1F1F1F]  rounded-full"><a href="/"><img src={Search} alt="Search" className=" w-[3rem] p-[8px] md:w-[4rem] md:px-[12px]" /></a></span>
                        <input
                            type="text"
                            placeholder="What do you want to play?"
                            className=" hidden md:block text-white placeholder-[#7c7c7c] bg-[#1F1F1F]  outline-none w-full  h-[48px] md:p-[12px] rounded-full"
                        />
                        <div className=" hidden md:block items-center px-[12px]">
                            <span className="h-full w-[10px] bg-[#7c7c7c]"> </span>
                            <a href="/">
                                <img src={Viewbox} alt="Viewbox" className="w-[16px] h-[16px] ml-2 fill-[#faebd7]" />
                            </a>
                        </div>
                    </span>
                </div>

            </div>


            <span className="hidden md:block">
                <div className="flex items-center h-[48px]">
                    <a
                        href="/"
                        className="hidden lg:block  items-center text-[#B3B3B3] font-bold p-[4px] mx-2"
                    >
                        <span className="flex justify-center items-center"><img src={Install} alt="Install" className="w-[16px] h-[16px] mr-2" />
                            <span>Install</span></span>
                    </a>
                    <button className="text-[#B3B3B3] mx-2">Sign Up</button>
                    <button className="bg-[#FFFFFF] text-[#000000] px-[24px] py-[8px]  font-bold rounded-full">
                        Log in
                    </button>
                </div>
            </span>
            <div className="  flex justify-center md:hidden items-center">
                <a href="/" className="flex justify-center items-center gap-6">
                    <button className="bg-[#FFFFFF] text-[#000000] px-[20px] py-[8px]  font-bold rounded-full">
                        Open App
                    </button>
                    <button onClick={togglemenu} style={{ zIndex: 1000 }}>
                        <img src={Isopen ? Cross : Hamburger} alt="hamburger" className="w-[2rem]" />
                    </button>

                </a>
            </div>
            {Isopen ? (
                <div
                    className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${Isopen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <a href="/" className="mb-2 text-white font-bold hover:text-gray-400 flex items-center">
                        <img src={Logo} alt="Home" className="w-5 h-5 mr-2" />
                        Spotify
                    </a>
                    <a href="/" className="mb-2 text-white hover:text-gray-400 flex items-center">
                        <img src={Home} alt="Home" className="w-5 h-5 mr-2" />
                        Home
                    </a>
                    <a href="/search" className="mb-2 text-white hover:text-gray-400 flex items-center">
                        <img src={Search} alt="Search" className="w-5 h-5 mr-2" />
                        Search
                    </a>
                    <a href="/play" className="text-white hover:text-gray-400 flex items-center">
                        <img src={Songsign} alt="Play Song" className="w-5 h-5 mr-2" />
                        Play Song
                    </a>
                </div>
            ) : null}



        </div>
    );
};

export default Navbar;
