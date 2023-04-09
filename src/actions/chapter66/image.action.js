import {
  chapter66Image1Service,
  chapter66Image2Service
} from "../../services/chapter66/image.service";

export const chapter66ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER66_IMAGE_LOADING", payload: true });
    const chapter66Image1 = await chapter66Image1Service();
    const chapter66Image2 = await chapter66Image2Service();

    dispatch({
      type: "SET_CHAPTER66_IMAGE",
      payload: [
        chapter66Image1,
        chapter66Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER66_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
