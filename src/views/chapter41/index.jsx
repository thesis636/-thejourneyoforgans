import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter41 from "../../components/backgrounds/chapter41";
import "./style.css";
import MessageChapter41 from "../../components/messages/chapter41";

export function Chapter41(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "41" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter41>
        <MessageChapter41></MessageChapter41>
      </BackgroundChapter41>
      {props.children}
    </div>
  );
}

export default Chapter41;
