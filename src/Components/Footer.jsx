import React from "react";
import {
    FaBackward,
    FaPlay,
    FaPause,
    FaForward,
    FaRedo,
    FaVolumeUp,
} from "react-icons/fa";


const Footer = ({ isPlaying, togglePlayPause, currentSong }) => {
    return (
        <div className="bg-black text-white p-4 flex items-center justify-between">
            
            <div className="flex items-center space-x-4">
                {currentSong && (
                    <span className="text-sm truncate w-[200px]">
                        Playing: {currentSong.split("/").pop()}
                    </span>
                )}
            </div>

            
            <div className="flex items-center space-x-6">
                <FaRedo className="text-xl cursor-pointer hover:text-gray-400" />
                <FaBackward className="text-xl cursor-pointer hover:text-gray-400" />
                <button
                    className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full"
                    onClick={togglePlayPause}
                >
                    {isPlaying ? (
                        <FaPause className="text-xl" />
                    ) : (
                        <FaPlay className="text-xl" />
                    )}
                </button>
                <FaForward className="text-xl cursor-pointer hover:text-gray-400" />
            </div>

        
            <div className="flex items-center space-x-2">
                <FaVolumeUp className="text-xl cursor-pointer hover:text-gray-400" />
            </div>
        </div>
    );
};

export default Footer;
