import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter2 from "../../components/backgrounds/chapter2";
import MessageChapter2 from "../../components/messages/chapter2";
// import { OneFrame } from "../../components/frames/one";
import "./style.css";

export function Chapter2(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === '2' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter2>
        <MessageChapter2></MessageChapter2>
      </BackgroundChapter2>
      {props.children}
    </div>
  );
}

export default Chapter2;
