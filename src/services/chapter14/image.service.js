import toDataURL from "../../libs/toDataURL";

import img1 from "../../images/backgrounds/chapter14-39/1.jpeg";
import img2 from "../../images/backgrounds/chapter14-39/2.jpeg";

export const chapter14Image1Service = () => {
  return toDataURL(img1);
};

export const chapter14Image2Service = () => {
  return toDataURL(img2);
};
