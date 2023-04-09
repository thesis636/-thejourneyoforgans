import {
  chapter64Image1Service,
  chapter64Image2Service
} from "../../services/chapter64/image.service";

export const chapter64ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER64_IMAGE_LOADING", payload: true });
    const chapter64Image1 = await chapter64Image1Service();
    const chapter64Image2 = await chapter64Image2Service();

    dispatch({
      type: "SET_CHAPTER64_IMAGE",
      payload: [
        chapter64Image1,
        chapter64Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER64_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
