import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene54 from "../components/Scene54";
import Scene55 from "../components/Scene55";

export default function Scene54_55Page({ getVideos }) {
  const [scene, setScene] = React.useState("54");
  const [actionClick, setActionClick] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video54_55El = React.useRef(null);
  const scene54El = React.useRef(null);
  const scene55El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "54") {
      if (scene54El.current) {
        scene54El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene54El.current]);

  React.useEffect(() => {
    if (scene === "55") {
      if (scene55El.current) {
        scene55El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene55El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "54") {
          if (actionClick) {
            setActionClick(false);
            scene54El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("55");
            }, 2000);
          }
        }

        if (scene === "55") {
          if (actionClick) {
            setActionClick(false);
            scene55El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene56-57`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "54" && <Scene54 ref={scene54El}></Scene54>}
      {scene === "55" && <Scene55 ref={scene55El}></Scene55>}

      {(scene === "54" || scene === "55") && (
        <video
          ref={video54_55El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={
            getVideos.find((video) => video.name === "video54-55_loop").urlBlob
          }
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
