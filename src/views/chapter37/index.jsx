import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter37 from "../../components/backgrounds/chapter37";
import "./style.css";
import MessageChapter37 from "../../components/messages/chapter37";

export function Chapter37(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "37" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter37>
        <MessageChapter37></MessageChapter37>
      </BackgroundChapter37>
      {props.children}
    </div>
  );
}

export default Chapter37;
