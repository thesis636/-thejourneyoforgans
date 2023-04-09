import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter79 from "../../components/backgrounds/chapter79";
import "./style.css";
import MessageChapter79 from "../../components/messages/chapter79";

export function Chapter79(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "79" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter79>
      <MessageChapter79></MessageChapter79>
      </BackgroundChapter79>
      {props.children}
    </div>
  );
}

export default Chapter79;
