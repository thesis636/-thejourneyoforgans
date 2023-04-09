import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter22 from "../../components/backgrounds/chapter22";
import MessageChapter22 from "../../components/messages/chapter22";
import "./style.css";

export function Chapter22(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "22" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter22>
        <MessageChapter22></MessageChapter22>
      </BackgroundChapter22>
      {props.children}
    </div>
  );
}

export default Chapter22;
