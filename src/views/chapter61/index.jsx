import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter61 from "../../components/backgrounds/chapter61";
import "./style.css";
import MessageChapter61 from "../../components/messages/chapter61";

export function Chapter61(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "61" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter61>
        <MessageChapter61></MessageChapter61>
      </BackgroundChapter61>
      {props.children}
    </div>
  );
}

export default Chapter61;
