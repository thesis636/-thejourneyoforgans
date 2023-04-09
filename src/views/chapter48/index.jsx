import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter48 from "../../components/backgrounds/chapter48";
import "./style.css";
import MessageChapter48 from "../../components/messages/chapter48";

export function Chapter48(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "48" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter48>
        <MessageChapter48></MessageChapter48>
      </BackgroundChapter48>
      {props.children}
    </div>
  );
}

export default Chapter48;
