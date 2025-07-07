import Image, { StaticImageData } from "next/image";
import circle from "@/../public/assets/images/title-border.png";
import new1 from "@/../public/assets/images/new1.png";
import new2 from "@/../public/assets/images/new2.jpg";

export const NewSection = () => {
  return (
    <div className="flex justify-center items-center mt-[48px] flex-col mb-[32px] px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[200px]">
      <h2 className="font-bold text-[24px] text-[#13659d] text-center">
        Bài viết nổi bật
      </h2>
      <Image src={circle} alt="circle" className="my-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full max-w-[1200px]">
        <ArticleCard
          href="https://campusvn.com/con-ke-be-tong-la-gi/"
          image={new1}
          title="Con kê bê tông là gì? Tại sao cần sử dụng con kê?"
          description="Con kê bê tông V2 là công cụ dùng kê thép sàn lớp 1, giúp giữ khoảng cách lớp bảo vệ..."
        />

        <ArticleCard
          href="https://campusvn.com/keo-dan-gach-da-ngoai-troi-c902/"
          image={new2}
          title="Keo dán gạch đá ngoài trời C902 (Đạt chuẩn C2)"
          description="Keo dán gạch đá trong nhà/ngoài trời Campus C902 đạt chuẩn C2, phù hợp ốp gạch khổ lớn..."
        />
      </div>
    </div>
  );
};

const ArticleCard = ({
  href,
  image,
  title,
  description,
}: {
  href: string;
  image: StaticImageData;
  title: string;
  description: string;
}) => {
  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="w-full aspect-[4/3] relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </a>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#13659d] transition"
          >
            {title}
          </a>
        </h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </article>
  );
};
