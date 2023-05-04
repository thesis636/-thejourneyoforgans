import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene30 from "../components/Scene30";
import Scene31 from "../components/Scene31";
import Scene32 from "../components/Scene32";

export default function Scene30_32Page({ getVideos }) {
  const [scene, setScene] = React.useState("30");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video30El = React.useRef(null);
  const video31El = React.useRef(null);
  const scene30El = React.useRef(null);
  const scene31El = React.useRef(null);
  const scene32El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
  }, []);

  React.useEffect(() => {
    if (scene === "30") {
      if (scene30El.current) {
        scene30El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene30El.current]);

  React.useEffect(() => {
    if (scene === "31") {
      if (scene31El.current) {
        containerEl.current.style.animation =
          "2s ease-in 0s 1 normal both running bgFadeIn";
        scene31El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene31El.current]);

  React.useEffect(() => {
    if (scene === "32") {
      if (scene32El.current) {
        scene32El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene32El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "31") {
          if (actionClick) {
            setActionClick(false);
            scene31El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("32");
            }, 2000);
          }
        }

        if (scene === "32") {
          if (actionClick) {
            setActionClick(false);
            scene32El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate("/scene33-34");
              }, 500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "30" && <Scene30 ref={scene30El}></Scene30>}
      {scene === "31" && <Scene31 ref={scene31El}></Scene31>}
      {scene === "32" && <Scene32 ref={scene32El}></Scene32>}

      {scene === "30" && (
        <video
          ref={video30El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video29").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setTimeout(() => {
              containerEl.current.style.animation =
                "2s ease-in 0s 1 normal both running bgFadeOut";
              scene30El.current.style.animation =
                "1s ease-in 0s 1 normal both running fadeOut";
            }, event.target.duration * 800);
            setTimeout(() => {
              setScene("31");
            }, event.target.duration * 1000);
          }}
        ></video>
      )}

      {(scene === "31" || scene === "32") && (
        <video
          ref={video31El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video30_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
