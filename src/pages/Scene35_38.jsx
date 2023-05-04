import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene35 from "../components/Scene35";
import Scene36 from "../components/Scene36";
import Scene37 from "../components/Scene37";
import Scene38 from "../components/Scene38";

export default function Scene35_38Page({ getVideos }) {
  const [scene, setScene] = React.useState("35");
  const [actionClick, setActionClick] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video35El = React.useRef(null);
  const scene35El = React.useRef(null);
  const scene36El = React.useRef(null);
  const scene37El = React.useRef(null);
  const scene38El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "35") {
      if (scene35El.current) {
        scene35El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene35El.current]);

  React.useEffect(() => {
    if (scene === "36") {
      if (scene36El.current) {
        scene36El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene36El.current]);

  React.useEffect(() => {
    if (scene === "37") {
      if (scene37El.current) {
        scene37El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene37El.current]);

  React.useEffect(() => {
    if (scene === "38") {
      if (scene38El.current) {
        scene38El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene38El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "35") {
          if (actionClick) {
            setActionClick(false);
            scene35El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            // containerEl.current.style.animation =
            //   "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setScene("36");
              // setTimeout(() => {
              // setTimeout(() => {
              //   // navigate("/scene27-28");
              // }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "36") {
          if (actionClick) {
            setActionClick(false);
            scene36El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            // containerEl.current.style.animation =
            //   "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setScene("37");
              // setTimeout(() => {
              // setTimeout(() => {
              //   // navigate("/scene27-28");
              // }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "37") {
          if (actionClick) {
            setActionClick(false);
            scene37El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            // containerEl.current.style.animation =
            //   "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setScene("38");
              // setTimeout(() => {
              // setTimeout(() => {
              //   // navigate("/scene27-28");
              // }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "38") {
          if (actionClick) {
            setActionClick(false);
            scene38El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              // setScene("39");
              // setTimeout(() => {
              setTimeout(() => {
                navigate("/scene39");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }
      }}
    >
      {/* {scene === "33" && (
        <Scene33
          ref={scene33El}
          onNextScene={(event) => {
            if (scene === "33") {
              if (actionClick) {
                setActionClick(false);
                setMessage(event.message);
                scene33El.current.style.animation =
                  "2s ease-out 0s 1 normal forwards running fadeOut";
                // containerEl.current.style.animation =
                //   "2s ease-in 2s 1 normal both running bgFadeOut";
                setTimeout(() => {
                  // setTimeout(() => {
                  // setScene((scene) => scene + 1);
                  setTimeout(() => {
                    // navigate(`/scene8-11`);
                    setScene("34");
                  }, 500);
                  // }, 2000);
                }, 2000);
              }
            }
          }}
        ></Scene33>
      )} */}

      {scene === "35" && <Scene35 ref={scene35El}></Scene35>}
      {scene === "36" && <Scene36 ref={scene36El}></Scene36>}
      {scene === "37" && <Scene37 ref={scene37El}></Scene37>}
      {scene === "38" && <Scene38 ref={scene38El}></Scene38>}

      {/* {scene === "35" && (
        <video
          ref={video34El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video34").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
            }, event.target.duration * 800);
            setTimeout(() => {
              navigate(`/scene35-38`);
            }, event.target.duration * 1000);
          }}
        ></video>
      )} */}

      {(scene === "35" ||
        scene === "36" ||
        scene === "37" ||
        scene === "38") && (
        <video
          ref={video35El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video35_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
