import {
  chapter70Image1Service,
  chapter70Image2Service
} from "../../services/chapter70/image.service";

export const chapter70ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER70_IMAGE_LOADING", payload: true });
    const chapter70Image1 = await chapter70Image1Service();
    const chapter70Image2 = await chapter70Image2Service();

    dispatch({
      type: "SET_CHAPTER70_IMAGE",
      payload: [
        chapter70Image1,
        chapter70Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER70_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
