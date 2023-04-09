import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter34 from "../../components/backgrounds/chapter34";
import "./style.css";
import MessageChapter34 from "../../components/messages/chapter34";

export function Chapter34(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "34" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter34>
        <MessageChapter34></MessageChapter34>
      </BackgroundChapter34>
      {props.children}
    </div>
  );
}

export default Chapter34;
