import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter30 from "../../components/backgrounds/chapter30";
import "./style.css";
import MessageChapter30 from "../../components/messages/chapter30";

export function Chapter30(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "30" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter30>
        <MessageChapter30></MessageChapter30>
      </BackgroundChapter30>
      {props.children}
    </div>
  );
}

export default Chapter30;
