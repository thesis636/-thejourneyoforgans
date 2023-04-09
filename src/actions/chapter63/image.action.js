import {
  chapter63Image1Service,
  chapter63Image2Service
} from "../../services/chapter63/image.service";

export const chapter63ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER63_IMAGE_LOADING", payload: true });
    const chapter63Image1 = await chapter63Image1Service();
    const chapter63Image2 = await chapter63Image2Service();

    dispatch({
      type: "SET_CHAPTER63_IMAGE",
      payload: [
        chapter63Image1,
        chapter63Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER63_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
