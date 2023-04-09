import {
  chapter67Image1Service,
  chapter67Image2Service
} from "../../services/chapter67/image.service";

export const chapter67ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER67_IMAGE_LOADING", payload: true });
    const chapter67Image1 = await chapter67Image1Service();
    const chapter67Image2 = await chapter67Image2Service();

    dispatch({
      type: "SET_CHAPTER67_IMAGE",
      payload: [
        chapter67Image1,
        chapter67Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER67_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
