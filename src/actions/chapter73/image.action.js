import {
  chapter73Image1Service,
  chapter73Image2Service
} from "../../services/chapter73/image.service";

export const chapter73ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER73_IMAGE_LOADING", payload: true });
    const chapter73Image1 = await chapter73Image1Service();
    const chapter73Image2 = await chapter73Image2Service();

    dispatch({
      type: "SET_CHAPTER73_IMAGE",
      payload: [
        chapter73Image1,
        chapter73Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER73_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
