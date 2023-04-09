import {
  chapter23Image1Service,
  chapter23Image2Service,
  chapter23Image3Service,
  chapter23Image4Service,
  chapter23Image5Service,
  chapter23Image6Service,
} from "../../services/chapter23/image.service";

export const chapter23ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER23_IMAGE_LOADING", payload: true });
    const chapter23Image1 = await chapter23Image1Service();
    const chapter23Image2 = await chapter23Image2Service();
    const chapter23Image3 = await chapter23Image3Service();
    const chapter23Image4 = await chapter23Image4Service();
    const chapter23Image5 = await chapter23Image5Service();
    const chapter23Image6 = await chapter23Image6Service();

    dispatch({
      type: "SET_CHAPTER23_IMAGE",
      payload: [
        chapter23Image1,
        chapter23Image2,
        chapter23Image3,
        chapter23Image4,
        chapter23Image5,
        chapter23Image6
      ],
    });

    dispatch({ type: "SET_CHAPTER23_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
