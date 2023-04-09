import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter72 from "../../components/backgrounds/chapter72";
import "./style.css";
import MessageChapter72 from "../../components/messages/chapter72";

export function Chapter72(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "72" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter72>
      <MessageChapter72></MessageChapter72>
      </BackgroundChapter72>
      {props.children}
    </div>
  );
}

export default Chapter72;
