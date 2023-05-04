import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene27 from "../components/Scene27";
import Scene28 from "../components/Scene28";
import Scene29 from "../components/Scene29";

export default function Scene27_29Page({ getVideos }) {
  const [scene, setScene] = React.useState("27");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video27_29El = React.useRef(null);
  const scene27El = React.useRef(null);
  const scene28El = React.useRef(null);
  const scene29El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    scene27El.current.style.animation =
      "1s ease-in 2s 1 normal both running fadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "28") {
      if (scene28El.current) {
        scene28El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene28El.current]);

  React.useEffect(() => {
    if (scene === "29") {
      if (scene29El.current) {
        scene29El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene29El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "27") {
          if (actionClick) {
            setActionClick(false);
            scene27El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            // containerEl.current.style.animation =
            //   "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setScene("28")
              // setTimeout(() => {
                setTimeout(() => {
                  // navigate("/scene27-28");
                  
                }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "28") {
          if (actionClick) {
            setActionClick(false);
            scene28El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            // containerEl.current.style.animation =
            //   "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setScene("29")
              // setTimeout(() => {
                setTimeout(() => {
                  // navigate("/scene27-28");
                 
                }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "29") {
          if (actionClick) {
            setActionClick(false);
            scene29El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              // setTimeout(() => {
                setTimeout(() => {
                  navigate("/scene30-32");
                  // setScene("28")
                }, 500);
              // }, 2000);
            }, 2000);
          }
        }
      }}
    >


      {scene === "27" && <Scene27 ref={scene27El}></Scene27>}
      {scene === "28" && <Scene28 ref={scene28El}></Scene28>}
      {scene === "29" && <Scene29 ref={scene29El}></Scene29>}

      {(scene === "27" || scene === "28"|| scene === "29") && (
        <video
          ref={video27_29El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video27_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
