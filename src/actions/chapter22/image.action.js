import {
  chapter22Image1Service,
  chapter22Image2Service,
  chapter22Image3Service,
  chapter22Image4Service,
  chapter22Image5Service,
  chapter22Image6Service,
} from "../../services/chapter22/image.service";

export const chapter22ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER22_IMAGE_LOADING", payload: true });
    const chapter22Image1 = await chapter22Image1Service();
    const chapter22Image2 = await chapter22Image2Service();
    const chapter22Image3 = await chapter22Image3Service();
    const chapter22Image4 = await chapter22Image4Service();
    const chapter22Image5 = await chapter22Image5Service();
    const chapter22Image6 = await chapter22Image6Service();

    dispatch({
      type: "SET_CHAPTER22_IMAGE",
      payload: [
        chapter22Image1,
        chapter22Image2,
        chapter22Image3,
        chapter22Image4,
        chapter22Image5,
        chapter22Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER22_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
