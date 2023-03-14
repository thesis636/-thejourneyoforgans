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
        dispatch({ type: "SET_LAYOUT", payload: '1' });
       
      }}
      style={{
        display: layoutReducer.step === '0' ? "block" : "none",
        animation:
          layoutReducer.step === '0' && `keyframe-layout-chapter-show-text 1s`,
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
        }}
      >
        <p
          style={{
            fontSize: "15px",
            padding: "15px",
            margin: 0,
          }}
        >
          {`ผลงานนี้เป็นส่วนหนึ่งของงานวิทยานิพนธ์ จาก
            นิสิตเอกการสื่อสารเพื่อสุขภาพ วิทยาลัยนวัตกรรม สื่อสารสังคม
            มหาวิทยาลัยศรีนครินทร์วิโรฒ`}
        </p>
        <p
          style={{
            fontSize: "15px",
            padding: "15px",
            margin: 0,
          }}
        >
          {`คำชี้แจง ผลงานชิ้นนี้เกิดขึ้นเพื่อให้ผู้เล่นทุกคนได้ตระหนัก
            ถึงชีวิตที่มีความไม่แน่นอน เราอาจจะพบเจอกับ
            ความสูญเสียทั้งกับตัวเราและคนรอบข้างเมื่อไหร่ก็ ได้
            แต่ร่างกายและอวัยวะของเราสามารถเป็น ประโยชน์ต่อผู้ที่กำลังต้องการได้`}
        </p>
        <p
          style={{
            fontSize: "15px",
            padding: "15px",
            margin: 0,
          }}
        >
          {`โปรดตรวจสอบความมั่นคงทางจิตใจของคุณก่อน เข้าเล่น เนื่องจากเว็บไซต์นี้มีเนื้อหาเกี่ยวกับความ ตายและการสูญเสีย`}
        </p>
        <p
          style={{
            fontSize: "15px",
            padding: "15px",
            margin: 0,
          }}
        >
          {`ขอขอบคุณทุกๆคนที่กดเข้ามาเล่นในเว็บไซต์ หาก พร้อมแล้ว ขอให้คุณค่อยๆปล่อยเวลานาทีนี้ให้ผ่าน ไปอย่างช้าๆ และมาติดตามเรื่องราวกัน :)`}
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter0;
