import {
  chapter77Image1Service,
  chapter77Image2Service
} from "../../services/chapter77/image.service";

export const chapter77ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER77_IMAGE_LOADING", payload: true });
    const chapter77Image1 = await chapter77Image1Service();
    const chapter77Image2 = await chapter77Image2Service();

    dispatch({
      type: "SET_CHAPTER77_IMAGE",
      payload: [
        chapter77Image1,
        chapter77Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER77_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
