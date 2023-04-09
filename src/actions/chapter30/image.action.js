import {
  chapter30Image1Service,
  chapter30Image2Service,
  chapter30Image3Service
} from "../../services/chapter30/image.service";

export const chapter30ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER30_IMAGE_LOADING", payload: true });
    const chapter30Image1 = await chapter30Image1Service();
    const chapter30Image2 = await chapter30Image2Service();
    const chapter30Image3 = await chapter30Image3Service();

    dispatch({
      type: "SET_CHAPTER30_IMAGE",
      payload: [
        chapter30Image1,
        chapter30Image2,
        chapter30Image3
      ],
    });

    dispatch({ type: "SET_CHAPTER30_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
