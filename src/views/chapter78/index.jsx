import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter78 from "../../components/backgrounds/chapter78";
import "./style.css";
import MessageChapter78 from "../../components/messages/chapter78";

export function Chapter78(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "78" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter78>
      <MessageChapter78></MessageChapter78>
      </BackgroundChapter78>
      {props.children}
    </div>
  );
}

export default Chapter78;
