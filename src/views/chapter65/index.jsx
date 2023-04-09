import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter65 from "../../components/backgrounds/chapter65";
import "./style.css";
import MessageChapter65 from "../../components/messages/chapter65";

export function Chapter65(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "65" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter65>
      <MessageChapter65></MessageChapter65>
      </BackgroundChapter65>
      {props.children}
    </div>
  );
}

export default Chapter65;
