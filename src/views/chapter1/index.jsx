import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter1 from "../../components/backgrounds/chapter1";
import MessageChapter1 from "../../components/messages/chapter1";
// import { OneFrame } from "../../components/frames/one";
import "./style.css";

export function Chapter1(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === '1' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter1>
        <MessageChapter1></MessageChapter1>
      </BackgroundChapter1>
      {props.children}
    </div>
  );
}

export default Chapter1;
