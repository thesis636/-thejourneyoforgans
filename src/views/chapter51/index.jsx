import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter51 from "../../components/backgrounds/chapter51";
import "./style.css";
import MessageChapter51 from "../../components/messages/chapter51";

export function Chapter51(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "51" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter51>
        <MessageChapter51></MessageChapter51>
      </BackgroundChapter51>
      {props.children}
    </div>
  );
}

export default Chapter51;
