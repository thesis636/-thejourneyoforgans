import {
  chapter24Image1Service,
  chapter24Image2Service
} from "../../services/chapter24/image.service";

export const chapter24ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER24_IMAGE_LOADING", payload: true });
    const chapter24Image1 = await chapter24Image1Service();
    const chapter24Image2 = await chapter24Image2Service();

    dispatch({
      type: "SET_CHAPTER24_IMAGE",
      payload: [
        chapter24Image1,
        chapter24Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER24_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
