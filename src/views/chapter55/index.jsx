import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter55 from "../../components/backgrounds/chapter55";
import "./style.css";
import MessageChapter55 from "../../components/messages/chapter55";

export function Chapter55(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "55" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter55>
        <MessageChapter55></MessageChapter55>
      </BackgroundChapter55>
      {props.children}
    </div>
  );
}

export default Chapter55;
