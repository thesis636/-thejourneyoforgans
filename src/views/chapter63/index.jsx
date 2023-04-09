import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter63 from "../../components/backgrounds/chapter63";
import "./style.css";
import MessageChapter63 from "../../components/messages/chapter63";

export function Chapter63(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "63" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter63>
        <MessageChapter63></MessageChapter63>
      </BackgroundChapter63>
      {props.children}
    </div>
  );
}

export default Chapter63;
