import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Scene12_13Page({
  getVideos,
  setAudioAmbuPlayFunc,
  setAudioPeoplePlayFunc,
  audioPeopleIOSOnClick,
  audioAmbuIOSOnClick,
}) {
  const [scene, setScene] = React.useState("12-13");

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video12_13El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setAudioAmbuPlayFunc(true);
    setAudioPeoplePlayFunc(true);
    audioPeopleIOSOnClick();
    audioAmbuIOSOnClick();
  }, []);

  return (
    <div ref={containerEl} className="h-full">
      {scene === "12-13" && (
        <video
          ref={video12_13El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video12-13").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setTimeout(() => {
              containerEl.current.style.animation =
                "2s ease-in 0s 1 normal both running bgFadeOut";
            }, event.target.duration * 500);
            setTimeout(() => {
              navigate(`/scene14`);
              setAudioAmbuPlayFunc(false);
              setAudioPeoplePlayFunc(false);
            }, event.target.duration * 1000);
          }}
        ></video>
      )}
    </div>
  );
}
