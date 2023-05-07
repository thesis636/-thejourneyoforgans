import * as React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Scene14 from "../components/Scene14";

export default function Scene14Page({ setAudioSadPlayFunc,audioBGIOSOnClick,audioSadIOSOnClick }) {
  const [scene, setScene] = React.useState("14");
  const [actionClick, setActionClick] = React.useState(false);

  const navigate = useNavigate();

  const containerEl = React.useRef(null);
  const scene14El = React.useRef(null);

  React.useEffect(() => {
    containerEl.current.style.animation =
      "2s ease-in 0s 1 normal both running bgFadeIn";
    setAudioSadPlayFunc(true);
  }, []);

  React.useEffect(() => {
    if (scene14El.current) {
      scene14El.current.style.animation =
        "1s ease-in 2s 1 normal both running fadeIn";
    }
    setActionClick(true);
  }, [scene14El.current]);
  return (
    <div
      ref={containerEl}
      className="bg-black h-full grid place-items-center"
      onClick={() => {
        audioBGIOSOnClick()
        audioSadIOSOnClick()
        if (scene === "14") {
          if (actionClick) {
            setActionClick(false);
            scene14El.current.style.animation =
              "2s ease-out 0s 1 normal forwards running fadeOut";

            setTimeout(() => {
              containerEl.current.style.animation =
                "2s ease-in 0s 1 normal both running bgFadeOut";
              setTimeout(() => {
                setTimeout(() => {
                  navigate(`/scene15-23`);
                }, 500);
              }, 2000);
            }, 2000);
          }
        }
      }}
    >
      <Scene14 ref={scene14El}></Scene14>
    </div>
  );
}
