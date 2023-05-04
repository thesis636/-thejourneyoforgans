import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Scene15 from "../components/Scene15";
import Scene16 from "../components/Scene16";
import Scene17 from "../components/Scene17";
import Scene18 from "../components/Scene18";
import Scene19 from "../components/Scene19";
import Scene20 from "../components/Scene20";
import Scene21 from "../components/Scene21";
import Scene22 from "../components/Scene22";
import Scene23 from "../components/Scene23";

export default function Scene15_23Page({ getVideos }) {
  const [scene, setScene] = React.useState("15");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video15El = React.useRef(null);
  const video16El = React.useRef(null);
  const video17_19El = React.useRef(null);
  const video20_24El = React.useRef(null);
  const scene15El = React.useRef(null);
  const scene16El = React.useRef(null);
  const scene17El = React.useRef(null);
  const scene18El = React.useRef(null);
  const scene19El = React.useRef(null);
  const scene20El = React.useRef(null);
  const scene21El = React.useRef(null);
  const scene22El = React.useRef(null);
  const scene23El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
  }, []);

  React.useEffect(() => {
    if (scene === "15") {
      setActionClick(true);
      if (scene15El.current) {
        scene15El.current.style.animation =
          "2s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene15El.current]);

  React.useEffect(() => {
    if (scene === "15.5") {
      setActionClick(true);
      containerEl.current.style.animation =
        "2s ease-in 0s 1 normal both running bgFadeIn";
    }
  }, [scene]);

  React.useEffect(() => {
    if (scene === "16") {
      setActionClick(true);
      if (scene16El.current) {
        containerEl.current.style.animation =
          "2s ease-in 0s 1 normal both running bgFadeIn";
        scene16El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene16El.current]);

  React.useEffect(() => {
    if (scene === "17") {
      setActionClick(true);
      if (scene17El.current) {
        scene17El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene17El.current]);

  React.useEffect(() => {
    if (scene === "18") {
      setActionClick(true);
      if (scene18El.current) {
        scene18El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene18El.current]);

  React.useEffect(() => {
    if (scene === "19") {
      setActionClick(true);
      if (scene19El.current) {
        scene19El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene19El.current]);

  React.useEffect(() => {
    if (scene === "20") {
      setActionClick(true);
      if (scene20El.current) {
        scene20El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene20El.current]);

  React.useEffect(() => {
    if (scene === "21") {
      setActionClick(true);
      if (scene21El.current) {
        scene21El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene21El.current]);

  React.useEffect(() => {
    if (scene === "22") {
      setActionClick(true);
      if (scene22El.current) {
        scene22El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene22El.current]);

  React.useEffect(() => {
    if (scene === "23") {
      setActionClick(true);
      if (scene23El.current) {
        scene23El.current.style.animation =
          "2s ease-in 0s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene23El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "15") {
          if (actionClick) {
            setActionClick(false);
            scene15El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                setTimeout(() => {
                  setScene("15.5");
                }, 500);
              }, 2000);
            }, 2000);
          }
        }

        if (scene === "16") {
          if (actionClick) {
            setActionClick(false);
            scene16El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
              // setTimeout(() => {
              setTimeout(() => {
                setScene("17");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "17") {
          if (actionClick) {
            setActionClick(false);
            scene17El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
              // setTimeout(() => {
              setTimeout(() => {
                setScene("18");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "18") {
          if (actionClick) {
            setActionClick(false);
            scene18El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
              // setTimeout(() => {
              setTimeout(() => {
                setScene("19");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "19") {
          if (actionClick) {
            setActionClick(false);
            scene19El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
              // setTimeout(() => {
              setTimeout(() => {
                setScene("20");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "20") {
          if (actionClick) {
            setActionClick(false);
            scene20El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
              // setTimeout(() => {
              setTimeout(() => {
                setScene("21");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "21") {
          if (actionClick) {
            setActionClick(false);
            scene21El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
              // setTimeout(() => {
              setTimeout(() => {
                setScene("22");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "22") {
          if (actionClick) {
            setActionClick(false);
            scene22El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              // containerEl.current.style.animation =
              //   "2s ease-in 0s 1 normal both running bgFadeOut";
              // setTimeout(() => {
              setTimeout(() => {
                setScene("23");
              }, 500);
              // }, 2000);
            }, 2000);
          }
        }

        if (scene === "23") {
          if (actionClick) {
            setActionClick(false);
            scene23El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              containerEl.current.style.animation =
                "2s ease-in 0s 1 normal both running bgFadeOut";
              setTimeout(() => {
                setTimeout(() => {
                  // setScene(25);
                  navigate(`/scene24-26`);
                }, 500);
              }, 2000);
            }, 2000);
          }
        }
      }}
    >
      {scene === "15" && <Scene15 ref={scene15El}></Scene15>}
      {scene === "16" && <Scene16 ref={scene16El}></Scene16>}
      {scene === "17" && <Scene17 ref={scene17El}></Scene17>}
      {scene === "18" && <Scene18 ref={scene18El}></Scene18>}
      {scene === "19" && <Scene19 ref={scene19El}></Scene19>}
      {scene === "20" && <Scene20 ref={scene20El}></Scene20>}
      {scene === "21" && <Scene21 ref={scene21El}></Scene21>}
      {scene === "22" && <Scene22 ref={scene22El}></Scene22>}
      {scene === "23" && <Scene23 ref={scene23El}></Scene23>}

      {scene === "15" && (
        <video
          ref={video15El}
          loop
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video14_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {scene === "15.5" && (
        <video
          ref={video16El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video16_fade").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            // setTimeout(() => {
            //   containerEl.current.style.animation =
            //     "2s ease-in 0s 1 normal both running bgFadeOut";
            // }, event.target.duration * 500);
            setTimeout(() => {
              setScene("16");
            }, event.target.duration * 1000);
          }}
        ></video>
      )}

      {(scene === "15.5" ||
        scene === "16" ||
        scene === "17" ||
        scene === "18") && (
        <video
          ref={video17_19El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video16_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {(scene === "18" ||
        scene === "19" ||
        scene === "20" ||
        scene === "21" ||
        scene === "22" ||
        scene === "23") && (
        <video
          ref={video20_24El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video19_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}
    </div>
  );
}
