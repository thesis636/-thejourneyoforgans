import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import mp3 from "./sfx/audio-motorcycle.mp3";

export function AudioChapter8Motorcycle() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);

  function onPlay() {
    const audio = document.getElementById("audio-chapter-8-motorcycle");
    audio.play();
  }

  function onPause() {
    const audio = document.getElementById("audio-chapter-8-motorcycle");
    audio.pause();
  }

  React.useEffect(() => {
    if (backgroundReducer.chapter === "8-motorcycle") {
      onPlay();
    }

    if (backgroundReducer.chapter !== "8-motorcycle") {
      onPause();
    }
  }, [backgroundReducer.chapter]);
  return (
    <audio id="audio-chapter-8-motorcycle">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  );
}

export default AudioChapter8Motorcycle;
