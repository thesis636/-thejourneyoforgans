import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter69 from "../../components/backgrounds/chapter69";
import "./style.css";
import MessageChapter69 from "../../components/messages/chapter69";

export function Chapter69(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "69" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter69>
      <MessageChapter69></MessageChapter69>
      </BackgroundChapter69>
      {props.children}
    </div>
  );
}

export default Chapter69;
