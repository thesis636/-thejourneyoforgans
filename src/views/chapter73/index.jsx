import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter73 from "../../components/backgrounds/chapter73";
import "./style.css";
import MessageChapter73 from "../../components/messages/chapter73";

export function Chapter73(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "73" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter73>
      <MessageChapter73></MessageChapter73>
      </BackgroundChapter73>
      {props.children}
    </div>
  );
}

export default Chapter73;
