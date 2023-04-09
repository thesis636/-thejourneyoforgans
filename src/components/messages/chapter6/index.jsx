import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { chapter7ImageAction } from "../../../actions/chapter7/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "6" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "6" ? "show" : "hidden")} 2s;
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

export function MessageChapter6() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chapter7ImageAction());
  }, []);

  React.useEffect(() => {
    if (backgroundReducer.chapter === "6") {
      setTimeout(() => {
        if (!imageReducer.chapter7.loading) {
          dispatch({
            type: dataReducer.chapter6.buttons[0].onClick.setBackground.type,
            payload:
              dataReducer.chapter6.buttons[0].onClick.setBackground.payload,
          });
          dispatch({
            type: dataReducer.chapter6.buttons[0].onClick.setMessage.type,
            payload: dataReducer.chapter6.buttons[0].onClick.setMessage.payload,
          });
        }
      }, 3000);
    }
  }, [backgroundReducer.chapter, imageReducer.chapter7.loading]);

  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter7.loading}
    ></MessageAnimetion>
  );
}

export default MessageChapter6;
