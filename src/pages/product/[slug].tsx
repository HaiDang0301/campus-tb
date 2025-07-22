"use client"; // Nếu bạn dùng Next.js App Router

import { useParams } from "next/navigation";
import { ListProduct } from "@/components/home/helper";
import Image, { StaticImageData } from "next/image";
import { Breadcrumb, Tabs } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import {
  DollarOutlined,
  SafetyCertificateOutlined,
  TruckOutlined,
} from "@ant-design/icons";

const ProductDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const product = ListProduct.find((p) => p.slug === slug);
  const imageList = product?.images;
  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    ""
  );

  useEffect(() => {
    if (product?.images?.[0]) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product)
    return (
      <div className="text-center py-20 text-red-500">
        Không tìm thấy sản phẩm
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductBreadcrumb title={product.title} />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-6 mb-12 mt-12">
        <div className="w-full">
          <Zoom>
            <Image
              src={selectedImage}
              alt={product.title}
              width={400}
              height={400}
              className="w-full h-auto rounded-xl border object-contain"
            />
          </Zoom>
          <div className="flex justify-between sm:justify-center sm:gap-3 lg:gap-0 lg:justify-between mt-4 flex-wrap w-full">
            {imageList?.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer border rounded-md overflow-hidden ${
                  img === selectedImage ? "ring-2 ring-[#13659d]" : ""
                }`}
              >
                <Image
                  src={img}
                  alt={`thumb-${index}`}
                  width={100}
                  height={80}
                  className="w-24 h-16 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-[16px] leading-7">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#13659d] mb-4">
                {product.title}
              </h2>
              <div
                className="text-[16px] leading-7 list-disc px-1 mb-6"
                dangerouslySetInnerHTML={{ __html: product.shortDescription }}
              />
              <div className="flex flex-col gap-2 w-full sm:w-max">
                <Link
                  href="https://zalo.me/0986453003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#13659d] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#0e4e7e] transition"
                >
                  <Image
                    src="/assets/images/zalo.png"
                    alt="Zalo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  Liên hệ qua Zalo
                </Link>
                <Link
                  href="tel:0986453003"
                  className="inline-flex items-center gap-2 h-10 bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15v0a2.25 2.25 0 002.25-2.25v-2.438a1.125 1.125 0 00-.987-1.116l-3.276-.437a1.125 1.125 0 00-1.052.405l-.872 1.09a12.03 12.03 0 01-5.349-5.349l1.09-.872a1.125 1.125 0 00.405-1.052l-.437-3.276a1.125 1.125 0 00-1.116-.987H4.5A2.25 2.25 0 002.25 6.75v0z"
                    />
                  </svg>
                  Gọi ngay: 0986 453 003
                </Link>
              </div>
            </div>

            <div className="min-w-[320px] flex flex-col gap-5 mt-6 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-sm border border-blue-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#13659d] to-[#1e7bb8] px-4 py-2">
                  <h3 className="text-white font-bold text-base text-center">
                    Thông số kỹ thuật
                  </h3>
                </div>
                <div className="p-4">
                  <div className="grid gap-3">
                    {Object.entries(product.specs).map(([key, value], idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between py-2 px-3 bg-white rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                      >
                        <span className="font-medium text-gray-700 text-sm">
                          {key}
                        </span>
                        <span className="text-gray-900 font-semibold text-sm bg-gray-50 px-2 py-0.5 rounded">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bảng cam kết */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-sm border border-green-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2">
                  <h3 className="text-white font-bold text-base text-center">
                    Cam kết bán hàng
                  </h3>
                </div>
                <div className="p-4 space-y-3">
                  <InfoCard
                    icon={
                      <SafetyCertificateOutlined className="text-green-600 w-4 h-4" />
                    }
                    title="Chất lượng tốt"
                    desc="Đạt tiêu chuẩn TCVN 7899-2008"
                    bg="green-100"
                  />
                  <InfoCard
                    icon={<TruckOutlined className="text-blue-600 w-4 h-4" />}
                    title="Giao hàng đảm bảo"
                    desc="Nhanh - Đúng hẹn - Đúng chất lượng"
                    bg="blue-100"
                  />
                  <InfoCard
                    icon={<DollarOutlined className="text-red-600 w-4 h-4" />}
                    title="Giá cả cạnh tranh"
                    desc={
                      <>
                        Luôn rẻ hơn thị trường từ{" "}
                        <span className="font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                          5-10%
                        </span>
                      </>
                    }
                    bg="red-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Mô tả chi tiết",
            children: (
              <div
                className="max-w-none text-[16px] leading-7 md:leading-9 list-disc md:pl-5"
                dangerouslySetInnerHTML={{ __html: product.detailHtml }}
              />
            ),
          },
        ]}
      />

      <div className="mt-12 border-t pt-8">
        <h2 className="text-xl font-bold text-[#13659d] mb-4">
          Sản phẩm liên quan
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ListProduct.filter((p) => p.slug !== slug)
            .slice(0, 4)
            .map((item) => (
              <Link href={`/product/${item.slug}`} key={item.slug}>
                <div className="group cursor-pointer">
                  <Image
                    src={item?.images?.[0]}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-lg w-full h-auto group-hover:scale-[1.02] transition-all duration-300"
                  />
                  <h3 className="mt-2 font-semibold text-[15px] text-[#333] group-hover:text-[#13659d]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

const ProductBreadcrumb = ({ title }: { title: string }) => {
  return (
    <Breadcrumb
      className="text-sm mb-4"
      separator=">"
      items={[
        { title: <Link href="/">Trang chủ</Link> },
        { title: <Link href="/">Sản phẩm</Link> },
        { title: <span className="text-[#13659d]">{title}</span> },
      ]}
    />
  );
};

const InfoCard = ({
  icon,
  title,
  desc,
  bg,
}: {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
  bg: string;
}) => (
  <div
    className={`flex items-start gap-3 p-3 bg-white rounded-md shadow-sm border border-gray-100 hover:shadow-md transition-shadow`}
  >
    <div
      className={`flex-shrink-0 w-8 h-8 bg-${bg} rounded-full flex items-center justify-center`}
    >
      {icon}
    </div>
    <div className="flex-1 text-sm">
      <h4 className="font-semibold text-gray-900 mb-0.5">{title}</h4>
      <p className="text-gray-600 text-xs">{desc}</p>
    </div>
  </div>
);
