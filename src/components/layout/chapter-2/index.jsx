import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import icon from "./img/IMG_4571.PNG";

export function LayoutChapter2() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === '2' ? "block" : "none",
        animation:
          layoutReducer.step === '2' && `keyframe-layout-chapter-show-text 1s`,
        cursor: "pointer",
      }}
    >
      <div>
        <img height={135} src={icon} />
      </div>
      <div>
        {/* <form> */}
        <div
          style={{
            padding: 20,
          }}
        >
          <div
            style={{
              display: "flex",
            }}
          >
            <label
              style={{
                fontSize: 24,
              }}
              htmlFor="name"
            >
              ชื่อเล่น
            </label>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              style={{
                width: "100%",
                height: 30,
                borderRadius: 10,
                border: 0,
                padding: "5px 10px",
              }}
              type="text"
              id="name"
              name="name"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <label htmlFor="gender">เพศ</label>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <select
                name="gender"
                id="gender"
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 10,
                  border: 0,
                  padding: "5px 10px",
                }}
              >
                <option value="1">ชาย</option>
                <option value="2">หญิง</option>
              </select>
            </div>
          </div>
          <div
            style={{
              padding: 20,
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <label htmlFor="age">อายุ</label>
            </div>
            <div
              style={{
                display: "flex",
              }}
            >
              <input
                type="text"
                id="age"
                name="age"
                style={{
                  width: "100%",
                  height: 30,
                  borderRadius: 10,
                  border: 0,
                  padding: "5px 10px",
                }}
              />
            </div>
          </div>
        </div>
        <br />
        <button
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch({ type: "SET_BACKGROUND", payload: '1' });
          }}
        >
          {"แตะเพื่อไปต่อ>>"}
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default LayoutChapter2;
