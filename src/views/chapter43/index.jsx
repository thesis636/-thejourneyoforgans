import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter43 from "../../components/backgrounds/chapter43";
import "./style.css";
import MessageChapter43 from "../../components/messages/chapter43";

export function Chapter43(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "43" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter43>
        <MessageChapter43></MessageChapter43>
      </BackgroundChapter43>
      {props.children}
    </div>
  );
}

export default Chapter43;
