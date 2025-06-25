import banner1 from "@/../public/assets/images/banner1.jpg";
import banner2 from "@/../public/assets/images/banner2.webp";
import banner3 from "@/../public/assets/images/banner3.jpg";
import banner4 from "@/../public/assets/images/banner4.jpg";

import Image from "next/image";

export const BannerListSection = () => {
  return (
    <>
      <Image src={banner1} alt="banner" />
      <Image src={banner2} alt="banner" width={1902} priority />
      <Image src={banner3} alt="banner" />
      <Image src={banner4} alt="banner" />
    </>
  );
};
