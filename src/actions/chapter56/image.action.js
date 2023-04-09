import {
  chapter56Image1Service,
  chapter56Image2Service
} from "../../services/chapter56/image.service";

export const chapter56ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER56_IMAGE_LOADING", payload: true });
    const chapter56Image1 = await chapter56Image1Service();
    const chapter56Image2 = await chapter56Image2Service();

    dispatch({
      type: "SET_CHAPTER56_IMAGE",
      payload: [
        chapter56Image1,
        chapter56Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER56_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
