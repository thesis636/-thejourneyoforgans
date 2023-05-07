import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene7 from "../components/Scene7";

export default function Scene4_5Page({ getVideos }) {
  const [scene, setScene] = React.useState(6);
  const [classAction, setClassAction] = React.useState(true);
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);
  const video6El = React.useRef(null);
  const scene7El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
  }, []);

  React.useEffect(() => {
    if (scene === 7) {
      if (scene7El.current) {
        scene7El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene]);

  return (
    <div ref={containerEl} className="h-full">
      {scene === 7 && (
        <Scene7
          ref={scene7El}
          onNextScene={(event) => {
            if (scene === 7) {
              if (actionClick) {
                setActionClick(false);
                dispatch({
                  type: "SET_QUESTION2",
                  payload: {
                    answer: event.travelMethod,
                  },
                });
                scene7El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                containerEl.current.style.animation =
                  "2s ease-in 2s 1 normal both running bgFadeOut";
                setTimeout(() => {
                  setTimeout(() => {
                    setScene((scene) => scene + 1);

                    setTimeout(() => {
                      navigate(`/scene8-11?travelMethod=${event.travelMethod}`);
                    }, 500);
                  }, 2000);
                }, 2000);
              }
            }
          }}
        ></Scene7>
      )}

      {(scene === 6 || scene === 7) && (
        <video
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video7_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {scene === 6 && (
        <video
          ref={video6El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video6").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setTimeout(() => {
              setScene((scene) => scene + 1);
            }, event.target.duration * 1000);
          }}
        ></video>
      )}
    </div>
  );
}
