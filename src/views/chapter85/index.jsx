import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter85 from "../../components/backgrounds/chapter85";
import "./style.css";
import MessageChapter85 from "../../components/messages/chapter85";

export function Chapter85(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "85" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter85>
      <MessageChapter85></MessageChapter85>
      </BackgroundChapter85>
      {props.children}
    </div>
  );
}

export default Chapter85;
