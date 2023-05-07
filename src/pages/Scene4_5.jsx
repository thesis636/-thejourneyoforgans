import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene5 from "../components/Scene5";

export default function Scene4_5Page({ getVideos, setAudioPlayFunc,audioOpenDoorIOSOnClick }) {
  const [scene, setScene] = React.useState(4);
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);
  const video4El = React.useRef(null);
  const scene5El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setAudioPlayFunc(true);
  }, []);

  React.useEffect(() => {
    if (scene === 5) {
      if (scene5El.current) {
        scene5El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene]);

  return (
    <div ref={containerEl} className="h-full">
      {scene === 5 && (
        <Scene5
        onClick={() => {
          audioOpenDoorIOSOnClick()
        }}
          ref={scene5El}
          onNextScene={(event) => {
            if (scene === 5) {
              if (actionClick) {
                setActionClick(false);
                dispatch({
                  type: "SET_QUESTION1",
                  payload: {
                    answer: event.message,
                  },
                });
                scene5El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                containerEl.current.style.animation =
                  "2s ease-in 2s 1 normal both running bgFadeOut";
                setTimeout(() => {
                  setTimeout(() => {
                    setScene((scene) => scene + 1);
                    setTimeout(() => {
                      navigate("/scene6-7");
                    }, 500);
                  }, 2000);
                }, 2000);
              }
            }
          }}
        ></Scene5>
      )}

      {(scene === 4 || scene === 5) && (
        <video
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video5_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {scene === 4 && (
        <video
          ref={video4El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video4").urlBlob}
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
