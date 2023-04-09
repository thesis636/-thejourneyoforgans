import {
  chapter29Image1Service,
  chapter29Image2Service,
  chapter29Image3Service
} from "../../services/chapter29/image.service";

export const chapter29ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER29_IMAGE_LOADING", payload: true });
    const chapter29Image1 = await chapter29Image1Service();
    const chapter29Image2 = await chapter29Image2Service();
    const chapter29Image3 = await chapter29Image3Service();

    dispatch({
      type: "SET_CHAPTER29_IMAGE",
      payload: [
        chapter29Image1,
        chapter29Image2,
        chapter29Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER29_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
