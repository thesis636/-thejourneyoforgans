import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter56 from "../../components/backgrounds/chapter56";
import "./style.css";
import MessageChapter56 from "../../components/messages/chapter56";

export function Chapter56(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "56" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter56>
        <MessageChapter56></MessageChapter56>
      </BackgroundChapter56>
      {props.children}
    </div>
  );
}

export default Chapter56;
