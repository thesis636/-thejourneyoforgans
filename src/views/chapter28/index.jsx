import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter28 from "../../components/backgrounds/chapter28";
import MessageChapter28 from "../../components/messages/chapter28";
import "./style.css";

export function Chapter28(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "28" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter28>
        <MessageChapter28></MessageChapter28>
      </BackgroundChapter28>
      {props.children}
    </div>
  );
}

export default Chapter28;
