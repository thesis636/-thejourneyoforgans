import {
  chapter65Image1Service,
  chapter65Image2Service
} from "../../services/chapter65/image.service";

export const chapter65ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER65_IMAGE_LOADING", payload: true });
    const chapter65Image1 = await chapter65Image1Service();
    const chapter65Image2 = await chapter65Image2Service();

    dispatch({
      type: "SET_CHAPTER65_IMAGE",
      payload: [
        chapter65Image1,
        chapter65Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER65_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
