import {
  chapter44Image1Service,
  chapter44Image2Service,
  chapter44Image3Service
} from "../../services/chapter44/image.service";

export const chapter44ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER44_IMAGE_LOADING", payload: true });
    const chapter44Image1 = await chapter44Image1Service();
    const chapter44Image2 = await chapter44Image2Service();
    const chapter44Image3 = await chapter44Image3Service();

    dispatch({
      type: "SET_CHAPTER44_IMAGE",
      payload: [
        chapter44Image1,
        chapter44Image2,
        chapter44Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER44_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
