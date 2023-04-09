import {
  chapter25Image1Service,
  chapter25Image2Service
} from "../../services/chapter25/image.service";

export const chapter25ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER25_IMAGE_LOADING", payload: true });
    const chapter25Image1 = await chapter25Image1Service();
    const chapter25Image2 = await chapter25Image2Service();

    dispatch({
      type: "SET_CHAPTER25_IMAGE",
      payload: [
        chapter25Image1,
        chapter25Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER25_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
