import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene33 from "../components/Scene33";
import Scene34 from "../components/Scene34";

export default function Scene33_34Page({
  getVideos,
  setAudioBGPlayFunc,
  setAudioSadPlayFunc,
}) {
  const [scene, setScene] = React.useState("33");
  const [actionClick, setActionClick] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);
  const video33El = React.useRef(null);
  const video34El = React.useRef(null);
  const scene33El = React.useRef(null);
  const scene34El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
    setAudioBGPlayFunc(true);
    setAudioSadPlayFunc(false);
  }, []);

  React.useEffect(() => {
    if (scene === "33") {
      if (scene33El.current) {
        scene33El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene33El.current]);

  React.useEffect(() => {
    if (scene === "34") {
      if (scene34El.current) {
        scene34El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene34El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "34") {
          if (actionClick) {
            setActionClick(false);
            scene34El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("35");
            }, 2000);
          }
        }
      }}
    >
      {scene === "33" && (
        <Scene33
          ref={scene33El}
          onNextScene={(event) => {
            if (scene === "33") {
              if (actionClick) {
                setActionClick(false);
                setMessage(event.message);
                dispatch({
                  type: "SET_QUESTION6",
                  payload: {
                    answer: event.message,
                  },
                });
                scene33El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                setTimeout(() => {
                  setTimeout(() => {
                    setScene("34");
                  }, 500);
                }, 2000);
              }
            }
          }}
        ></Scene33>
      )}

      {scene === "34" && (
        <Scene34 ref={scene34El} getMessage={message}></Scene34>
      )}

      {scene === "35" && (
        <video
          ref={video34El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video34").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setTimeout(() => {
              containerEl.current.style.animation =
                "2s ease-in 0s 1 normal both running bgFadeOut";
            }, event.target.duration * 800);
            setTimeout(() => {
              navigate(`/scene35-38`);
            }, event.target.duration * 1000);
          }}
        ></video>
      )}

      {(scene === "33" || scene === "34") && (
        <video
          ref={video33El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video32_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
