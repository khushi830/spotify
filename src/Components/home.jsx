import React, { useState, useRef } from "react";
import Card from "./card";
import Footer from "./Footer";
import { S1 } from "../assets/songs";
import AudioPlayer from "./audioplaying";

const Home = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleCardClick = (song) => {
        if (audioRef.current) {
            if (currentSong === song && isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
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

    return (
        <div>
            <div className=" text-white  p-3 mx-6 mt-20 items-center border h-auto">
                <Card
                    image="https://i.scdn.co/image/ab67616d00001e02bca30634e6cad10b97c03d21"
                    title="Ae Dil Hai Mushkil (Original Motion Picture Soundtrack)"
                    subtitle="Pritam"
                    onClick={() => handleCardClick(S1)}
                    />
            </div>
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
