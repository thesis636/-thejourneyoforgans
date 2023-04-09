import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter38 from "../../components/backgrounds/chapter38";
import "./style.css";
import MessageChapter38 from "../../components/messages/chapter38";

export function Chapter38(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "38" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter38>
        <MessageChapter38></MessageChapter38>
      </BackgroundChapter38>
      {props.children}
    </div>
  );
}

export default Chapter38;
