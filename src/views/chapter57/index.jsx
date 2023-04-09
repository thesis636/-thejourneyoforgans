import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter57 from "../../components/backgrounds/chapter57";
import "./style.css";
import MessageChapter57 from "../../components/messages/chapter57";

export function Chapter57(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "57" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter57>
        <MessageChapter57></MessageChapter57>
      </BackgroundChapter57>
      {props.children}
    </div>
  );
}

export default Chapter57;
