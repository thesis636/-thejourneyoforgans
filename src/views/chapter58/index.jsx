import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter58 from "../../components/backgrounds/chapter58";
import "./style.css";
import MessageChapter58 from "../../components/messages/chapter58";

export function Chapter58(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "58" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter58>
        <MessageChapter58></MessageChapter58>
      </BackgroundChapter58>
      {props.children}
    </div>
  );
}

export default Chapter58;
