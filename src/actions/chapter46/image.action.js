import {
  chapter46Image1Service,
  chapter46Image2Service,
  chapter46Image3Service
} from "../../services/chapter46/image.service";

export const chapter46ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER46_IMAGE_LOADING", payload: true });
    const chapter46Image1 = await chapter46Image1Service();
    const chapter46Image2 = await chapter46Image2Service();
    const chapter46Image3 = await chapter46Image3Service();

    dispatch({
      type: "SET_CHAPTER46_IMAGE",
      payload: [
        chapter46Image1,
        chapter46Image2,
        chapter46Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER46_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
