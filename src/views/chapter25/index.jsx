import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter25 from "../../components/backgrounds/chapter25";
import MessageChapter25 from "../../components/messages/chapter25";
import "./style.css";

export function Chapter25(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "25" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter25>
        <MessageChapter25></MessageChapter25>
      </BackgroundChapter25>
      {props.children}
    </div>
  );
}

export default Chapter25;
