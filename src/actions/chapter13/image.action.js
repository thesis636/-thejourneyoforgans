import {
  chapter13Image1Service,
  chapter13Image2Service,
  chapter13Image3Service,
  chapter13Image4Service,
  chapter13Image5Service,
  chapter13Image6Service,
} from "../../services/chapter13/image.service";

export const chapter13ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER13_IMAGE_LOADING", payload: true });
    const chapter13Image1 = await chapter13Image1Service();
    const chapter13Image2 = await chapter13Image2Service();
    const chapter13Image3 = await chapter13Image3Service();
    const chapter13Image4 = await chapter13Image4Service();
    const chapter13Image5 = await chapter13Image5Service();
    const chapter13Image6 = await chapter13Image6Service();

    dispatch({
      type: "SET_CHAPTER13_IMAGE",
      payload: [
        chapter13Image1,
        chapter13Image2,
        chapter13Image3,
        chapter13Image4,
        chapter13Image5,
        chapter13Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER13_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
