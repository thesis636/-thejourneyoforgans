import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter27 from "../../components/backgrounds/chapter27";
import MessageChapter27 from "../../components/messages/chapter27";
import "./style.css";

export function Chapter27(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "27" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter27>
        <MessageChapter27></MessageChapter27>
      </BackgroundChapter27>
      {props.children}
    </div>
  );
}

export default Chapter27;
