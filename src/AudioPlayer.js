import React, { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.css';

function AudioPlayer({ src, playNow }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {  
        togglePlay();
    },[playNow])


    useEffect(() => {
        const audioElement = audioRef.current;
        const updateTime = () => {
            setCurrentTime(audioElement.currentTime);
        };
        const updateDuration = () => {
            setDuration(audioElement.duration);
        };
        audioElement.addEventListener('timeupdate', updateTime);
        audioElement.addEventListener('loadedmetadata', updateDuration);
        return () => {
            audioElement.removeEventListener('timeupdate', updateTime);
            audioElement.removeEventListener('loadedmetadata', updateDuration);
        };
    }, []);

    return (
        <div>
            <audio ref={audioRef} src={src}></audio>
            <div className={styles.audioControls}>
                <button className={styles.controlButton} onClick={togglePlay}>{isPlaying ? <span> &#10074;&#10074; </span> : <span>&#9654;</span>}</button>
                <div className={styles.timeline}>
                    <div
                        className={styles.timelineProgress}
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;
