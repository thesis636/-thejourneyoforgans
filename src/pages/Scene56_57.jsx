import * as React from "react";
import { useNavigate } from "react-router-dom";

import Scene56 from "../components/Scene56";
import Scene57 from "../components/Scene57";

export default function Scene56_57Page() {
  const [scene, setScene] = React.useState("56");
  const [actionClick, setActionClick] = React.useState(false);
  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const video56_57El = React.useRef(null);
  const scene56El = React.useRef(null);
  const scene57El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setActionClick(true);
  }, []);

  React.useEffect(() => {
    if (scene === "56") {
      if (scene56El.current) {
        scene56El.current.style.animation =
          "1s ease-in 2s 1 normal both running fadeIn";
      }
    }
  }, [scene, scene56El.current]);

  React.useEffect(() => {
    if (scene === "57") {
      if (scene57El.current) {
        scene57El.current.style.animation =
          "1s ease-in 0s 1 normal both running fadeIn";
        setActionClick(true);
      }
    }
  }, [scene, scene57El.current]);

  return (
    <div
      ref={containerEl}
      className="h-full"
      onClick={() => {
        if (scene === "56") {
          if (actionClick) {
            setActionClick(false);
            scene56El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            setTimeout(() => {
              setScene("57");
            }, 2000);
          }
        }

        if (scene === "57") {
          if (actionClick) {
            setActionClick(false);
            scene57El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";
            containerEl.current.style.animation =
              "2s ease-in 2s 1 normal both running bgFadeOut";
            setTimeout(() => {
              setTimeout(() => {
                navigate(`/scene58-62`);
              }, 2500);
            }, 2000);
          }
        }
      }}
    >
      {scene === "56" && <Scene56 ref={scene56El}></Scene56>}
      {scene === "57" && <Scene57 ref={scene57El}></Scene57>}

      {(scene === "56" || scene === "57") && (
        <div
          ref={video56_57El}
          className="h-full top-0 w-full object-fill -z-10 absolute "
          src=""
          playsInline
          muted
          style={{
            backgroundColor: "white",
          }}
        ></div>
      )}
    </div>
  );
}
