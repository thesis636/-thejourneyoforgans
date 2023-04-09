import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter59 from "../../components/backgrounds/chapter59";
import "./style.css";
import MessageChapter59 from "../../components/messages/chapter59";

export function Chapter59(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "59" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter59>
        <MessageChapter59></MessageChapter59>
      </BackgroundChapter59>
      {props.children}
    </div>
  );
}

export default Chapter59;
