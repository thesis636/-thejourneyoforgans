import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene63 from "../components/Scene63";
import Scene64 from "../components/Scene64";
import Scene65 from "../components/Scene65";

export default function Scene63_65Page({ getVideos }) {
  const [scene, setScene] = React.useState("63");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video63_65El = React.useRef(null);
  const scene63El = React.useRef(null);
  const scene64El = React.useRef(null);
  const scene65El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "63") {
      if (scene63El.current) {
        scene63El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene63El.current]);

  React.useEffect(() => {
    if (scene === "64") {
      if (scene64El.current) {
        scene64El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene64El.current]);

  React.useEffect(() => {
    if (scene === "65") {
      if (scene65El.current) {
        scene65El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene65El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "63") {
          if (actionClick) {
            setActionClick(false);
            scene63El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("64");
            }, 2000);
          }
        }

        if (scene === "64") {
          if (actionClick) {
            setActionClick(false);
            scene64El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("65");
            }, 2000);
          }
        }

        if (scene === "65") {
          if (actionClick) {
            setActionClick(false);
            scene65El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene66-67`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "63" && <Scene63 ref={scene63El}></Scene63>}
      {scene === "64" && <Scene64 ref={scene64El}></Scene64>}
      {scene === "65" && <Scene65 ref={scene65El}></Scene65>}

      {(scene === "63" || scene === "64" || scene === "65") && (
        <video
          ref={video63_65El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video63-65_loop").urlBlob
          }
        ></video>
      )}
    </div>
  );
}
