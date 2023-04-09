import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter77 from "../../components/backgrounds/chapter77";
import "./style.css";
import MessageChapter77 from "../../components/messages/chapter77";

export function Chapter77(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "77" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter77>
      <MessageChapter77></MessageChapter77>
      </BackgroundChapter77>
      {props.children}
    </div>
  );
}

export default Chapter77;
