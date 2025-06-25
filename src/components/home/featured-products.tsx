import circle from "@/../public/assets/images/title-border.png";
import Image from "next/image";
import { ListProduct } from "./helper";
export const FeaturedProducts = () => {
  return (
    <div className="flex justify-center items-center mt-[48px] flex-col mb-[32px]">
      <h2 className="font-bold text-[24px] text-[#13659d]">
        SẢN PHẨM TIÊU BIỂU
      </h2>
      <Image
        {...{
          src: circle,
          alt: "circle",
        }}
      />
      <div className="flex gap-[24px] mt-[24px]">
        {ListProduct.map((item, index) => (
          <Image
            key={index}
            {...{
              src: item.image,
              alt: `${item.image}`,
              width: 268,
            }}
          />
        ))}
      </div>
    </div>
  );
};
