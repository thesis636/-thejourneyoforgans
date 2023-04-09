import {
  chapter4Image1Service,
  chapter4Image2Service,
  chapter4Image3Service,
  chapter4Image4Service,
  chapter4Image5Service,
} from "../../services/chapter4/image.service";

export const chapter4ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER4_IMAGE_LOADING", payload: true });
    const chapter4Image1 = await chapter4Image1Service();
    const chapter4Image2 = await chapter4Image2Service();
    const chapter4Image3 = await chapter4Image3Service();
    const chapter4Image4 = await chapter4Image4Service();
    const chapter4Image5 = await chapter4Image5Service();

    dispatch({
      type: "SET_CHAPTER4_IMAGE",
      payload: [
        chapter4Image1,
        chapter4Image2,
        chapter4Image3,
        chapter4Image4,
        chapter4Image5,
      ],
    });

    dispatch({ type: "SET_CHAPTER4_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
