import {
  chapter3Image1Service,
  chapter3Image2Service,
  chapter3Image3Service,
  chapter3Image4Service,
  chapter3Image5Service,
  chapter3Image6Service,
  chapter3Image7Service,
} from "../../services/chapter3/image.service";

export const chapter3ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER3_IMAGE_LOADING", payload: true });
    const chapter3Image1 = await chapter3Image1Service();
    const chapter3Image2 = await chapter3Image2Service();
    const chapter3Image3 = await chapter3Image3Service();
    const chapter3Image4 = await chapter3Image4Service();
    const chapter3Image5 = await chapter3Image5Service();
    const chapter3Image6 = await chapter3Image6Service();
    const chapter3Image7 = await chapter3Image7Service();

    dispatch({
      type: "SET_CHAPTER3_IMAGE",
      payload: [
        chapter3Image1,
        chapter3Image2,
        chapter3Image3,
        chapter3Image4,
        chapter3Image5,
        chapter3Image6,
        chapter3Image7,
      ],
    });

    dispatch({ type: "SET_CHAPTER3_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
