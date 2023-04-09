import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter18 from "../../components/backgrounds/chapter18";
import MessageChapter18 from "../../components/messages/chapter18";
import "./style.css";

export function Chapter18(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "18" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter18>
        <MessageChapter18></MessageChapter18>
      </BackgroundChapter18>
      {props.children}
    </div>
  );
}

export default Chapter18;
