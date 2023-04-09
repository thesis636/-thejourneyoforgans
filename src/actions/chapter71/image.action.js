import {
  chapter71Image1Service,
  chapter71Image2Service
} from "../../services/chapter71/image.service";

export const chapter71ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER71_IMAGE_LOADING", payload: true });
    const chapter71Image1 = await chapter71Image1Service();
    const chapter71Image2 = await chapter71Image2Service();

    dispatch({
      type: "SET_CHAPTER71_IMAGE",
      payload: [
        chapter71Image1,
        chapter71Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER71_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
