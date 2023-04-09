import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter23 from "../../components/backgrounds/chapter23";
import MessageChapter23 from "../../components/messages/chapter23";
import "./style.css";

export function Chapter23(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "23" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter23>
        <MessageChapter23></MessageChapter23>
      </BackgroundChapter23>
      {props.children}
    </div>
  );
}

export default Chapter23;
