import toDataURL from "../../libs/toDataURL";

import img1 from "../../images/backgrounds/chapter24-25-26/1.jpeg";
import img2 from "../../images/backgrounds/chapter24-25-26/2.jpeg";

export const chapter24Image1Service = () => {
  return toDataURL(img1);
};

export const chapter24Image2Service = () => {
  return toDataURL(img2);
};
