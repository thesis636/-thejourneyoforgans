import {
  chapter5Image1Service,
  chapter5Image2Service,
} from "../../services/chapter5/image.service";

export const chapter5ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER5_IMAGE_LOADING", payload: true });
    const chapter5Image1 = await chapter5Image1Service();
    const chapter5Image2 = await chapter5Image2Service();

    dispatch({
      type: "SET_CHAPTER5_IMAGE",
      payload: [
        chapter5Image1,
        chapter5Image2,
      ],
    });

    dispatch({ type: "SET_CHAPTER5_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
