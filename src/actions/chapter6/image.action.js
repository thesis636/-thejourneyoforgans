import {
  chapter6Image1Service,
  chapter6Image2Service,
  chapter6Image3Service,
  chapter6Image4Service,
  chapter6Image5Service,
  chapter6Image6Service,
  chapter6Image7Service,
  chapter6Image8Service,
} from "../../services/chapter6/image.service";

export const chapter6ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER6_IMAGE_LOADING", payload: true });
    const chapter6Image1 = await chapter6Image1Service();
    const chapter6Image2 = await chapter6Image2Service();
    const chapter6Image3 = await chapter6Image3Service();
    const chapter6Image4 = await chapter6Image4Service();
    const chapter6Image5 = await chapter6Image5Service();
    const chapter6Image6 = await chapter6Image6Service();
    const chapter6Image7 = await chapter6Image7Service();
    const chapter6Image8 = await chapter6Image8Service();

    dispatch({
      type: "SET_CHAPTER6_IMAGE",
      payload: [
            chapter6Image1,
            chapter6Image2,
            chapter6Image3,
            chapter6Image4,
            chapter6Image5,
            chapter6Image6,
            chapter6Image7,
            chapter6Image8,
          ],
    });

    dispatch({ type: "SET_CHAPTER6_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
