import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { chapter26ImageAction } from "../../../actions/chapter26/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "25" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "25" ? "show" : "hidden")} 2s;
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

export function MessageChapter25() {
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chapter26ImageAction());
  }, []);
  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter26.loading}
    >
      <div>
        {dataReducer.chapter25.messageBox1.map((msg, key) => (
          <p
            key={key}
            style={{
              margin: 0,
            }}
          >
            {msg}
          </p>
        ))}
      </div>
      <div>
        {dataReducer.chapter25.buttons.map((btn, key) => (
          <div key={key}>
            <button
              style={{
                background: "white",
                width: "100%",
                borderRadius: "10px",
                margin: "5px",
                cursor: "pointer",
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
                dispatch({
                  type: btn.onClick.setDataChapter.type,
                  payload: {
                    ...dataReducer.chapter25,
                    data: {
                      ...dataReducer.chapter25.data,
                      choice: btn.onClick.setDataChapter.payload,
                    },
                  },
                });
              }}
            >
              {btn.title}
            </button>
          </div>
        ))}
      </div>
    </MessageAnimetion>
  );
}

export default MessageChapter25;
