import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import mp3 from "./sfx/sound_bg.mp3";

export function BackgroundAudio() {
  const layoutReducer = useSelector((state) => state.layoutReducer);
  const bgAudio = document.getElementById("background-audio");
  React.useEffect(() => {
    if (layoutReducer.step > 0) {
      console.log(bgAudio);
      bgAudio.play();
    }
  }, [layoutReducer.step]);
  return (
    <audio id="background-audio">
      <source src={mp3} type="audio/mpeg" />
    </audio>
  );
}

export default BackgroundAudio;
