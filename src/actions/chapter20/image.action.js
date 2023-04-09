import {
  chapter20Image1Service,
  chapter20Image2Service,
  chapter20Image3Service,
  chapter20Image4Service,
  chapter20Image5Service,
  chapter20Image6Service,
} from "../../services/chapter20/image.service";

export const chapter20ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER20_IMAGE_LOADING", payload: true });
    const chapter20Image1 = await chapter20Image1Service();
    const chapter20Image2 = await chapter20Image2Service();
    const chapter20Image3 = await chapter20Image3Service();
    const chapter20Image4 = await chapter20Image4Service();
    const chapter20Image5 = await chapter20Image5Service();
    const chapter20Image6 = await chapter20Image6Service();

    dispatch({
      type: "SET_CHAPTER20_IMAGE",
      payload: [
        chapter20Image1,
        chapter20Image2,
        chapter20Image3,
        chapter20Image4,
        chapter20Image5,
        chapter20Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER20_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
