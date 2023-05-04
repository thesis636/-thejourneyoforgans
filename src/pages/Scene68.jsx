import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene68 from "../components/Scene68";

export default function Scene68Page({ getVideos }) {
  const [scene, setScene] = React.useState("68");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video68El = React.useRef(null);
  const scene68El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "68") {
      if (scene68El.current) {
        scene68El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene68El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "68") {
          if (actionClick) {
            setActionClick(false);
            scene68El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate("/scene69-74");
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "68" && <Scene68 ref={scene68El}></Scene68>}

      {scene === "68" && (
        <video
          ref={video68El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video68_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
