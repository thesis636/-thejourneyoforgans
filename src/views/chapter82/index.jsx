import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter82 from "../../components/backgrounds/chapter82";
import "./style.css";
import MessageChapter82 from "../../components/messages/chapter82";

export function Chapter82(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "82" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter82>
      <MessageChapter82></MessageChapter82>
      </BackgroundChapter82>
      {props.children}
    </div>
  );
}

export default Chapter82;
