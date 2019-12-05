import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import volume from "./assets/volume.png";
import play from "./assets/play.png";

function TurnTable({ source, isPlay, isPause, volumeRange }) {
  const [isPlaying, setPlay] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    setPlay(!audioRef.current.paused);
  }, []);

  useEffect(() => {
    if (audioRef) {

      if (isPlay) {
        setPlay(true);
          audioRef.current.play();
      }

      if (isPause) {
        setPlay(false);
        audioRef.current.pause();
      }

      if (volumeRange) {
        audioRef.current.volume = Number(volumeRange);
      }
    }
  }, [isPlay, isPause, volumeRange, source]);

  const playOrPause = () => {
    if (!audioRef) return;
    if (audioRef.current.paused) {
      setPlay(true);
      return audioRef.current.play();
    }
    setPlay(false);
    audioRef.current.pause();
  };

  const stopPlayback = () => {
    if (!audioRef) return;
    setPlay(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div>
      <audio ref={audioRef} src={source} controls={false} />
      <div className="box">
        <div>
          <div className="stop" onClick={stopPlayback}>
            STOP
          </div>
          <div className="volume">
            Volume
            <img
              src={volume}
              alt="volume"
              style={{ transform: "rotate(180deg)" }}
            />
          </div>
          <div className="play-btn" onClick={playOrPause}>
            <img src={play} alt="play" className="play-image" />
          </div>
        </div>
        <div className={`disc ${isPlaying ? "rotating" : ""}`}>
          <div className="inner-circle"></div>
        </div>
        <div
          style={{ transform: `${isPlaying ? "" : "rotate(9deg)"}` }}
          className="rod"
        ></div>
      </div>
    </div>
  );
}

export default TurnTable;
