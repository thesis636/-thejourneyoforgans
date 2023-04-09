import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter29 from "../../components/backgrounds/chapter29";
import MessageChapter29 from "../../components/messages/chapter29";
import "./style.css";

export function Chapter29(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "29" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter29>
        <MessageChapter29></MessageChapter29>
      </BackgroundChapter29>
      {props.children}
    </div>
  );
}

export default Chapter29;
