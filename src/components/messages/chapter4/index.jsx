import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { chapter5ImageAction } from "../../../actions/chapter5/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "4" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "4" ? "show" : "hidden")} 2s;
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

export function MessageChapter4() {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(chapter5ImageAction());
  }, []);

  React.useEffect(() => {
    if (backgroundReducer.chapter === "4") {
      setTimeout(() => {
        if (!imageReducer.chapter5.loading) {
          dispatch({
            type: dataReducer.chapter4.buttons[0].onClick.setBackground.type,
            payload:
              dataReducer.chapter4.buttons[0].onClick.setBackground.payload,
          });
          dispatch({
            type: dataReducer.chapter4.buttons[0].onClick.setMessage.type,
            payload: dataReducer.chapter4.buttons[0].onClick.setMessage.payload,
          });
        }
      }, 3000);
    }
  }, [backgroundReducer.chapter, imageReducer.chapter5.loading]);

  return (
    <MessageAnimetion
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter5.loading}
    ></MessageAnimetion>
  );
}

export default MessageChapter4;
