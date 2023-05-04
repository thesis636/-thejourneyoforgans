import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene24 from "../components/Scene24";
import Scene25 from "../components/Scene25";
import Scene26 from "../components/Scene26";

export default function Scene24_26Page({ getVideos }) {
  const [scene, setScene] = React.useState("24");
  const [actionClick, setActionClick] = React.useState(false);
  const [selectMessage, setSelectMessage] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);
  const video24_26El = React.useRef(null);
  const scene24El = React.useRef(null);
  const scene25El = React.useRef(null);
  const scene26El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    scene24El.current.style.animation =
      "1s ease-in 2s 1 normal both running fadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "25") {
      if (scene25El.current) {
        scene25El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene25El.current]);

  React.useEffect(() => {
    if (scene === "26") {
      if (scene26El.current) {
        scene26El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene26El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "26") {
          if (actionClick) {
            setActionClick(false);
         
            scene26El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                setTimeout(() => {
                  navigate("/scene27-29");
                }, 500);
              }, 2000);
            }, 2000);
          }
        }
      }}
    >
      {scene === "24" && (
        <Scene24
          ref={scene24El}
          onNextScene={(event) => {
            if (scene === "24") {
              if (actionClick) {
                setActionClick(false);
                dispatch({
                  type: "SET_QUESTION4",
                  payload: {
                    answer: event.message,
                  },
                });
                scene24El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                setTimeout(() => {

                  setTimeout(() => {
                    setScene("25");
                  }, 500);
                }, 2000);
              }
            }
          }}
        ></Scene24>
      )}

      {scene === "25" && (
        <Scene25
          ref={scene25El}
          onNextScene={(event) => {
            if (scene === "25") {
              if (actionClick) {
                setSelectMessage(event.message);
                setActionClick(false);
                dispatch({
                  type: "SET_QUESTION5",
                  payload: {
                    answer: event.message,
                  },
                });
                scene25El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                setTimeout(() => {
                  setTimeout(() => {
                    setScene("26");
                  }, 500);
                }, 2000);
              }
            }
          }}
        ></Scene25>
      )}

      {scene === "26" && (
        <Scene26 ref={scene26El} getSelectMessage={selectMessage}></Scene26>
      )}

      {(scene === "24" || scene === "25" || scene === "26") && (
        <video
          ref={video24_26El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video24_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
