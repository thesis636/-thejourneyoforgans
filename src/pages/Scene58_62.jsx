import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene58 from "../components/Scene58";
import Scene59 from "../components/Scene59";
import Scene60 from "../components/Scene60";
import Scene61 from "../components/Scene61";

export default function Scene58_62Page({ getVideos }) {
  const [scene, setScene] = React.useState("58");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video58_60El = React.useRef(null);
  const video61_62El = React.useRef(null);
  const scene58El = React.useRef(null);
  const scene59El = React.useRef(null);
  const scene60El = React.useRef(null);
  const scene61El = React.useRef(null);
  const scene62El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "58") {
      if (scene58El.current) {
        scene58El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene58El.current]);

  React.useEffect(() => {
    if (scene === "59") {
      if (scene59El.current) {
        scene59El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene59El.current]);

  React.useEffect(() => {
    if (scene === "60") {
      if (scene60El.current) {
        scene60El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene60El.current]);

  React.useEffect(() => {
    if (scene === "61") {
      if (scene61El.current) {
        scene61El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene61El.current]);

  React.useEffect(() => {
    if (scene === "62") {
      if (scene62El.current) {
        scene62El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene62El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "58") {
          if (actionClick) {
            setActionClick(false);
            scene58El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("59");
            }, 2000);
          }
        }

        if (scene === "59") {
          if (actionClick) {
            setActionClick(false);
            scene59El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("60");
            }, 2000);
          }
        }

        if (scene === "60") {
          if (actionClick) {
            setActionClick(false);
            scene60El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("61");
            }, 2000);
          }
        }

        if (scene === "61") {
          if (actionClick) {
            setActionClick(false);
            scene61El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene63-65`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "58" && <Scene58 ref={scene58El}></Scene58>}
      {scene === "59" && <Scene59 ref={scene59El}></Scene59>}
      {scene === "60" && <Scene60 ref={scene60El}></Scene60>}
      {scene === "61" && <Scene61 ref={scene61El}></Scene61>}

      {(scene === "58" || scene === "59" || scene === "60") && (
        <video
          ref={video58_60El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video58-60_loop").urlBlob
          }
        ></video>
      )}

      {(scene === "60" || scene === "61" || scene === "62") && (
        <video
          ref={video61_62El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={getVideos.find((video) => video.name === "video61-62").urlBlob}
        ></video>
      )}
    </div>
  );
}
