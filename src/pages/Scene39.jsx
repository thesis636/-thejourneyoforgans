import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene39 from "../components/Scene39";

export default function Scene39Page({ getVideos }) {
  const [scene, setScene] = React.useState("39");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video35El = React.useRef(null);
  const scene39El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "39") {
      if (scene39El.current) {
        scene39El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene39El.current]);

  return (
    <div
      ref={containerEl}
      className="flex relative justify-center h-full items-center"
      onClick={() => {
        if (scene === "39") {
          if (actionClick) {
            setActionClick(false);
            scene39El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              navigate("/scene40-44");
            }, 2000);
          }
        }
      }}
    >
      {scene === "39" && <Scene39 ref={scene39El}></Scene39>}

      {scene === "39" && (
        <video
          ref={video35El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video39_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
