import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene40 from "../components/Scene40";
import Scene41 from "../components/Scene41";
import Scene42 from "../components/Scene42";
import Scene43 from "../components/Scene43";
import Scene44 from "../components/Scene44";

export default function Scene40_44Page({ getVideos,audioAmbuIOSOnClick }) {
  const [scene, setScene] = React.useState("40");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);
  const video40_41El = React.useRef(null);
  const video42El = React.useRef(null);
  const video43_44El = React.useRef(null);
  const scene40El = React.useRef(null);
  const scene41El = React.useRef(null);
  const scene42El = React.useRef(null);
  const scene43El = React.useRef(null);
  const scene44El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "40") {
      if (scene40El.current) {
        scene40El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene40El.current]);

  React.useEffect(() => {
    if (scene === "41") {
      if (scene41El.current) {
        scene41El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene41El.current]);

  React.useEffect(() => {
    if (scene === "42") {
      containerEl.current.style.animation =
        "2s ease-in 0s 1 normal both running bgFadeIn";
      if (scene42El.current) {
        scene42El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene42El.current]);

  React.useEffect(() => {
    if (scene === "43") {
      containerEl.current.style.animation =
        "2s ease-in 0s 1 normal both running bgFadeIn";
      if (scene43El.current) {
        scene43El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene43El.current]);

  React.useEffect(() => {
    if (scene === "44") {
      if (scene44El.current) {
        scene44El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene44El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "40") {
          if (actionClick) {
            setActionClick(false);
            scene40El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("41");
            }, 2000);
          }
        }

        if (scene === "41") {
          if (actionClick) {
            setActionClick(false);
            scene41El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                setScene("42");
              }, 2000);
            }, 2000);
          }
        }

        if (scene === "43") {
          if (actionClick) {
            setActionClick(false);
            scene43El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("44");
            }, 2000);
          }
        }

        if (scene === "44") {
          if (actionClick) {
            setActionClick(false);
            scene44El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate("/scene45-53");
              }, 2000);
            }, 2000);
          }
        }
      }}
    >
      {scene === "40" && <Scene40 ref={scene40El}></Scene40>}
      {scene === "41" && <Scene41 ref={scene41El}></Scene41>}
      {scene === "42" && (
        <Scene42
        onClick={()=>{audioAmbuIOSOnClick()}}
          ref={scene42El}
          onNextScene={(event) => {
            if (scene === "42") {
              if (actionClick) {
                setActionClick(false);
                dispatch({
                  type: "SET_QUESTION7",
                  payload: {
                    answer: event.message,
                  },
                });
                scene42El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                containerEl.current.style.animation =
                  "2s ease-in 2s 1 normal both running bgFadeOut";
                setTimeout(() => {
                  setTimeout(() => {
                    setTimeout(() => {
                      setScene("43");
                    }, 500);
                  }, 2000);
                }, 2000);
              }
            }
          }}
        ></Scene42>
      )}

      {scene === "43" && <Scene43 ref={scene43El}></Scene43>}
      {scene === "44" && <Scene44 ref={scene44El}></Scene44>}

      {(scene === "40" || scene === "41") && (
        <video
          ref={video40_41El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video40_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {scene === "42" && (
        <video
          ref={video42El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video42_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {(scene === "43" || scene === "44") && (
        <video
          ref={video43_44El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video43_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
