import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter46 from "../../components/backgrounds/chapter46";
import "./style.css";
import MessageChapter46 from "../../components/messages/chapter46";

export function Chapter46(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "46" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter46>
        <MessageChapter46></MessageChapter46>
      </BackgroundChapter46>
      {props.children}
    </div>
  );
}

export default Chapter46;
