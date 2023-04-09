import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter33 from "../../components/backgrounds/chapter33";
import "./style.css";
import MessageChapter33 from "../../components/messages/chapter33";

export function Chapter33(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "33" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter33>
        <MessageChapter33></MessageChapter33>
      </BackgroundChapter33>
      {props.children}
    </div>
  );
}

export default Chapter33;
