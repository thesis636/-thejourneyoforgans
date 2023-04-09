import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import mp3 from "./sfx/audio-bts.mp3";

export function AudioChapter8BTS() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);

  function onPlay() {
    const audio = document.getElementById("audio-chapter-8-bts");
    audio.play();
  }

  function onPause() {
    const audio = document.getElementById("audio-chapter-8-bts");
    audio.pause();
  }

  React.useEffect(() => {
    if (backgroundReducer.chapter === "8-bts") {
      onPlay();
    }

    if (backgroundReducer.chapter !== "8-bts") {
      onPause();
    }
  }, [backgroundReducer.chapter]);
  return (
    <audio id="audio-chapter-8-bts">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  );
}

export default AudioChapter8BTS;
