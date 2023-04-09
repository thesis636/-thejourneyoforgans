import {
  chapter60Image1Service,
  chapter60Image2Service
} from "../../services/chapter60/image.service";

export const chapter60ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER60_IMAGE_LOADING", payload: true });
    const chapter60Image1 = await chapter60Image1Service();
    const chapter60Image2 = await chapter60Image2Service();

    dispatch({
      type: "SET_CHAPTER60_IMAGE",
      payload: [
        chapter60Image1,
        chapter60Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER60_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
