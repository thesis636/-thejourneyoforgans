import {
  chapter21Image1Service,
  chapter21Image2Service,
  chapter21Image3Service,
  chapter21Image4Service,
  chapter21Image5Service,
  chapter21Image6Service,
} from "../../services/chapter21/image.service";

export const chapter21ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER21_IMAGE_LOADING", payload: true });
    const chapter21Image1 = await chapter21Image1Service();
    const chapter21Image2 = await chapter21Image2Service();
    const chapter21Image3 = await chapter21Image3Service();
    const chapter21Image4 = await chapter21Image4Service();
    const chapter21Image5 = await chapter21Image5Service();
    const chapter21Image6 = await chapter21Image6Service();

    dispatch({
      type: "SET_CHAPTER21_IMAGE",
      payload: [
        chapter21Image1,
        chapter21Image2,
        chapter21Image3,
        chapter21Image4,
        chapter21Image5,
        chapter21Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER21_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
