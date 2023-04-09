import {
  chapter8BTSImage1Service,
  chapter8BTSImage2Service,
  chapter8BTSImage3Service,
  chapter8BTSImage4Service,
  chapter8BTSImage5Service,
  chapter8BTSImage6Service,
  chapter8BTSImage7Service,
  chapter8BTSImage8Service,
  chapter8BTSImage9Service,
} from "../../services/chapter8/image-bts.service";
import {
  chapter8MotorcycleImage1Service,
  chapter8MotorcycleImage2Service,
  chapter8MotorcycleImage3Service,
  chapter8MotorcycleImage4Service,
  chapter8MotorcycleImage5Service,
  chapter8MotorcycleImage6Service,
} from "../../services/chapter8/image-motorcycle.service";
import {
  chapter8WalkImage1Service,
  chapter8WalkImage2Service,
  chapter8WalkImage3Service,
  chapter8WalkImage4Service,
  chapter8WalkImage5Service,
  chapter8WalkImage6Service,
} from "../../services/chapter8/image-walk.service";

export const chapter8ImageAction = () => async (dispatch) => {
  try {
    dispatch({ type: "SET_CHAPTER8_IMAGE_LOADING", payload: true });
    const chapter8BTSImage1 = await chapter8BTSImage1Service();
    const chapter8BTSImage2 = await chapter8BTSImage2Service();
    const chapter8BTSImage3 = await chapter8BTSImage3Service();
    const chapter8BTSImage4 = await chapter8BTSImage4Service();
    const chapter8BTSImage5 = await chapter8BTSImage5Service();
    const chapter8BTSImage6 = await chapter8BTSImage6Service();
    const chapter8BTSImage7 = await chapter8BTSImage7Service();
    const chapter8BTSImage8 = await chapter8BTSImage8Service();
    const chapter8BTSImage9 = await chapter8BTSImage9Service();

    const chapter8MotorcycleImage1 = await chapter8MotorcycleImage1Service();
    const chapter8MotorcycleImage2 = await chapter8MotorcycleImage2Service();
    const chapter8MotorcycleImage3 = await chapter8MotorcycleImage3Service();
    const chapter8MotorcycleImage4 = await chapter8MotorcycleImage4Service();
    const chapter8MotorcycleImage5 = await chapter8MotorcycleImage5Service();
    const chapter8MotorcycleImage6 = await chapter8MotorcycleImage6Service();

    const chapter8WalkImage1 = await chapter8WalkImage1Service();
    const chapter8WalkImage2 = await chapter8WalkImage2Service();
    const chapter8WalkImage3 = await chapter8WalkImage3Service();
    const chapter8WalkImage4 = await chapter8WalkImage4Service();
    const chapter8WalkImage5 = await chapter8WalkImage5Service();
    const chapter8WalkImage6 = await chapter8WalkImage6Service();

    dispatch({
      type: "SET_CHAPTER8_IMAGE",
      payload: {
        bts: [
          chapter8BTSImage1,
          chapter8BTSImage2,
          chapter8BTSImage3,
          chapter8BTSImage4,
          chapter8BTSImage5,
          chapter8BTSImage6,
          chapter8BTSImage7,
          chapter8BTSImage8,
          chapter8BTSImage9,
        ],
        motorcycle: [
          chapter8MotorcycleImage1,
          chapter8MotorcycleImage2,
          chapter8MotorcycleImage3,
          chapter8MotorcycleImage4,
          chapter8MotorcycleImage5,
          chapter8MotorcycleImage6,
        ],
        walk: [
          chapter8WalkImage1,
          chapter8WalkImage2,
          chapter8WalkImage3,
          chapter8WalkImage4,
          chapter8WalkImage5,
          chapter8WalkImage6,
        ],
      },
    });

    dispatch({ type: "SET_CHAPTER8_IMAGE_LOADING", payload: false });
  } catch (err) {}
};
