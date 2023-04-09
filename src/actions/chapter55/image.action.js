import {
  chapter55Image1Service,
  chapter55Image2Service,
  chapter55Image3Service
} from "../../services/chapter55/image.service";

export const chapter55ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER55_IMAGE_LOADING", payload: true });
    const chapter55Image1 = await chapter55Image1Service();
    const chapter55Image2 = await chapter55Image2Service();
    const chapter55Image3 = await chapter55Image3Service();

    dispatch({
      type: "SET_CHAPTER55_IMAGE",
      payload: [
        chapter55Image1,
        chapter55Image2,
        chapter55Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER55_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
