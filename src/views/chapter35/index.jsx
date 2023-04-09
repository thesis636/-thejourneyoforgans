import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter35 from "../../components/backgrounds/chapter35";
import "./style.css";
import MessageChapter35 from "../../components/messages/chapter35";

export function Chapter35(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "35" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter35>
        <MessageChapter35></MessageChapter35>
      </BackgroundChapter35>
      {props.children}
    </div>
  );
}

export default Chapter35;
