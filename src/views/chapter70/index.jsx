import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter70 from "../../components/backgrounds/chapter70";
import "./style.css";
import MessageChapter70 from "../../components/messages/chapter70";

export function Chapter70(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "70" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter70>
      <MessageChapter70></MessageChapter70>
      </BackgroundChapter70>
      {props.children}
    </div>
  );
}

export default Chapter70;
