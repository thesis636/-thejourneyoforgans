import {
  chapter59Image1Service,
  chapter59Image2Service
} from "../../services/chapter59/image.service";

export const chapter59ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER59_IMAGE_LOADING", payload: true });
    const chapter59Image1 = await chapter59Image1Service();
    const chapter59Image2 = await chapter59Image2Service();

    dispatch({
      type: "SET_CHAPTER59_IMAGE",
      payload: [
        chapter59Image1,
        chapter59Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER59_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
