import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter26 from "../../components/backgrounds/chapter26";
import MessageChapter26 from "../../components/messages/chapter26";
import "./style.css";

export function Chapter26(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "26" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter26>
        <MessageChapter26></MessageChapter26>
      </BackgroundChapter26>
      {props.children}
    </div>
  );
}

export default Chapter26;
