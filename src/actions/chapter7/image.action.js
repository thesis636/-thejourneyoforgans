import {
  chapter7Image1Service,
  chapter7Image2Service,
} from "../../services/chapter7/image.service";

export const chapter7ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER7_IMAGE_LOADING", payload: true });
    const chapter7Image1 = await chapter7Image1Service();
    const chapter7Image2 = await chapter7Image2Service();

    dispatch({
      type: "SET_CHAPTER7_IMAGE",
      payload: [
        chapter7Image1,
        chapter7Image2,
      ],
    });

    dispatch({ type: "SET_CHAPTER7_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
