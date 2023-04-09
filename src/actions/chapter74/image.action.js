import {
  chapter74Image1Service,
  chapter74Image2Service
} from "../../services/chapter74/image.service";

export const chapter74ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER74_IMAGE_LOADING", payload: true });
    const chapter74Image1 = await chapter74Image1Service();
    const chapter74Image2 = await chapter74Image2Service();

    dispatch({
      type: "SET_CHAPTER74_IMAGE",
      payload: [
        chapter74Image1,
        chapter74Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER74_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
