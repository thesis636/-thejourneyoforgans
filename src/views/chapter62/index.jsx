import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter62 from "../../components/backgrounds/chapter62";
import "./style.css";
import MessageChapter62 from "../../components/messages/chapter62";

export function Chapter62(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "62" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter62>
        <MessageChapter62></MessageChapter62>
      </BackgroundChapter62>
      {props.children}
    </div>
  );
}

export default Chapter62;
