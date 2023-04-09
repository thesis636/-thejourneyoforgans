import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter74 from "../../components/backgrounds/chapter74";
import "./style.css";
import MessageChapter74 from "../../components/messages/chapter74";

export function Chapter74(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "74" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter74>
      <MessageChapter74></MessageChapter74>
      </BackgroundChapter74>
      {props.children}
    </div>
  );
}

export default Chapter74;
