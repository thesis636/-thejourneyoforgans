import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter54 from "../../components/backgrounds/chapter54";
import "./style.css";
import MessageChapter54 from "../../components/messages/chapter54";

export function Chapter54(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "54" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter54>
        <MessageChapter54></MessageChapter54>
      </BackgroundChapter54>
      {props.children}
    </div>
  );
}

export default Chapter54;
