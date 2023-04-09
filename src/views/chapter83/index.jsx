import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter83 from "../../components/backgrounds/chapter83";
import "./style.css";
import MessageChapter83 from "../../components/messages/chapter83";

export function Chapter83(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "83" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter83>
      <MessageChapter83></MessageChapter83>
      </BackgroundChapter83>
      {props.children}
    </div>
  );
}

export default Chapter83;
