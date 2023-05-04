import React from "react";
import projectLogo from "../images/project-logo.png";

const Scene1 = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center gap-6 h-full"
      style={{ opacity: 0 }}
    >
      <img className="w-32" src={projectLogo} alt="" />
      <p className="bg-white/75 py-4 px-6 shadow rounded-[2rem] whitespace-pre-line text-center">
        {`ผลงานนี้เป็นส่วนหนึ่งของงานวิทยานิพนธ์
  จากนิสิตเอกการสื่อสารเพื่อสุขภาพ
  วิทยาลัยนวัตกรรมสื่อสารสังคม
  มหาวิทยาลัยศรีนครินทร์วิโรฒ
  
  คำชี้แจง
  ผลงานชิ้นนี้เกิดขึ้นเพื่อให้ผู้เล่นทุกคนได้
  ตระหนักถึงชีวิตที่มีความไม่แน่นอน เรา
  อาจจะพบเจอกับความสูญเสียทั้งกับตัวเรา
  และคนรอบข้างเมื่อไหร่ก็ได้ แต่ร่างกาย
  และอวัยวะของเราสามารถเป็นประโยชน์ต่อผู้ที่
  กำลังต้องการได้
  
  โปรดตรวจสอบความมั่นคงทางจิตใจของ
  คุณก่อนเข้าเล่น เนื่องจากเว็บไซต์นี้มี
  เนื้อหาเกี่ยวกับความตายและการสูญเสีย
  
  ขอขอบคุณทุกๆคนที่กดเข้ามาเล่นในเว็บไซต์
  หากพร้อมแล้ว ขอให้คุณค่อยๆปล่อย
  เวลานาทีนี้ให้ผ่านไปอย่างช้าๆ
  และมาติดตามเรื่องราวกัน :)`}
      </p>
    </div>
  );
});

export default Scene1;
