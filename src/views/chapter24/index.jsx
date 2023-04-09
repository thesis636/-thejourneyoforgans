import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter24 from "../../components/backgrounds/chapter24";
import MessageChapter24 from "../../components/messages/chapter24";
import "./style.css";

export function Chapter24(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "24" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter24>
        <MessageChapter24></MessageChapter24>
      </BackgroundChapter24>
      {props.children}
    </div>
  );
}

export default Chapter24;
