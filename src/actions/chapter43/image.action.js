import {
  chapter43Image1Service,
  chapter43Image2Service,
  chapter43Image3Service
} from "../../services/chapter43/image.service";

export const chapter43ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER43_IMAGE_LOADING", payload: true });
    const chapter43Image1 = await chapter43Image1Service();
    const chapter43Image2 = await chapter43Image2Service();
    const chapter43Image3 = await chapter43Image3Service();

    dispatch({
      type: "SET_CHAPTER43_IMAGE",
      payload: [
        chapter43Image1,
        chapter43Image2,
        chapter43Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER43_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
