import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene45 from "../components/Scene45";
import Scene46 from "../components/Scene46";
import Scene47 from "../components/Scene47";
import Scene48 from "../components/Scene48";
import Scene49 from "../components/Scene49";
import Scene50 from "../components/Scene50";
import Scene51 from "../components/Scene51";
import Scene52 from "../components/Scene52";
import Scene53 from "../components/Scene53";

export default function Scene45_53Page({ getVideos, setAudioAmbuPlayFunc }) {
  const [scene, setScene] = React.useState("45");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video45_46El = React.useRef(null);
  const video47_48El = React.useRef(null);
  const video49El = React.useRef(null);
  const video50_53El = React.useRef(null);
  const scene45El = React.useRef(null);
  const scene46El = React.useRef(null);
  const scene47El = React.useRef(null);
  const scene48El = React.useRef(null);
  const scene49El = React.useRef(null);
  const scene50El = React.useRef(null);
  const scene51El = React.useRef(null);
  const scene52El = React.useRef(null);
  const scene53El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";

    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "45") {
      if (scene45El.current) {
        scene45El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene45El.current]);

  React.useEffect(() => {
    if (scene === "46") {
      if (scene46El.current) {
        scene46El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene46El.current]);

  React.useEffect(() => {
    if (scene === "47") {
      if (scene47El.current) {
        containerEl.current.style.animation =
          "2s ease-in 0s 1 normal both running bgFadeIn";
        scene47El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene47El.current]);

  React.useEffect(() => {
    if (scene === "48") {
      if (scene48El.current) {
        scene48El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene48El.current]);

  React.useEffect(() => {
    if (scene === "49") {
      console.log(scene);
      containerEl.current.style.animation =
        "2s ease-in 0s 1 normal both running bgFadeIn";
      setActionClick(true);
      setAudioAmbuPlayFunc(true);
    }
  }, [scene]);

  React.useEffect(() => {
    if (scene === "50") {
      if (scene49El.current) {
        scene49El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene49El.current]);

  React.useEffect(() => {
    if (scene === "51") {
      if (scene50El.current) {
        scene50El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene50El.current]);

  React.useEffect(() => {
    if (scene === "52") {
      if (scene51El.current) {
        scene51El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene51El.current]);

  React.useEffect(() => {
    if (scene === "53") {
      if (scene52El.current) {
        scene52El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene52El.current]);

  React.useEffect(() => {
    if (scene === "54") {
      if (scene53El.current) {
        scene53El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene53El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "45") {
          if (actionClick) {
            setActionClick(false);
            scene45El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              setScene("46");
            }, 2000);
          }
        }

        if (scene === "46") {
          if (actionClick) {
            setActionClick(false);
            scene46El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                setScene("47");
              }, 2500);
            }, 2000);
          }
        }

        if (scene === "47") {
          if (actionClick) {
            setActionClick(false);
            scene47El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              setScene("48");
            }, 2000);
          }
        }

        if (scene === "48") {
          if (actionClick) {
            setActionClick(false);
            scene48El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                setScene("49");
              }, 2000);
            }, 2000);
          }
        }

        if (scene === "50") {
          if (actionClick) {
            setActionClick(false);
            scene49El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              setScene("51");
            }, 2000);
          }
        }

        if (scene === "51") {
          if (actionClick) {
            setActionClick(false);
            scene50El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              setScene("52");
            }, 2000);
          }
        }

        if (scene === "52") {
          if (actionClick) {
            setActionClick(false);
            scene51El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              setScene("53");
            }, 2000);
          }
        }

        if (scene === "53") {
          if (actionClick) {
            setActionClick(false);
            scene52El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              setScene("54");
            }, 2000);
          }
        }

        if (scene === "54") {
          if (actionClick) {
            setActionClick(false);
            scene53El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setAudioAmbuPlayFunc(false);
              setTimeout(() => {
                navigate(`/scene54-55`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "45" && <Scene45 ref={scene45El}></Scene45>}
      {scene === "46" && <Scene46 ref={scene46El}></Scene46>}
      {scene === "47" && <Scene47 ref={scene47El}></Scene47>}
      {scene === "48" && <Scene48 ref={scene48El}></Scene48>}
      {scene === "50" && <Scene49 ref={scene49El}></Scene49>}
      {scene === "51" && <Scene50 ref={scene50El}></Scene50>}
      {scene === "52" && <Scene51 ref={scene51El}></Scene51>}
      {scene === "53" && <Scene52 ref={scene52El}></Scene52>}
      {scene === "54" && <Scene53 ref={scene53El}></Scene53>}

      {(scene === "45" || scene === "46") && (
        <video
          ref={video45_46El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video45_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {(scene === "47" || scene === "48") && (
        <video
          ref={video47_48El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video47_loop").urlBlob}
          playsInline
          muted
        ></video>
      )}

      {(scene === "49" ||
        scene === "50" ||
        scene === "51" ||
        scene === "52" ||
        scene === "53" ||
        scene === "54") && (
        <video
          ref={video50_53El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={
            getVideos.find((video) => video.name === "video49-53_loop").urlBlob
          }
          playsInline
          muted
        ></video>
      )}

      {scene === "49" && (
        <video
          ref={video49El}
          autoPlay
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src={getVideos.find((video) => video.name === "video49-53").urlBlob}
          playsInline
          muted
          onCanPlay={(event) => {
            setTimeout(() => {
              setScene("50");
            }, event.target.duration * 500);
          }}
        ></video>
      )}
    </div>
  );
}
