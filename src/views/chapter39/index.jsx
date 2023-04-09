import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter39 from "../../components/backgrounds/chapter39";
import "./style.css";
import MessageChapter39 from "../../components/messages/chapter39";

export function Chapter39(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "39" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter39>
        <MessageChapter39></MessageChapter39>
      </BackgroundChapter39>
      {props.children}
    </div>
  );
}

export default Chapter39;
