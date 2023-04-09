import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter42 from "../../components/backgrounds/chapter42";
import "./style.css";
import MessageChapter42 from "../../components/messages/chapter42";

export function Chapter42(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "42" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter42>
        <MessageChapter42></MessageChapter42>
      </BackgroundChapter42>
      {props.children}
    </div>
  );
}

export default Chapter42;
