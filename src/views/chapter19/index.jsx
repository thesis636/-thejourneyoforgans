import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter19 from "../../components/backgrounds/chapter19";
import MessageChapter19 from "../../components/messages/chapter19";
import "./style.css";

export function Chapter19(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "19" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter19>
        <MessageChapter19></MessageChapter19>
      </BackgroundChapter19>
      {props.children}
    </div>
  );
}

export default Chapter19;
