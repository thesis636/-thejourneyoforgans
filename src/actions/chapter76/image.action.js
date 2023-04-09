import {
  chapter76Image1Service,
  chapter76Image2Service
} from "../../services/chapter76/image.service";

export const chapter76ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER76_IMAGE_LOADING", payload: true });
    const chapter76Image1 = await chapter76Image1Service();
    const chapter76Image2 = await chapter76Image2Service();

    dispatch({
      type: "SET_CHAPTER76_IMAGE",
      payload: [
        chapter76Image1,
        chapter76Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER76_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
