import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter76 from "../../components/backgrounds/chapter76";
import "./style.css";
import MessageChapter76 from "../../components/messages/chapter76";

export function Chapter76(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "76" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter76>
      <MessageChapter76></MessageChapter76>
      </BackgroundChapter76>
      {props.children}
    </div>
  );
}

export default Chapter76;
