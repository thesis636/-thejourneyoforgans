import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import icon from "./img/IMG_4571.PNG";
import styled from "styled-components";
import { chapter2ImageAction } from "../../../actions/chapter2/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "1" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "1" ? "show" : "hidden")} 2s;
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

export function MessageChapter1() {
  const messageReducer = useSelector((state) => state.messageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);
  const imageReducer = useSelector((state) => state.imageReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(chapter2ImageAction());
  }, []);
  return (
    <React.Fragment>
      {!imageReducer.chapter1.loading && (
        <MessageAnimetion
          onClick={() => {
            if (!imageReducer.chapter2.loading) {
              dispatch({
                type: dataReducer.chapter1.buttons[0].onClick.setBackground
                  .type,
                payload:
                  dataReducer.chapter1.buttons[0].onClick.setBackground.payload,
              });
              dispatch({
                type: dataReducer.chapter1.buttons[0].onClick.setMessage.type,
                payload:
                  dataReducer.chapter1.buttons[0].onClick.setMessage.payload,
              });
            }
          }}
          chapter={messageReducer.chapter}
          pointer={!imageReducer.chapter2.loading}
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
              {dataReducer.chapter1.messageBox1.map((msg, key) => (
                <p
                  key={key}
                  style={{
                    fontSize: "15px",
                    margin: 0,
                  }}
                >
                  {msg}
                </p>
              ))}
            </div>
            <div
              style={{
                padding: "5px",
                margin: 0,
              }}
            >
              {dataReducer.chapter1.messageBox2.map((msg, key) => (
                <p
                  key={key}
                  style={{
                    fontSize: "15px",
                    margin: 0,
                  }}
                >
                  {msg}
                </p>
              ))}
            </div>
            <div
              style={{
                padding: "5px",
                margin: 0,
              }}
            >
              {dataReducer.chapter1.messageBox3.map((msg, key) => (
                <p
                  key={key}
                  style={{
                    fontSize: "15px",
                    margin: 0,
                  }}
                >
                  {msg}
                </p>
              ))}
            </div>
            <div
              style={{
                padding: "5px",
                margin: 0,
              }}
            >
              {dataReducer.chapter1.messageBox4.map((msg, key) => (
                <p
                  key={key}
                  style={{
                    fontSize: "15px",
                    margin: 0,
                  }}
                >
                  {msg}
                </p>
              ))}
            </div>
          </div>
        </MessageAnimetion>
      )}
    </React.Fragment>
  );
}

export default MessageChapter1;
