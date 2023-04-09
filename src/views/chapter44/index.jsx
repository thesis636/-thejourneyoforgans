import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter44 from "../../components/backgrounds/chapter44";
import "./style.css";
import MessageChapter44 from "../../components/messages/chapter44";

export function Chapter44(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "44" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter44>
        <MessageChapter44></MessageChapter44>
      </BackgroundChapter44>
      {props.children}
    </div>
  );
}

export default Chapter44;
