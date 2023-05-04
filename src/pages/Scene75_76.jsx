import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene75 from "../components/Scene75";
import Scene76 from "../components/Scene76";

export default function Scene75_76Page({ getVideos }) {
  const [scene, setScene] = React.useState("75");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video75_76El = React.useRef(null);
  const scene75El = React.useRef(null);
  const scene76El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "75") {
      if (scene75El.current) {
        scene75El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene75El.current]);

  React.useEffect(() => {
    if (scene === "76") {
      if (scene76El.current) {
        scene76El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene76El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "75") {
          if (actionClick) {
            setActionClick(false);
            scene75El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("76");
            }, 2000);
          }
        }

        if (scene === "76") {
          if (actionClick) {
            setActionClick(false);
            scene76El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene77-81`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "75" && <Scene75 ref={scene75El}></Scene75>}
      {scene === "76" && <Scene76 ref={scene76El}></Scene76>}

      {(scene === "75" || scene === "76") && (
        <video
          ref={video75_76El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video75-76_loop").urlBlob
          }
        ></video>
      )}
    </div>
  );
}
