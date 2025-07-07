import { useParams } from "next/navigation";
import { ListProduct } from "@/components/home/helper";
import Image from "next/image";
import { Breadcrumb, Tabs } from "antd";
import Link from "next/link";

const ProductDetailPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const product = ListProduct.find((p) => p.slug === slug);

  if (!product) return <div>Không tìm thấy sản phẩm</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ProductBreadcrumb title={product.title} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-12">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            width={800}
            height={500}
            className="w-full h-auto rounded-xl"
          />
        </div>

        <div className="text-[16px] leading-7 space-y-3">
          {product.shortDescription.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          <Link
            href="https://zalo.me/0986453003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#13659d] text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#0e4e7e] transition mt-4"
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
                className="prose max-w-none text-[16px] leading-7"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {ListProduct.filter((p) => p.slug !== slug)
            .slice(0, 4)
            .map((item) => (
              <Link href={`/product/${item.slug}`} key={item.slug}>
                <div className="group cursor-pointer">
                  <Image
                    src={item.image}
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
        {
          title: <Link href="/">Trang chủ</Link>,
        },
        {
          title: <Link href="/san-pham">Sản phẩm</Link>,
        },
        {
          title: <span className="text-[#13659d]">{title}</span>,
        },
      ]}
    />
  );
};
