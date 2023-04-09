import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter84 from "../../components/backgrounds/chapter84";
import "./style.css";

import MessageChapter84 from "../../components/messages/chapter84";
export function Chapter84(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "84" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter84>
      <MessageChapter84></MessageChapter84>
      </BackgroundChapter84>
      {props.children}
    </div>
  );
}

export default Chapter84;
