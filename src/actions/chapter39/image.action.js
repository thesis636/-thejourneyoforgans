import {
  chapter39Image1Service,
  chapter39Image2Service
} from "../../services/chapter39/image.service";

export const chapter39ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER39_IMAGE_LOADING", payload: true });
    const chapter39Image1 = await chapter39Image1Service();
    const chapter39Image2 = await chapter39Image2Service();

    dispatch({
      type: "SET_CHAPTER39_IMAGE",
      payload: [
        chapter39Image1,
        chapter39Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER39_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
