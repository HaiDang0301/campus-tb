import { Carousel } from "antd";
import Image from "next/image";

const banners = ["/assets/images/banner.jpg", "/assets/images/banner.jpg"];

export const BannerSection = () => {
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      {banners.map((src, index) => (
        <div key={index}>
          <Image
            src={src}
            alt={`banner-${index}`}
            width={1200}
            height={250}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};
