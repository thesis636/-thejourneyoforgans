import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter52 from "../../components/backgrounds/chapter52";
import "./style.css";
import MessageChapter52 from "../../components/messages/chapter52";

export function Chapter52(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "52" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter52>
        <MessageChapter52></MessageChapter52>
      </BackgroundChapter52>
      {props.children}
    </div>
  );
}

export default Chapter52;
