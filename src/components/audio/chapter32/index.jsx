import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import mp3 from "./sfx/audio.mp3";

export function AudioChapter32() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);

  function onPlay() {
    const audio = document.getElementById("audio-chapter-32");
    audio.play();
  }

  function onPause() {
    const audio = document.getElementById("audio-chapter-32");
    audio.pause();
  }

  React.useEffect(() => {
    if (backgroundReducer.chapter >= "32") {
      onPlay();
    }

    if (backgroundReducer.chapter === "85") {
      onPause();
    }
  }, [backgroundReducer.chapter]);
  return (
    <audio id="audio-chapter-32">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  );
}

export default AudioChapter32;
