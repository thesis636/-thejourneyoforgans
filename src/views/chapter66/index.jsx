import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter66 from "../../components/backgrounds/chapter66";
import "./style.css";
import MessageChapter66 from "../../components/messages/chapter66";

export function Chapter66(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "66" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter66>
      <MessageChapter66></MessageChapter66>
      </BackgroundChapter66>
      {props.children}
    </div>
  );
}

export default Chapter66;
