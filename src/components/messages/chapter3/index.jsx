import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import icon from "./img/IMG_4571.PNG";
import styled from "styled-components";
import { chapter4ImageAction } from "../../../actions/chapter4/image.action";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../../firebase.config";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "3" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "3" ? "show" : "hidden")} 2s;
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

    100% {
      opacity: 100%;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 100%;
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

    100% {
      opacity: 0%;
      cursor: default;
      width: 0px;
      display: none;
    }
  }
`;

export function MessageChapter3() {
  const messageReducer = useSelector((state) => state.messageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);
  const imageReducer = useSelector((state) => state.imageReducer);

  function onDisplay() {
    if (
      dataReducer.chapter3.data.name &&
      dataReducer.chapter3.data.gender &&
      dataReducer.chapter3.data.age
    ) {
      return "initial";
    } else {
      return "none";
    }
  }

  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(chapter4ImageAction());
  }, []);

  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter4.loading}
    >
      <div>
        <img height={135} src={icon} />
      </div>
      <div
        style={{
          padding: 25,
        }}
      >
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
            <label htmlFor="name">ชื่อเล่น</label>
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
              onChange={(event) => {
                dispatch({
                  type: "SET_DATA_CHAPTER3",
                  payload: {
                    ...dataReducer.chapter3,
                    data: {
                      ...dataReducer.chapter3.data,
                      name: event.target.value,
                    },
                  },
                });
              }}
              defaultValue={dataReducer.chapter3.data.name}
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
                  width: 100,
                  height: 40,
                  borderRadius: 10,
                  border: 0,
                  padding: "5px 10px",
                }}
                onChange={(event) => {
                  dispatch({
                    type: "SET_DATA_CHAPTER3",
                    payload: {
                      ...dataReducer.chapter3,
                      data: {
                        ...dataReducer.chapter3.data,
                        gender: event.target.value,
                      },
                    },
                  });
                }}
                value={dataReducer.chapter3.data.gender}
              >
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
                <option value="LGBTQ+">LGBTQ+</option>
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
                onChange={(event) => {
                  dispatch({
                    type: "SET_DATA_CHAPTER3",
                    payload: {
                      ...dataReducer.chapter3,
                      data: {
                        ...dataReducer.chapter3.data,
                        age: event.target.value,
                      },
                    },
                  });
                }}
                defaultValue={dataReducer.chapter3.data.age}
              />
            </div>
          </div>
        </div>
        <br />
        {dataReducer.chapter3.buttons.map((btn, key) => (
          <button
            key={key}
            style={{
              cursor: "pointer",
              display: onDisplay(),
            }}
            onClick={() => {
              dispatch({
                type: btn.onClick.setBackground.type,
                payload: btn.onClick.setBackground.payload,
              });
              dispatch({
                type: btn.onClick.setMessage.type,
                payload: btn.onClick.setMessage.payload,
              });

              addDoc(collection(db, "users"), {
                name: dataReducer.chapter3.data.name,
                age: dataReducer.chapter3.data.age,
                gender: dataReducer.chapter3.data.gender
              }).then(docRef => {
                console.log("Document written with ID: ", docRef.id);
              });
            }}
          >
            {btn.title}
          </button>
        ))}
        {/* </form> */}
      </div>
    </MessageAnimetion>
  );
}

export default MessageChapter3;
