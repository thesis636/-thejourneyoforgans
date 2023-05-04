import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene82 from "../components/Scene82";
import Scene83 from "../components/Scene83";

export default function Scene82_83Page({ getVideos }) {
  const [scene, setScene] = React.useState("82");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video82_83El = React.useRef(null);
  const scene82El = React.useRef(null);
  const scene83El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "82") {
      if (scene82El.current) {
        scene82El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene82El.current]);

  React.useEffect(() => {
    if (scene === "83") {
      if (scene83El.current) {
        scene83El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene83El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "82") {
          if (actionClick) {
            setActionClick(false);
            scene82El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("83");
            }, 2000);
          }
        }

        if (scene === "83") {
          if (actionClick) {
            setActionClick(false);
            scene83El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene84-85`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "82" && <Scene82 ref={scene82El}></Scene82>}
      {scene === "83" && <Scene83 ref={scene83El}></Scene83>}

      {(scene === "82" || scene === "83") && (
        <video
          ref={video82_83El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video82-83_loop").urlBlob
          }
        ></video>
      )}
    </div>
  );
}
