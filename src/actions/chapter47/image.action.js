import {
  chapter47Image1Service,
  chapter47Image2Service
} from "../../services/chapter47/image.service";

export const chapter47ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER47_IMAGE_LOADING", payload: true });
    const chapter47Image1 = await chapter47Image1Service();
    const chapter47Image2 = await chapter47Image2Service();

    dispatch({
      type: "SET_CHAPTER47_IMAGE",
      payload: [
        chapter47Image1,
        chapter47Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER47_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
