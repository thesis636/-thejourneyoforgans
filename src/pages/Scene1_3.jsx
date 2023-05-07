import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene1 from "../components/Scene1";
import Scene2 from "../components/Scene2";
import Scene3 from "../components/Scene3";

export default function Scene1_3Page({ getVideos,onPlay }) {
  const [scene, setScene] = React.useState(1);
  const [actionClick, setActionClick] = React.useState(false);
  const [dataScene3, setDataScene3] = React.useState({
    id: "",
    nickname: "",
    gender: "",
    age: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);

  const scene1El = React.useRef(null);
  const scene2El = React.useRef(null);
  const scene3El = React.useRef(null);

  function onClickScreen() {
    onPlay()
    if (scene === 1) {
      if (actionClick) {
        setActionClick(false);
        scene1El.current.style.animation =
          "2s ease-out 0s 1 normal forwards running fadeOut";
        setTimeout(() => {
          setScene((scene) => scene + 1);

          setTimeout(() => {
            setActionClick(true);
          }, 2000);
        }, 2000);
      }
    }

    if (scene === 2) {
      if (actionClick) {
        setActionClick(false);
        scene2El.current.style.animation =
          "2s ease-out 0s 1 normal forwards running fadeOut";
        setTimeout(() => {
          setScene((scene) => scene + 1);
          setTimeout(() => {
            setActionClick(true);
          }, 2000);
        }, 2000);
      }
    }
  }

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";

    setTimeout(() => {
      setActionClick(true);
    }, 2000);
  }, []);

  React.useEffect(() => {
    if (scene3El.current) {
      scene3El.current.style.animation =
        "1s ease-in 0s 1 normal both running fadeIn";
    }
  }, [scene3El.current]);

  React.useEffect(() => {
    if (scene1El.current) {
      scene1El.current.style.animation =
        "1s ease-in 2s 1 normal both running fadeIn";
    }
  }, [scene1El.current]);

  React.useEffect(() => {
    if (scene2El.current) {
      scene2El.current.style.animation =
        "1s ease-in 0s 1 normal both running fadeIn";
    }
  }, [scene2El.current]);

  React.useEffect(() => {
    if (scene3El.current) {
      scene3El.current.style.animation =
        "1s ease-in 0s 1 normal both running fadeIn";
    }
  }, [scene3El.current]);

  return (
    <div ref={containerEl} className="h-full" onClick={onClickScreen}>
      {scene === 1 && <Scene1 ref={scene1El}></Scene1>}
      {scene === 2 && <Scene2 ref={scene2El}></Scene2>}
      {scene === 3 && (
        <Scene3
          ref={scene3El}
          onNextScene={(event) => {
            if (scene === 3) {
              if (actionClick) {
                setDataScene3(event);
                setActionClick(false);
                dispatch({
                  type: "SET_USER",
                  payload: {
                    ...event,
                  },
                });
                scene3El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";

                setTimeout(() => {
                  containerEl.current.style.animation =
                    "2s ease-in 0s 1 normal both running bgFadeOut";
                  setTimeout(() => {
                    setScene((scene) => scene + 1);

                    setTimeout(() => {
                      navigate("/scene4-5");
                    }, 500);
                  }, 2000);
                }, 2000);
              }
            }
          }}
        ></Scene3>
      )}
      {scene >= 1 && scene <= 3 && (
        <video
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={getVideos.find((video) => video.name === "video1_loop").urlBlob}
        ></video>
      )}
    </div>
  );
}
