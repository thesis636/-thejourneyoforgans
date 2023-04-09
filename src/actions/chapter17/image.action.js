import {
  chapter17Image1Service,
  chapter17Image2Service,
  chapter17Image3Service
} from "../../services/chapter17/image.service";

export const chapter17ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER17_IMAGE_LOADING", payload: true });
    const chapter17Image1 = await chapter17Image1Service();
    const chapter17Image2 = await chapter17Image2Service();
    const chapter17Image3 = await chapter17Image3Service();

    dispatch({
      type: "SET_CHAPTER17_IMAGE",
      payload: [
        chapter17Image1,
        chapter17Image2,
        chapter17Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER17_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
