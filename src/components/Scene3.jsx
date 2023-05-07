import React from "react";

import projectLogo from "../images/project-logo.png";

const Scene3 = React.forwardRef((props, ref) => {
  const { onNextScene,onClick } = props;
  const [nickname, setNickname] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [age, setAge] = React.useState("");

  const [nicknameValidate, setNicknameValidate] = React.useState(false);
  const [ageValidate, setAgeValidate] = React.useState(false);

  const animateAlertNicknameEl = React.useRef(null);
  const animateAlertAgeEl = React.useRef(null);

  return (
    <div ref={ref} className="h-full text-center pt-40" style={{ opacity: 0 }}>
      <div
        style={{
          position: "fixed",
          zIndex: 9999,
          inset: "16px",
          pointerEvents: "none",
        }}
      >
        {nicknameValidate && (
          <div
            className="go4109123758"
            style={{
              left: "0px",
              right: "0px",
              display: "flex",
              position: "absolute",
              transition: "all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
              transform: "translateY(0px)",
              top: "0px",
              justifyContent: "center",
            }}
          >
            <div
              ref={animateAlertNicknameEl}
              className="go2072408551"
              style={{
                animation:
                  "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go3223188581",
              }}
            >
              <div className="go685806154">
                <div className="go1858758034"></div>
                <div className="go1579819456">
                  <div className="go2534082608"></div>
                </div>
              </div>
              <div role="status" aria-live="polite" className="go3958317564">
                กรุณากรอกชื่อเล่นของคุณ
              </div>
            </div>
          </div>
        )}

        {ageValidate && (
          <div
            className="go4109123758"
            style={{
              left: "0px",
              right: "0px",
              display: "flex",
              position: "absolute",
              transition: "all 230ms cubic-bezier(0.21, 1.02, 0.73, 1) 0s",
              transform: "translateY(0px)",
              top: "0px",
              justifyContent: "center",
            }}
          >
            <div
              ref={animateAlertAgeEl}
              className="go2072408551"
              style={{
                animation:
                  "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go3223188581",
              }}
            >
              <div className="go685806154">
                <div className="go1858758034"></div>
                <div className="go1579819456">
                  <div className="go2534082608"></div>
                </div>
              </div>
              <div role="status" aria-live="polite" className="go3958317564">
                กรุณากรอกอายุของคุณ
              </div>
            </div>
          </div>
        )}
      </div>
      <img className="w-32 mx-auto" src={projectLogo} alt="" />
      <div className="flex flex-col mt-8 gap-4 items-center">
        <label className="flex text-2xl flex-col items-start gap-2">
          ชื่อเล่น
          <input
            autoComplete="off"
            name="nickname"
            className="p-2 text-xl shadow rounded w-64"
            type="text"
            inputMode="text"
            defaultValue={nickname}
            onChange={(event) => {
              setNickname(event.target.value);
            }}
          />
        </label>
        <div className="flex gap-4">
          <label className="flex text-2xl flex-col items-start gap-2">
            เพศ
            <select
              name="gender"
              className="text-xl p-2 shadow-sm rounded"
              onChange={(event) => {
                setGender(event.target.value);
              }}
              value={gender}
            >
              <option value="male">ชาย</option>
              <option value="female">หญิง</option>
              <option value="lgbtq+">LGBTQ+</option>
            </select>
          </label>
          <label className="flex text-2xl flex-col items-start gap-2">
            อายุ
            <input
              autoComplete="off"
              name="age"
              className="p-2 text-xl shadow rounded w-12 h-[47px]"
              type="number"
              inputMode="decimal"
              defaultValue={age}
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
          </label>
        </div>
      </div>
      <button
        className="text-2xl tracking-wide mt-8"
        onClick={() => {
          onClick()
          // console.log({
          //   nickname: nickname,
          //   gender: gender,
          //   age: age,
          // });
          Math.hRandom = function (positions, float = false) {
            var number = "";
            var point = -1;

            if (float) point = Math.floor(Math.random() * positions) + 1;

            for (let i = 0; i < positions; i++) {
              if (i == point) number += ".";
              number += Math.floor(Math.random() * 10);
            }

            return number;
          };

          if (nickname && age) {
            onNextScene({
              id: Math.hRandom(6),
              nickname: nickname,
              gender: gender,
              age: age,
            });
          }

          if (!nickname) {
            setNicknameValidate(true);
            setTimeout(() => {
              animateAlertNicknameEl.current.style.animation =
                "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go502128938";

              setTimeout(() => {
                setNicknameValidate(false);
              }, 1000);
            }, 4000);
          } else if (!age) {
            setAgeValidate(true);

            setTimeout(() => {
              if (animateAlertAgeEl) {
                animateAlertAgeEl.current.style.animation =
                  "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running go502128938";
              }
              setTimeout(() => {
                setAgeValidate(false);
              }, 1000);
            }, 4000);
          }
        }}
      >
        กดเพื่อไปต่อ &gt;&gt;
      </button>
    </div>
  );
});

export default Scene3;
