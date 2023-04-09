import {
  chapter84Image1Service,
  chapter84Image2Service,
  chapter84Image3Service
} from "../../services/chapter84/image.service";

export const chapter84ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER84_IMAGE_LOADING", payload: true });
    const chapter84Image1 = await chapter84Image1Service();
    const chapter84Image2 = await chapter84Image2Service();
    const chapter84Image3 = await chapter84Image3Service();

    dispatch({
      type: "SET_CHAPTER84_IMAGE",
      payload: [
        chapter84Image1,
        chapter84Image2,
        chapter84Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER84_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
