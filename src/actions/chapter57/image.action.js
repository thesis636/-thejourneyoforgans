import {
  chapter57Image1Service,
  chapter57Image2Service
} from "../../services/chapter57/image.service";

export const chapter57ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER57_IMAGE_LOADING", payload: true });
    const chapter57Image1 = await chapter57Image1Service();
    const chapter57Image2 = await chapter57Image2Service();

    dispatch({
      type: "SET_CHAPTER57_IMAGE",
      payload: [
        chapter57Image1,
        chapter57Image2
      ],
    });

    dispatch({ type: "SET_CHAPTER57_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
