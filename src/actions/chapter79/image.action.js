import {
  chapter79Image1Service,
  chapter79Image2Service
} from "../../services/chapter79/image.service";

export const chapter79ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER79_IMAGE_LOADING", payload: true });
    const chapter79Image1 = await chapter79Image1Service();
    const chapter79Image2 = await chapter79Image2Service();

    dispatch({
      type: "SET_CHAPTER79_IMAGE",
      payload: [
        chapter79Image1,
        chapter79Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER79_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
