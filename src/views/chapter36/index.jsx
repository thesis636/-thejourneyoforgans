import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter36 from "../../components/backgrounds/chapter36";
import "./style.css";
import MessageChapter36 from "../../components/messages/chapter36";

export function Chapter36(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "36" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter36>
        <MessageChapter36></MessageChapter36>
      </BackgroundChapter36>
      {props.children}
    </div>
  );
}

export default Chapter36;
