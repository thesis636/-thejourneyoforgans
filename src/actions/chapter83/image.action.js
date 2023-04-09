import {
  chapter83Image1Service,
  chapter83Image2Service,
  chapter83Image3Service,
  chapter83Image4Service,
  chapter83Image5Service,
  chapter83Image6Service,
} from "../../services/chapter83/image.service";

export const chapter83ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER83_IMAGE_LOADING", payload: true });
    const chapter83Image1 = await chapter83Image1Service();
    const chapter83Image2 = await chapter83Image2Service();
    const chapter83Image3 = await chapter83Image3Service();
    const chapter83Image4 = await chapter83Image4Service();
    const chapter83Image5 = await chapter83Image5Service();
    const chapter83Image6 = await chapter83Image6Service();

    dispatch({
      type: "SET_CHAPTER83_IMAGE",
      payload: [
        chapter83Image1,
        chapter83Image2,
        chapter83Image3,
        chapter83Image4,
        chapter83Image5,
        chapter83Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER83_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
