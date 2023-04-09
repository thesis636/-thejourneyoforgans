import toDataURL from "../../libs/toDataURL";

import img1 from "../../images/backgrounds/chapter5/1.jpeg";
import img2 from "../../images/backgrounds/chapter5/2.jpeg";

export const chapter5Image1Service = () => {
  return toDataURL(img1);
};

export const chapter5Image2Service = () => {
  return toDataURL(img2);
};
