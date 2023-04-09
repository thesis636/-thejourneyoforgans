import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter75 from "../../components/backgrounds/chapter75";
import "./style.css";
import MessageChapter75 from "../../components/messages/chapter75";

export function Chapter75(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "75" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter75>
      <MessageChapter75></MessageChapter75>
      </BackgroundChapter75>
      {props.children}
    </div>
  );
}

export default Chapter75;
