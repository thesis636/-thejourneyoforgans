import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter8Walk from "../../components/backgrounds/chapter8/walk";
import MessageChapter8Walk from "../../components/messages/chapter8/walk";
import "./style.css";

export function Chapter8Walk(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "8-walk" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter8Walk>
        <MessageChapter8Walk></MessageChapter8Walk>
      </BackgroundChapter8Walk>
      {props.children}
    </div>
  );
}

export default Chapter8Walk;
