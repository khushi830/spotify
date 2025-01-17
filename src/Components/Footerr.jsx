import React from 'react';
import { FaBackward, FaPlay, FaPause, FaForward, FaRedo, FaVolumeUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-black text-white p-4 flex items-center justify-between">
    
            <div className="flex items-center space-x-2">
                <span className="text-sm">00:03</span>
                <div className="w-[500px] h-1 bg-gray-600 rounded-full relative">
                    <div className="h-full bg-white rounded-full" style={{ width: '20%' }}></div>
                </div>
                <span className="text-sm">05:22</span>
            </div>

            
            <div className="flex items-center space-x-6">
                <FaRedo className="text-xl cursor-pointer hover:text-gray-400" />
                <FaBackward className="text-xl cursor-pointer hover:text-gray-400" />
                <button className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
                    <FaPause className="text-xl" />
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
