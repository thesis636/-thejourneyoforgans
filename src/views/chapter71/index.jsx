import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter71 from "../../components/backgrounds/chapter71";
import "./style.css";
import MessageChapter71 from "../../components/messages/chapter71";

export function Chapter71(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "71" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter71>
      <MessageChapter71></MessageChapter71>
      </BackgroundChapter71>
      {props.children}
    </div>
  );
}

export default Chapter71;
