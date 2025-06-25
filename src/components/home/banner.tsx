import Image from "next/image";
import banner from "@/../public/assets/images/banner.jpg";

export const BannerSection = () => {
  return (
    <Image
      {...{
        src: banner,
        alt: "banner",
      }}
    />
  );
};
