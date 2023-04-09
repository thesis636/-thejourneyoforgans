import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter53 from "../../components/backgrounds/chapter53";
import "./style.css";
import MessageChapter53 from "../../components/messages/chapter53";

export function Chapter53(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "53" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter53>
        <MessageChapter53></MessageChapter53>
      </BackgroundChapter53>
      {props.children}
    </div>
  );
}

export default Chapter53;
