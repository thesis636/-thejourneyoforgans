import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene66 from "../components/Scene66";
import Scene67 from "../components/Scene67";

export default function Scene66_67Page({ getVideos }) {
  const [scene, setScene] = React.useState("66");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video66_67El = React.useRef(null);
  const scene66El = React.useRef(null);
  const scene67El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "66") {
      if (scene66El.current) {
        scene66El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene66El.current]);

  React.useEffect(() => {
    if (scene === "67") {
      if (scene67El.current) {
        scene67El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene67El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "66") {
          if (actionClick) {
            setActionClick(false);
            scene66El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("67");
            }, 2000);
          }
        }

        if (scene === "67") {
          if (actionClick) {
            setActionClick(false);
            scene67El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene68`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "66" && <Scene66 ref={scene66El}></Scene66>}
      {scene === "67" && <Scene67 ref={scene67El}></Scene67>}

      {(scene === "66" || scene === "67") && (
        <video
          ref={video66_67El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video66-67_loop").urlBlob
          }
        ></video>
      )}
    </div>
  );
}
