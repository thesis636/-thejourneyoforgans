import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Scene10 from "../components/Scene10";

export default function Scene8_11Page({
  getVideos,
  setAudioBTSPlayFunc,
  setAudioMotorcyclePlayFunc,
  setAudioCarsPlayFunc,
  setAudioHitByCarPlayFunc,
  setAudioBackgroundPlayFunc,
  audioBGEl,
  audioHitByCarSIOSOnClick,
  audioBGSIOSOnClick
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [scene, setScene] = React.useState(searchParams.get("travelMethod"));
  const [classAction, setClassAction] = React.useState(true);
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const containerEl = React.useRef(null);
  const videoBTSEl = React.useRef(null);
  const videoMotorcycleEl = React.useRef(null);
  const videoWalkEl = React.useRef(null);
  const video11El = React.useRef(null);
  const scene10El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
  }, []);

  React.useEffect(() => {
    if (scene === "9-10") {
      if (scene10El.current) {
        scene10El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
        setAudioCarsPlayFunc(true);
      }
    }

    if (scene === "11") {
      containerEl.current.style.animation =
        "2s ease-in 0s 1 normal both running bgFadeIn";
      setAudioBackgroundPlayFunc(false);
    }
  }, [scene]);

  return (
    <div ref={containerEl} className="h-full">
      {scene === "9-10" && (
        <Scene10
          onClick={() => {
            audioHitByCarSIOSOnClick();
            audioBGSIOSOnClick();
          }}
          ref={scene10El}
          onNextScene={(event) => {
            if (scene === "9-10") {
              if (actionClick) {
                setActionClick(false);
                dispatch({
                  type: "SET_QUESTION3",
                  payload: {
                    answer: event.message,
                  },
                });
                scene10El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                containerEl.current.style.animation =
                  "2s ease-in 2s 1 normal both running bgFadeOut";
                setTimeout(() => {
                  setTimeout(() => {
                    setScene((scene) => scene + 1);
                    setAudioCarsPlayFunc(false);
                    setTimeout(() => {
                      navigate(`/scene8-11`);
                      setScene("11");
                    }, 500);
                  }, 2000);
                }, 2000);
              }
            }
          }}
        ></Scene10>
      )}

      {scene === "bts" && (
        <video
          ref={videoBTSEl}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video8_bts").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setAudioBTSPlayFunc(true);
            setTimeout(() => {
              setScene("9-10");
            }, event.target.duration * 1000);
          }}
        ></video>
      )}

      {scene === "motorcycle" && (
        <video
          ref={videoMotorcycleEl}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={
            getVideos.find((video) => video.name === "video8_motorcycle")
              .urlBlob
          }
          playsInline
          muted
          onCanPlay={(event) => {
            setAudioMotorcyclePlayFunc(true);
            setTimeout(() => {
              setScene("9-10");
            }, event.target.duration * 1000);
          }}
        ></video>
      )}

      {scene === "walk" && (
        <video
          ref={videoWalkEl}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video8_walk").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setTimeout(() => {
              setScene("9-10");
            }, event.target.duration * 1000);
          }}
        ></video>
      )}

      {scene === "9-10" && (
        <video
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={
            getVideos.find((video) => video.name === "video9-10_loop").urlBlob
          }
          playsInline
          muted
        ></video>
      )}

      {scene === "11" && (
        <video
          ref={video11El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video11").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setAudioHitByCarPlayFunc(true);

            setTimeout(() => {
              containerEl.current.style.animation =
                "2s ease-in 0s 1 normal both running bgFadeOut";
              setTimeout(() => {
                setTimeout(() => {
                  setAudioHitByCarPlayFunc(false);
                  navigate(`/scene12-13`);
                }, 500);
              }, 2000);
            }, event.target.duration * 1000);
          }}
        ></video>
      )}
    </div>
  );
}
