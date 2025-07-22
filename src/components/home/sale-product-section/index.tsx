import { Row, Col, Card } from "antd";
import Image, { StaticImageData } from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import product1 from "@/../public/assets/images/product3.webp";
import product2 from "@/../public/assets/images/product9.webp";
import product3 from "@/../public/assets/images/product6.webp";
import product from "@/../public/assets/images/product.webp";
import { LeftItem } from "./left-item-sction";
import Link from "next/link";

const categorizedProducts = [
  {
    category: "Con kê bê tông & SKIMCOAT",
    products: [
      {
        id: 1,
        name: "Con kê bê tông Campus",
        image: product,
        slug: "con-ke-be-tong-campus",
      },
      {
        id: 2,
        name: "SKIMCOAT – Vữa hoàn thiện bề mặt",
        image: product3,
        slug: "skimcoat-vua-hoan-thien-be-mat",
      },
    ],
  },
  {
    category: "Keo dán gạch & Vữa tự san phẳng",
    products: [
      {
        id: 3,
        name: "Keo dán gạch đá trong nhà C901 (Đạt chuẩn C1)",
        image: product1,
        slug: "keo-dan-gach-da-trong-nha-c901",
      },
      {
        id: 4,
        name: "Vữa tự san phẳng cao cấp Campus Leveling 34",
        image: product2,
        slug: "vua-tu-san-phang-campus-leveling-34",
      },
    ],
  },
];

export const ListProductSection = ({
  products,
}: {
  products: {
    id: number;
    name: string;
    image: StaticImageData;
    slug: string;
  }[];
}) => {
  return (
    <div className="flex flex-col gap-[24px] w-full">
      <Row gutter={[16, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={12} xl={12}>
            <Link href={`/product/${product.slug}`}>
              <Card hoverable className="p-[10px]">
                <div className="flex gap-[12px] items-start">
                  <div className="relative w-[120px] h-[120px] flex-shrink-0">
                    <Image
                      alt={product.name}
                      src={product.image}
                      fill
                      style={{ objectFit: "cover", borderRadius: 8 }}
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-[8px]">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-[#bf3617] font-bold">Giá: liên hệ</p>
                    <div className="flex items-center gap-[8px] cursor-pointer justify-end">
                      <p className="text-[#034c8c] font-medium m-0">
                        Xem chi tiết
                      </p>
                      <ArrowRightOutlined
                        style={{ color: "#034c8c", fontSize: 12 }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export const SaleProductSection = () => {
  return (
<<<<<<< Updated upstream
    <div className="mt-[32px] px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[170px] flex flex-col gap-[48px]">
=======
    <div className="mt-[32px] px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[150px] flex flex-col gap-[48px]">
>>>>>>> Stashed changes
      {categorizedProducts.map((section, index) => (
        <Row key={index} gutter={[24, 24]}>
          <Col xs={24} md={24} xl={7}>
            <LeftItem
              title={section.category}
              description="Uy tín chất lượng"
              color={index % 2 === 0 ? "green" : "blue"}
            />
          </Col>
          <Col xs={24} md={24} xl={17}>
            <ListProductSection products={section.products} />
          </Col>
        </Row>
      ))}
    </div>
  );
};
