import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene84 from "../components/Scene84";
import Scene85 from "../components/Scene85";

export default function Scene84_85Page({ getVideos }) {
  const [scene, setScene] = React.useState("84");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video84_85El = React.useRef(null);
  const scene84El = React.useRef(null);
  const scene85El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "84") {
      if (scene84El.current) {
        scene84El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene84El.current]);

  React.useEffect(() => {
    if (scene === "85") {
      if (scene85El.current) {
        scene85El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeInEnd";
        setActionClick(true);
      }
    }
  }, [scene, scene85El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "84") {
          if (actionClick) {
            setActionClick(false);
            scene84El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("85");
            }, 2000);
          }
        }

        // if (scene === "85") {
        //   if (actionClick) {
        //     // setActionClick(false);
        //     // scene85El.current.style.animation =
        //     //   "2s ease-out 0s 1 normal forwards running fadeOut";
        //     // containerEl.current.style.animation =
        //     //   "2s ease-in 2s 1 normal both running bgFadeOut";
        //     // setTimeout(() => {
        //     //   setTimeout(() => {
        //     //     // navigate(`/scene84-85`);
        //     //   }, 2500);
        //     // }, 2000);
        //   }
        // }
      }}
    >
      {scene === "84" && <Scene84 ref={scene84El}></Scene84>}
      {scene === "85" && <Scene85 ref={scene85El}></Scene85>}

      {(scene === "84" || scene === "85") && (
        <video
          ref={video84_85El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video84-85_loop").urlBlob
          }
        ></video>
      )}
    </div>
  );
}
