import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import icon from "./img/IMG_4571.PNG";
import styled from "styled-components";
import { chapter3ImageAction } from "../../../actions/chapter3/image.action";

const MessageAnimetion = styled.div`
  display: ${(props) => (props.chapter === "2" ? "block" : "none")};
  animation: ${(props) => (props.chapter === "2" ? "show" : "hidden")} 2s;
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

export function MessageChapter2() {
  const messageReducer = useSelector((state) => state.messageReducer);
  const imageReducer = useSelector((state) => state.imageReducer);
  const dataReducer = useSelector((state) => state.dataReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(chapter3ImageAction());
  }, []);
  return (
    <MessageAnimetion
      onClick={() => {
        if (!imageReducer.chapter3.loading) {
          dispatch({
            type: dataReducer.chapter2.buttons[0].onClick.setBackground.type,
            payload:
              dataReducer.chapter2.buttons[0].onClick.setBackground.payload,
          });
          dispatch({
            type: dataReducer.chapter2.buttons[0].onClick.setMessage.type,
            payload: dataReducer.chapter2.buttons[0].onClick.setMessage.payload,
          });
        }
      }}
      chapter={messageReducer.chapter}
      pointer={!imageReducer.chapter3.loading}
    >
      <img height={300} src={icon} />
    </MessageAnimetion>
  );
}

export default MessageChapter2;
