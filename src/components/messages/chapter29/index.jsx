import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { chapter30ImageAction } from "../../../actions/chapter30/image.action";
import img from "./img/card.PNG";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "29" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "29" ? "show" : "hidden")} 2s;
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

    300% {
      opacity: 300%;
    }
  }

  @keyframes hidden {
    0% {
      opacity: 300%;
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

    300% {
      opacity: 0%;
      cursor: default;
      width: 0px;
      display: none;
    }
  }
`;

export function MessageChapter29() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chapter30ImageAction());
  }, []);

  React.useEffect(() => {
    if (backgroundReducer.chapter === "29") {
      // setTimeout(() => {
      //   if (!imageReducer.chapter30.loading) {
      //     dispatch({
      //       type: dataReducer.chapter29.buttons[0].onClick.setBackground.type,
      //       payload:
      //         dataReducer.chapter29.buttons[0].onClick.setBackground.payload,
      //     });
      //     dispatch({
      //       type: dataReducer.chapter29.buttons[0].onClick.setMessage.type,
      //       payload:
      //         dataReducer.chapter29.buttons[0].onClick.setMessage.payload,
      //     });
      //   }
      // }, 3000);
    }
  }, [backgroundReducer.chapter]);

  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter30.loading}
    >
      <div>
        <img src={img}  style={{
                width: "100%",
              }} />
        <div
          style={{
            position: "fixed",
            display: "flex",
            top: "0",
            width: "100%",
            height: "100%",
            left: "0",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
          onClick={() => {
            dispatch({
              type: dataReducer.chapter29.buttons[0].onClick.setBackground.type,
              payload:
                dataReducer.chapter29.buttons[0].onClick.setBackground.payload,
            });
            dispatch({
              type: dataReducer.chapter29.buttons[0].onClick.setMessage.type,
              payload:
                dataReducer.chapter29.buttons[0].onClick.setMessage.payload,
            });
          }}
        >
          <p
            style={{
              fontSize: "20px",
            }}
          >
            {dataReducer.chapter3.data.name}
          </p>
        </div>
      </div>
    </MessageAnimetion>
  );
}

export default MessageChapter29;
