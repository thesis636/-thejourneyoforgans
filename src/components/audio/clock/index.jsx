import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import mp3 from "./sfx/4.mp3";

export function ClockAudio() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const audio = document.getElementById("clock-audio");
  
  React.useEffect(() => {
    if (backgroundReducer.step === 1) {
      console.log(audio);
      audio.play();
    }
  }, [backgroundReducer.step]);
  return (
    <audio id="clock-audio">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  );
}

export default ClockAudio;
