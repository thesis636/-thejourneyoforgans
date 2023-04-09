import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import img1 from "./img/1.PNG";
import img2 from "./img/2.PNG";
import img3 from "./img/3.PNG";
import img4 from "./img/4.PNG";
import img5 from "./img/5.PNG";
import img6 from "./img/6.PNG";
import img7 from "./img/7.PNG";
import img8 from "./img/8.PNG";
import toDataURL from "../../../libs/toDataURL";
const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "85" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "85" ? "show" : "hidden")} 2s;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};

  @keyframes show {
    0% {
      opacity: 0%;
    }

    25% {
      opacity: 25%;
    }

    50% {
      opacity: 50%;
    }

    75% {
      opacity: 75%;
    }

    300% {
      opacity: 300%;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 300%;
    }

    25% {
      opacity: 75%;
    }

    50% {
      opacity: 50%;
    }

    75% {
      opacity: 25%;
    }

    300% {
      opacity: 0%;
      cursor: default;
      width: 0px;
      display: none;
    }
  }
`;

export function MessageChapter29() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);
  const [img, setImg] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(async () => {
    console.log(dataReducer.chapter25.data.choice);
    console.log(dataReducer.chapter79.data.choice);

    if (
      dataReducer.chapter25.data.choice === "พอใจแล้ว" &&
      dataReducer.chapter79.data.choice ===
        "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ"
    ) {
      toDataURL(img3).then(base64 => {
        setImg(base64);
      })
    
    }

    if (
      dataReducer.chapter25.data.choice === "พอใจแล้ว" &&
      dataReducer.chapter79.data.choice ===
        "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ"
    ) {
      toDataURL(img4).then(base64 => {
        setImg(base64);
      })
    }

    if (
      dataReducer.chapter25.data.choice === "พอใจแล้ว" &&
      dataReducer.chapter79.data.choice ===
        "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง"
    ) {
       toDataURL(img5).then(base64 => {
        setImg(base64);
      })
    }

    if (
      dataReducer.chapter25.data.choice === "ยังไม่พอใจ" &&
      dataReducer.chapter79.data.choice ===
        "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ"
    ) {
     toDataURL(img6).then(base64 => {
      setImg(base64);
    })
    }

    if (
      dataReducer.chapter25.data.choice === "ยังไม่พอใจ" &&
      dataReducer.chapter79.data.choice ===
        "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ"
    ) {
      toDataURL(img8).then(base64 => {
        setImg(base64);
      })
    }

    if (
      dataReducer.chapter25.data.choice === "ยังไม่พอใจ" &&
      dataReducer.chapter79.data.choice ===
        "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง"
    ) {
      toDataURL(img7).then(base64 => {
        setImg(base64);
      })
    }

    if (
      dataReducer.chapter25.data.choice === "เฉยๆนะ" &&
      dataReducer.chapter79.data.choice ===
        "ชีวิตคนเรามันไม่ได้ง่าย มันท้าทายเสมอ"
    ) {
      toDataURL(img2).then(base64 => {
        setImg(base64);
      })
    }

    if (
      dataReducer.chapter25.data.choice === "เฉยๆนะ" &&
      dataReducer.chapter79.data.choice ===
        "ความล้มเหลว ไม่ใช่สิ่งที่ตรงกันข้ามกับ ความสําเร็จ มันคือส่วนหนึ่งของความสําเร็จ"
    ) {
      toDataURL(img3).then(base64 => {
        setImg(base64);
      })
    }

    if (
      dataReducer.chapter25.data.choice === "เฉยๆนะ" &&
      dataReducer.chapter79.data.choice ===
        "คนที่มีเหตุผลในการมีชีวิตอยู่ ย่อมทนได้กับทุกสิ่ง"
    ) {
      toDataURL(img1).then(base64 => {
        setImg(base64);
      })
    }
  }, [dataReducer.chapter25.data.choice, dataReducer.chapter79.data.choice]);

  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter85.loading}
    >
      <div>
        <img
          src={img}
          style={{
            height: "90vh",
          }}
        />

        <div
          style={{
            position: "fixed",
            display: "flex",
            top: "0",
            width: "100%",
            height: "100%",
            left: "0",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        ></div>
      </div>
    </MessageAnimetion>
  );
}

export default MessageChapter29;
