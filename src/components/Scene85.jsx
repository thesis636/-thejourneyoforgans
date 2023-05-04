import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase.config";

import img1 from "../images/dont-break-up-because-of-anyone-else-trimmy.png";
import img2 from "../images/we-were-born-to-be-happy-trimmy.png";
import img3 from "../images/dont-love-anyone-more-than-yourself-trimmy.png";
import img4 from "../images/be-yourself-the-way-you-like-trimmy.png";
import img5 from "../images/growing-up-is-always-difficult-dont-rush-grow-slowly-trimmy.png";
import img6 from "../images/dont-be-afraid-to-hold-on-to-the-past-trimmy.png";
import img7 from "../images/the-world-is-not-mean-people-who-are-mean-trimmy.png";
import img8 from "../images/dont-waste-your-time-on-things-that-arent-trimmy.png";

function returnImage(key) {
  switch (key) {
    case "อย่าแตกสลายเพราะใครอีกเลย":
      return img1;
      break;
    case "เราเกิดมาเพื่อมีความสุข":
      return img2;
      break;
    case "อย่ารักใคร มากกว่าตัวเอง":
      return img3;
      break;
    case "เป็นตัวเองในแบบที่ชอบ":
      return img4;
      break;
    case "การเติบโตมันยากเสมอ":
      return img5;
      break;
    case "อย่ามัวแต่กอดอดีตไว้":
      return img6;
      break;
    case "โลกไม่ได้ใจร้าย ผู้คนต่างหากที่ใจร้าย":
      return img7;
      break;
    case "อย่าเสียเวลากับสิ่งที่ไม่ใช่":
      return img8;
      break;
    default:
      break;
  }
}

const Scene85 = React.forwardRef((props, ref) => {
  const {
    user,
    question1,
    question2,
    question4,
    question5,
    question6,
    question7,
    question8,
  } = useSelector((state) => state.dataReducer);
  const dataReducer = useSelector((state) => state.dataReducer);
  const [newImage, setNewImg] = React.useState("");

  const navigate = useNavigate();

  const canvasEl = React.useRef(null);

  function draw() {
    const canvas = canvasEl.current;

    const ctx = canvas.getContext("2d");
    let img = new Image();
    img.addEventListener("load", () => {
      ctx.drawImage(img, 0, 0, 300 * 5, 400 * 5);
      ctx.font = `${13 * 5}px Plump`;
      ctx.textAlign = "center";
      ctx.fillText(`โลกของ ${user.nickname} สอนให้รู้ว่า`, 150 * 5, 290 * 5);
    });

    img.src = returnImage(question8.answer);

    canvas.width = 300 * 5;
    canvas.height = 400 * 5;
    const newImg = canvas.toDataURL("image/png");

    setNewImg(newImg);
  }

  React.useEffect(() => {
    if (user) {
      if (!user.id) navigate(`/`);
      if (!user.nickname) navigate(`/`);
      if (!user.gender) navigate(`/`);
      if (!user.age) navigate(`/`);
    } else {
      navigate(`/`);
    }

    if (question1) {
      if (!question1.answer) navigate(`/`);
    }

    if (question2) {
      if (!question2.answer) navigate(`/`);
    }

    if (question4) {
      if (!question4.answer) navigate(`/`);
    }

    if (question5) {
      if (!question5.answer) navigate(`/`);
    }

    if (question6) {
      if (!question6.answer) navigate(`/`);
    }

    if (question7) {
      if (!question7.answer) navigate(`/`);
    }

    if (question8) {
      if (!question8.answer) {
        navigate(`/`);
      } else {
        draw();

        addDoc(collection(db, "users"), {...dataReducer}).then(docRef => {
          console.log("Document written with ID: ", docRef.id);
        });
      }
    }
  }, [
    user,
    question1,
    question2,
    question4,
    question5,
    question6,
    question7,
    question8,
  ]);

  return (
    <div
      ref={ref}
      className="h-full flex flex-col items-center justify-center gap-2 overflow-hidden"
      style={{ opacity: 0 }}
    >
      <div>
        <h1 className="text-4xl">ของที่ระลึกจากการเดินทาง</h1>
        <small className="block tracking-wide text-center">
          #การเดินทางของอวัยวะ
        </small>
      </div>
      <div>
        <div
          className="konvajs-content"
          role="presentation"
          style={{
            position: "relative",
            userSelect: "none",
            width: 300,
            height: 400,
          }}
        >
          <canvas
            ref={canvasEl}
            width="300"
            height="400"
            style={{
              padding: 0,
              margin: 0,
              border: 0,
              background: "transparent",
              position: "absolute",
              top: 0,
              left: 0,
              width: 300,
              height: 400,
              display: "block",
            }}
          ></canvas>
        </div>
      </div>
      <div className="flex flex-col  gap-4 items-center">
        <button
          className="w-max relative inline-flex gap-1 items-center text-xl"
          onClick={() => {
            const canvas = canvasEl.current;

            const download = document.createElement("a");
            download.setAttribute("download", `${user.id}.png`);
            download.setAttribute("href", canvas.toDataURL("image/png"));
            download.click();
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5907 10.0001L13.005 12.5858V3.00006C13.005 2.96554 13.0032 2.93143 12.9998 2.89782C12.9486 2.39356 12.5227 2.00006 12.005 2.00006C11.4527 2.00006 11.005 2.44778 11.005 3.00006V12.5858L8.41917 10C8.02865 9.60951 7.39548 9.60951 7.00496 10C6.61443 10.3906 6.61443 11.0237 7.00496 11.4143L11.2979 15.7072C11.4854 15.8947 11.7398 16.0001 12.005 16.0001C12.2702 16.0001 12.5245 15.8947 12.7121 15.7072L17.005 11.4143C17.0538 11.3655 17.0965 11.3129 17.1331 11.2574C17.3894 10.8693 17.3467 10.3418 17.005 10.0001C16.6144 9.60955 15.9813 9.60955 15.5907 10.0001Z"
              fill="black"
            ></path>
            <path
              d="M4.00488 14.0001C4.55717 14.0001 5.00488 14.4478 5.00488 15.0001V19.0001H19.0049V15.0001C19.0049 14.4478 19.4526 14.0001 20.0049 14.0001C20.5572 14.0001 21.0049 14.4478 21.0049 15.0001V19.0001C21.0049 20.1047 20.1095 21.0001 19.0049 21.0001H5.00488C3.90031 21.0001 3.00488 20.1047 3.00488 19.0001V15.0001C3.00488 14.4478 3.4526 14.0001 4.00488 14.0001Z"
              fill="black"
            ></path>
          </svg>
          ดาวน์โหลดรูปภาพของคุณ
          <div className="bg-black absolute h-px bottom-[2px] w-full"></div>
        </button>
        <a
          rel="noreferrer"
          className="bg-black shadow text-white rounded-full px-6 text-2xl py-3 inline-block"
          target="_blank"
          href="https://www.organdonate.in.th/"
        >
          เข้าสู่เว็บไซต์สภากาชาดไทย
        </a>
      </div>
    </div>
  );
});

export default Scene85;
