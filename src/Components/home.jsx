import React, { useState, useRef } from "react";
import Card from "./Card";
import Footer from "./Footer";
import { S1 } from "../assets/songs";
import { Pause } from "../assets";

const Home = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPausePopup, setShowPausePopup] = useState(false);
    const audioRef = useRef(null);

    const handleCardClick = (song) => {
        if (audioRef.current) {
            if (currentSong === song && isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
                triggerPausePopup();
            } else {
                setCurrentSong(song);
                audioRef.current.src = song;
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const triggerPausePopup = () => {
        setShowPausePopup(true);
        setTimeout(() => {
            setShowPausePopup(false);
        }, 1000);
    };

    return (
        <div>
            <div className="text-white p-3 mt-8 items-center h-auto">
                <Card
                    image="https://i.scdn.co/image/ab67616d00001e02bca30634e6cad10b97c03d21"
                    title="Ae Dil Hai Mushkil (Original Motion Picture Soundtrack)"
                    subtitle="Pritam"
                    onClick={() => handleCardClick(S1)}
                />
            </div>

            {showPausePopup && (
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-full p-2 shadow-lg flex items-center justify-center">
                    <img src={Pause} alt="Pause" className="w-8 h-8" />
                </div>
            )}

            <Footer
                isPlaying={isPlaying}
                togglePlayPause={togglePlayPause}
                currentSong={currentSong}
            />
            <audio ref={audioRef}></audio>
        </div>
    );
};

export default Home;
