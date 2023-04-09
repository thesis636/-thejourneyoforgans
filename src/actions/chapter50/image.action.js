import {
  chapter50Image1Service,
  chapter50Image2Service,
  chapter50Image3Service,
  chapter50Image4Service,
  chapter50Image5Service,
  chapter50Image6Service,
  chapter50Image7Service,
  chapter50Image8Service,
  chapter50Image9Service,
  chapter50Image10Service,
} from "../../services/chapter50/image.service";

export const chapter50ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER50_IMAGE_LOADING", payload: true });
    const chapter50Image1 = await chapter50Image1Service();
    const chapter50Image2 = await chapter50Image2Service();
    const chapter50Image3 = await chapter50Image3Service();
    const chapter50Image4 = await chapter50Image4Service();
    const chapter50Image5 = await chapter50Image5Service();
    const chapter50Image6 = await chapter50Image6Service();
    const chapter50Image7 = await chapter50Image7Service();
    const chapter50Image8 = await chapter50Image8Service();
    const chapter50Image9 = await chapter50Image9Service();
    const chapter50Image10 = await chapter50Image10Service();

    dispatch({
      type: "SET_CHAPTER50_IMAGE",
      payload: [
        chapter50Image1,
        chapter50Image2,
        chapter50Image3,
        chapter50Image4,
        chapter50Image5,
        chapter50Image6,
        chapter50Image7,
        chapter50Image8,
        chapter50Image9,
        chapter50Image10
      ],
    });

    dispatch({ type: "SET_CHAPTER50_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
