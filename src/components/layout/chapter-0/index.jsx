import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import icon from "./img/IMG_4571.PNG";

export function LayoutChapter0() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch({ type: "SET_LAYOUT", payload: "1" });
      }}
      style={{
        display: layoutReducer.step === "0" ? "block" : "none",
        animation:
          layoutReducer.step === "0" && `keyframe-layout-chapter-show-text 1s`,
        cursor: "pointer",
      }}
    >
      <div>
        <img height={135} src={icon} />
      </div>
      <div
        style={{
          backgroundColor: "#f0f8ffb8",
          width: "300px",
          borderRadius: "35px",
          padding: "15px",
        }}
      >
        <div
          style={{
            padding: "5px",
            margin: 0,
          }}
        >
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"ผลงานนี้เป็นส่วนหนึ่งของงานวิทยานิพนธ์"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"จากนิสิตเอกการสื่อสารเพื่อสุขภาพ"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"วิทยาลัยนวัตกรรมสื่อสารสังคม"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"มหาวิทยาลัยศรีนครินทร์วิโรฒ"}
          </p>
        </div>
        <div
          style={{
            padding: "5px",
            margin: 0,
          }}
        >
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"คำชี้แจง"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"ผลงานชิ้นนี้เกิดขึ้นเพื่อให้ผู้เล่นทุกคนได้ตระหนัก"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"ถึงชีวิตที่มีความไม่แน่นอน เรา"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"อาจจะพบเจอกับความสูญเสียทั้งกับตัวเรา"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"และคนรอบข้างเมื่อไหร่ก็ได้"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"และอวัยวะของเราสามารถเป็นประโยชน์ต่อผู้ที่"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"กำลังต้องการได้"}
          </p>
        </div>
        <div
          style={{
            padding: "5px",
            margin: 0,
          }}
        >
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"โปรดตรวจสอบความมั่นคงทางจิตใจของ"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"คุณก่อนเข้าเล่น เนื่องจากเว็บไซต์นี้มี"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"เนื้อหาเกี่ยวกับความตายและการสูญเสีย"}
          </p>
        </div>
        <div
          style={{
            padding: "5px",
            margin: 0,
          }}
        >
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"ขอขอบคุณทุกๆคนที่กดเข้ามาเล่นในเว็บไซต์"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"หากพร้อมแล้ว ขอให้คุณค่อยๆปล่อย"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"เวลานาทีนี้ให้ผ่านไปอย่างช้าๆ"}
          </p>
          <p
            style={{
              fontSize: "15px",
              margin: 0,
            }}
          >
            {"และมาติดตามเรื่องราวกัน :)"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LayoutChapter0;
