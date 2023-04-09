import {
  chapter15Image1Service,
  chapter15Image2Service,
  chapter15Image3Service
} from "../../services/chapter15/image.service";

export const chapter15ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER15_IMAGE_LOADING", payload: true });
    const chapter15Image1 = await chapter15Image1Service();
    const chapter15Image2 = await chapter15Image2Service();
    const chapter15Image3 = await chapter15Image3Service();

    dispatch({
      type: "SET_CHAPTER15_IMAGE",
      payload: [
        chapter15Image1,
        chapter15Image2,
        chapter15Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER15_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
