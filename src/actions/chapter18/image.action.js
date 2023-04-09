import {
  chapter18Image1Service,
  chapter18Image2Service,
  chapter18Image3Service
} from "../../services/chapter18/image.service";

export const chapter18ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER18_IMAGE_LOADING", payload: true });
    const chapter18Image1 = await chapter18Image1Service();
    const chapter18Image2 = await chapter18Image2Service();
    const chapter18Image3 = await chapter18Image3Service();

    dispatch({
      type: "SET_CHAPTER18_IMAGE",
      payload: [
        chapter18Image1,
        chapter18Image2,
        chapter18Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER18_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
