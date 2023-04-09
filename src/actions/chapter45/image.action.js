import {
  chapter45Image1Service,
  chapter45Image2Service,
  chapter45Image3Service
} from "../../services/chapter45/image.service";

export const chapter45ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER45_IMAGE_LOADING", payload: true });
    const chapter45Image1 = await chapter45Image1Service();
    const chapter45Image2 = await chapter45Image2Service();
    const chapter45Image3 = await chapter45Image3Service();

    dispatch({
      type: "SET_CHAPTER45_IMAGE",
      payload: [
        chapter45Image1,
        chapter45Image2,
        chapter45Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER45_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
