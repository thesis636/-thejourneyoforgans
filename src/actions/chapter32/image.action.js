import {
  chapter32Image1Service,
  chapter32Image2Service,
  chapter32Image3Service
} from "../../services/chapter32/image.service";

export const chapter32ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER32_IMAGE_LOADING", payload: true });
    const chapter32Image1 = await chapter32Image1Service();
    const chapter32Image2 = await chapter32Image2Service();
    const chapter32Image3 = await chapter32Image3Service();

    dispatch({
      type: "SET_CHAPTER32_IMAGE",
      payload: [
        chapter32Image1,
        chapter32Image2,
        chapter32Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER32_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
