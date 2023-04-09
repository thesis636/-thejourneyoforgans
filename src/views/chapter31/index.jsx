import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter31 from "../../components/backgrounds/chapter31";
import "./style.css";
import MessageChapter31 from "../../components/messages/chapter31";

export function Chapter31(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "31" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter31>
        <MessageChapter31></MessageChapter31>
      </BackgroundChapter31>
      {props.children}
    </div>
  );
}

export default Chapter31;
