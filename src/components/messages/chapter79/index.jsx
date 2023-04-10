import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { chapter80ImageAction } from "../../../actions/chapter80/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "79" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "79" ? "show" : "hidden")} 2s;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};

  @keyframes show {
    0% {
      opacity: 0%;
    }

    79% {
      opacity: 79%;
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

    79% {
      opacity: 75%;
    }

    50% {
      opacity: 50%;
    }

    75% {
      opacity: 79%;
    }

    100% {
      opacity: 0%;
      cursor: default;
      width: 0px;
      display: none;
    }
  }
`;

export function MessageChapter79() {
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chapter80ImageAction());
  }, []);
  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter80.loading}
    >
      <div>
        {dataReducer.chapter79.messageBox1.map((msg, key) => (
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
        {dataReducer.chapter79.buttons.map((btn, key) => (
          <div key={key}>
            <button
              style={{
                background: "white",
                width: "100%",
                borderRadius: "10px",
                margin: "5px",
                cursor: "pointer",
                boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.2)"
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
                    ...dataReducer.chapter79,
                    data: {
                      ...dataReducer.chapter79.data,
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

export default MessageChapter79;
