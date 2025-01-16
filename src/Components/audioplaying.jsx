import React, { useRef } from "react";
import { S1 } from "../assets/songs";
const AudioPlayer = () => {
    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    };

    return (
        <div>
            <audio ref={audioRef} src={S1}></audio>
            <button onClick={playAudio}>Play</button>
            <button onClick={pauseAudio}>Pause</button>
        </div>
    );
};

export default AudioPlayer;
