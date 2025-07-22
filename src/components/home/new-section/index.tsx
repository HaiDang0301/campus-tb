import Image, { StaticImageData } from "next/image";
import circle from "@/../public/assets/images/title-border.png";
import new1 from "@/../public/assets/images/new1.png";
import new2 from "@/../public/assets/images/new2.jpg";
<<<<<<< Updated upstream
import Link from "next/link";

=======
import new3 from "@/../public/assets/images/product9.webp";
>>>>>>> Stashed changes
export const NewSection = () => {
  return (
    <div className="flex justify-center items-center mt-[48px] flex-col mb-[32px] px-4 sm:px-6 md:px-12 lg:px-[100px] xl:px-[200px]">
      <h2 className="font-bold text-[24px] text-[#13659d] text-center">
        Bài viết nổi bật
      </h2>
      <Image src={circle} alt="circle" className="my-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-[1200px]">
        <ArticleCard
<<<<<<< Updated upstream
          href="#"
=======
          href="https://campusmn.com/product/con-ke-be-tong-v1-15-20mm"
>>>>>>> Stashed changes
          image={new1}
          title="Con kê bê tông là gì? Tại sao cần sử dụng con kê?"
          description="Con kê bê tông V2 là công cụ dùng kê thép sàn lớp 1, giúp giữ khoảng cách lớp bảo vệ..."
        />

        <ArticleCard
<<<<<<< Updated upstream
          href="#"
=======
          href="https://campusmn.com/product/keo-dan-gach-da-trong-nha-c901"
>>>>>>> Stashed changes
          image={new2}
          title="Keo dán gạch - Xoá tan nỗi lo bong tróc trong công tác ốp lát"
          description="Công tác ốp lát hiện nay là 1 công đoạn không thể thiếu, gạch men cũng ngày càng hiện đại..."
        />

        <ArticleCard
<<<<<<< Updated upstream
          href="#"
          image={new2}
          title="Hoang"
          description="Keo dán gạch đá trong nhà/ngoài trời Campus C902 đạt chuẩn C2, phù hợp ốp gạch khổ lớn..."
=======
          href="https://campusmn.com/product/vua-tu-san-phang-campus-leveling-34"
          image={new3}
          title="Vữa tự san phẳng - Vật liệu mới trong thi công sàn công nghiệp"
          description="Ngày nay, việc thi công sàn công nghiệp ngày càng yêu cầu cao cả về tiến độ lẫn chất lượng...  "
>>>>>>> Stashed changes
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
      <Link href={href} rel="noopener noreferrer">
        <div className="w-full aspect-[4/3] relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </Link>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          <Link
            href={href}
            rel="noopener noreferrer"
            className="hover:text-[#13659d] transition"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </article>
  );
};
