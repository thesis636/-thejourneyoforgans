import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import mp3 from "./sfx/audio.mp3";

export function AudioChapter11() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);

  function onPlay() {
    const audio = document.getElementById("audio-chapter-11");
    audio.play();
  }

  function onPause() {
    const audio = document.getElementById("audio-chapter-11");
    audio.pause();
  }

  React.useEffect(() => {
    if (backgroundReducer.chapter === "11") {
      onPlay();
    }
    if (backgroundReducer.chapter > "11") {
      onPause();
    }
  }, [backgroundReducer.chapter]);
  return (
    <audio id="audio-chapter-11">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  );
}

export default AudioChapter11;
