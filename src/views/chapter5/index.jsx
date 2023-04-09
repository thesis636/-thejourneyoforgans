import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter5 from "../../components/backgrounds/chapter5";
import MessageChapter5 from "../../components/messages/chapter5";
// import { OneFrame } from "../../components/frames/one";
import "./style.css";

export function Chapter5(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === '5' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter5>
        <MessageChapter5></MessageChapter5>
      </BackgroundChapter5>
      {props.children}
    </div>
  );
}

export default Chapter5;
