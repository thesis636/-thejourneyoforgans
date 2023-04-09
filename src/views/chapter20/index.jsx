import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter20 from "../../components/backgrounds/chapter20";
import MessageChapter20 from "../../components/messages/chapter20";
import "./style.css";

export function Chapter20(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "20" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter20>
        <MessageChapter20></MessageChapter20>
      </BackgroundChapter20>
      {props.children}
    </div>
  );
}

export default Chapter20;
