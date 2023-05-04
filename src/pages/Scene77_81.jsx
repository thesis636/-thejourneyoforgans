import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene77 from "../components/Scene77";
import Scene78 from "../components/Scene78";
import Scene79 from "../components/Scene79";
import Scene80 from "../components/Scene80";

export default function Scene77_81Page({ getVideos }) {
  const [scene, setScene] = React.useState("77");
  const [actionClick, setActionClick] = React.useState(false);
  const [selectMessage, setSelectMessage] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);
  const video77_79El = React.useRef(null);
  const video80_81El = React.useRef(null);
  const scene77El = React.useRef(null);
  const scene78El = React.useRef(null);
  const scene79El = React.useRef(null);
  const scene80El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "77") {
      if (scene77El.current) {
        scene77El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene77El.current]);

  React.useEffect(() => {
    if (scene === "78") {
      if (scene78El.current) {
        scene78El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene78El.current]);

  React.useEffect(() => {
    if (scene === "79") {
      if (scene79El.current) {
        scene79El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene79El.current]);

  React.useEffect(() => {
    if (scene === "80") {
      containerEl.current.style.animation =
        "2s ease-in 0s 1 normal both running bgFadeIn";
      if (scene80El.current) {
        scene80El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene80El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "77") {
          if (actionClick) {
            setActionClick(false);
            scene77El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("78");
            }, 2000);
          }
        }

        if (scene === "78") {
          if (actionClick) {
            setActionClick(false);
            scene78El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("79");
            }, 2000);
          }
        }

        // if (scene === "79") {
        //   if (actionClick) {
        //     setActionClick(false);
        //     scene79El.current.style.animation =
        //       "2s ease-out 0s 1 normal forwards running fadeOut";
        //     containerEl.current.style.animation =
        //       "2s ease-in 2s 1 normal both running bgFadeOut";
        //     setTimeout(() => {
        //       setTimeout(() => {
        //         setScene("80");
        //       }, 2500);
        //     }, 2000);
        //   }
        // }
      }}
    >
      {scene === "77" && <Scene77 ref={scene77El}></Scene77>}
      {scene === "78" && <Scene78 ref={scene78El}></Scene78>}
      {scene === "79" && (
        <Scene79
          ref={scene79El}
          onNextScene={(event) => {
            if (scene === "79") {
              if (actionClick) {
                setSelectMessage(event.message);
                setActionClick(false);
                dispatch({
                  type: "SET_QUESTION8",
                  payload: {
                    answer: event.message,
                  },
                });
                scene79El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                containerEl.current.style.animation =
                  "2s ease-in 2s 1 normal both running bgFadeOut";
                setTimeout(() => {
                  setTimeout(() => {
                    setTimeout(() => {
                      setScene("80");
                    }, 500);
                  }, 2000);
                }, 2000);
              }
            }
          }}
        ></Scene79>
      )}
      {scene === "80" && (
        <Scene80 ref={scene80El} getSelectMessage={selectMessage}></Scene80>
      )}

      {(scene === "77" || scene === "78" || scene === "79") && (
        <video
          ref={video77_79El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video77-79_loop").urlBlob
          }
        ></video>
      )}

      {scene === "80" && (
        <video
          ref={video80_81El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={getVideos.find((video) => video.name === "video80-81").urlBlob}
          onCanPlay={(event) => {
            if (scene === "80") {
              setTimeout(() => {
                scene80El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                containerEl.current.style.animation =
                  "2s ease-in 2s 1 normal both running bgFadeOut";
              }, event.target.duration * 600);
              setTimeout(() => {
                setTimeout(() => {
                  navigate(`/scene82-83`);
                }, 500);
              }, event.target.duration * 1000);
            }
          }}
        ></video>
      )}
    </div>
  );
}
