import toDataURL from "../../libs/toDataURL";

import img1 from "../../images/backgrounds/chapter7/1.jpeg";
import img2 from "../../images/backgrounds/chapter7/2.jpeg";

export const chapter7Image1Service = () => {
  return toDataURL(img1);
};

export const chapter7Image2Service = () => {
  return toDataURL(img2);
};
