import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter60 from "../../components/backgrounds/chapter60";
import "./style.css";
import MessageChapter60 from "../../components/messages/chapter60";

export function Chapter60(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "60" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter60>
        <MessageChapter60></MessageChapter60>
      </BackgroundChapter60>
      {props.children}
    </div>
  );
}

export default Chapter60;
