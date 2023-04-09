import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter64 from "../../components/backgrounds/chapter64";
import "./style.css";
import MessageChapter64 from "../../components/messages/chapter64";

export function Chapter64(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "64" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter64>
        <MessageChapter64></MessageChapter64>
      </BackgroundChapter64>
      {props.children}
    </div>
  );
}

export default Chapter64;
