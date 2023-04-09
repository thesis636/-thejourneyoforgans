import {
  chapter31Image1Service,
  chapter31Image2Service,
  chapter31Image3Service
} from "../../services/chapter31/image.service";

export const chapter31ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER31_IMAGE_LOADING", payload: true });
    const chapter31Image1 = await chapter31Image1Service();
    const chapter31Image2 = await chapter31Image2Service();
    const chapter31Image3 = await chapter31Image3Service();

    dispatch({
      type: "SET_CHAPTER31_IMAGE",
      payload: [
        chapter31Image1,
        chapter31Image2,
        chapter31Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER31_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
