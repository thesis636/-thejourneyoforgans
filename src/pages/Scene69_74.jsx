import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene69 from "../components/Scene69";
import Scene70 from "../components/Scene70";
import Scene71 from "../components/Scene71";
import Scene72 from "../components/Scene72";
import Scene73 from "../components/Scene73";
import Scene74 from "../components/Scene74";

export default function Scene69_74Page({ getVideos }) {
  const [scene, setScene] = React.useState("69");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video69_72El = React.useRef(null);
  const video73_74El = React.useRef(null);
  const scene69El = React.useRef(null);
  const scene70El = React.useRef(null);
  const scene71El = React.useRef(null);
  const scene72El = React.useRef(null);
  const scene73El = React.useRef(null);
  const scene74El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "69") {
      if (scene69El.current) {
        scene69El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene69El.current]);

  React.useEffect(() => {
    if (scene === "70") {
      if (scene70El.current) {
        scene70El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene70El.current]);

  React.useEffect(() => {
    if (scene === "71") {
      if (scene71El.current) {
        scene71El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene71El.current]);

  React.useEffect(() => {
    if (scene === "72") {
      if (scene72El.current) {
        scene72El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene72El.current]);

  React.useEffect(() => {
    if (scene === "73") {
      if (scene73El.current) {
        scene73El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
        containerEl.current.style.animation =
          "2s ease-in 0s 1 normal both running bgFadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene73El.current]);

  React.useEffect(() => {
    if (scene === "74") {
      if (scene74El.current) {
        scene74El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene74El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full overflow-hidden"
      onClick={() => {
        if (scene === "69") {
          if (actionClick) {
            setActionClick(false);
            scene69El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("70");
            }, 2000);
          }
        }

        if (scene === "70") {
          if (actionClick) {
            setActionClick(false);
            scene70El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("71");
            }, 2000);
          }
        }

        if (scene === "71") {
          if (actionClick) {
            setActionClick(false);
            scene71El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("72");
            }, 2000);
          }
        }

        if (scene === "72") {
          if (actionClick) {
            setActionClick(false);
            scene72El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                setScene("73");
              }, 2500);
            }, 2000);
          }
        }

        if (scene === "73") {
          if (actionClick) {
            setActionClick(false);
            scene73El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("74");
            }, 2000);
          }
        }

        if (scene === "74") {
          if (actionClick) {
            setActionClick(false);
            scene74El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene75-76`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "69" && <Scene69 ref={scene69El}></Scene69>}
      {scene === "70" && <Scene70 ref={scene70El}></Scene70>}
      {scene === "71" && <Scene71 ref={scene71El}></Scene71>}
      {scene === "72" && <Scene72 ref={scene72El}></Scene72>}
      {scene === "73" && <Scene73 ref={scene73El}></Scene73>}
      {scene === "74" && <Scene74 ref={scene74El}></Scene74>}

      {(scene === "69" ||
        scene === "70" ||
        scene === "71" ||
        scene === "72") && (
        <video
          ref={video69_72El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video69-72_loop").urlBlob
          }
        ></video>
      )}

      {(scene === "73" || scene === "74") && (
        <video
          ref={video73_74El}
          autoPlay
          loop
          className="h-full top-0 w-full object-fill -z-10 absolute "
          playsInline
          muted
          src={
            getVideos.find((video) => video.name === "video73-74_loop").urlBlob
          }
        ></video>
      )}
    </div>
  );
}
