import {
  chapter26Image1Service,
  chapter26Image2Service
} from "../../services/chapter26/image.service";

export const chapter26ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER26_IMAGE_LOADING", payload: true });
    const chapter26Image1 = await chapter26Image1Service();
    const chapter26Image2 = await chapter26Image2Service();

    dispatch({
      type: "SET_CHAPTER26_IMAGE",
      payload: [
        chapter26Image1,
        chapter26Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER26_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
