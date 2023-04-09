import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter21 from "../../components/backgrounds/chapter21";
import MessageChapter21 from "../../components/messages/chapter21";
import "./style.css";

export function Chapter21(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "21" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter21>
        <MessageChapter21></MessageChapter21>
      </BackgroundChapter21>
      {props.children}
    </div>
  );
}

export default Chapter21;
