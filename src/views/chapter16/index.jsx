import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter16 from "../../components/backgrounds/chapter16";
import MessageChapter16 from "../../components/messages/chapter16";
import "./style.css";

export function Chapter16(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "16" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter16>
        <MessageChapter16></MessageChapter16>
      </BackgroundChapter16>
      {props.children}
    </div>
  );
}

export default Chapter16;
