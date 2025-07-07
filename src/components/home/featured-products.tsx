import Image from "next/image";
import { Row, Col } from "antd";
import circle from "@/../public/assets/images/title-border.png";
import { ListProduct } from "./helper";
import Link from "next/link";

export const FeaturedProducts = () => {
  return (
    <div className="flex justify-center items-center mt-[48px] flex-col mb-[32px] px-4">
      <h2 className="font-bold text-[24px] text-[#13659d] text-center">
        SẢN PHẨM TIÊU BIỂU
      </h2>
      <Image
        {...{
          src: circle,
          alt: "circle",
        }}
      />
      <Row
        gutter={[16, 24]}
        className="mt-[24px] w-full max-w-[1200px] justify-center"
      >
        {ListProduct.map((item, index) => (
          <Col
            key={index}
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="flex flex-col items-center text-center"
          >
            <Link href={`/product/${item.slug}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto rounded-[8px] object-cover"
              />
              <p className="mt-2 font-semibold text-[14px] text-[#333] px-2">
                {item.title}
              </p>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};
