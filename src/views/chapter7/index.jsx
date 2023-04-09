import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter7 from "../../components/backgrounds/chapter7";
import MessageChapter7 from "../../components/messages/chapter7";
import "./style.css";

export function Chapter7(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "7" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter7>
        <MessageChapter7></MessageChapter7>
      </BackgroundChapter7>
      {props.children}
    </div>
  );
}

export default Chapter7;
