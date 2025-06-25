import Image from "next/image";
import circle from "@/../public/assets/images/title-border.png";
import new1 from "@/../public/assets/images/new1.png";
import new2 from "@/../public/assets/images/new2.jpg";

export const NewSection = () => {
  return (
    <div className="flex justify-center items-center mt-[48px] flex-col mb-[32px] px-[200px]">
      <h2 className="font-bold text-[24px] text-[#13659d]">Bài viết nổi bật</h2>
      <Image
        {...{
          src: circle,
          alt: "circle",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 gap-2.5">
        {/* Bài viết #1 */}
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <a href="https://campusvn.com/con-ke-be-tong-la-gi/">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={new1}
                alt="Con kê bê tông là gì"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              <a
                href="https://campusvn.com/con-ke-be-tong-la-gi/"
                className="hover:text-blue-600"
              >
                Con kê bê tông là gì? Tại sao cần sử dụng con kê?
              </a>
            </h3>
            <p className="text-gray-700 mb-4">
              Con kê bê tông V2 là công cụ dùng kê thép sàn lớp 1, giúp giữ
              khoảng cách lớp bảo vệ...
            </p>
          </div>
        </article>

        {/* Bài viết #2 */}
        <article className="bg-white shadow-lg rounded-lg overflow-hidden">
          <a href="https://campusvn.com/keo-dan-gach-da-ngoai-troi-c902/">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={new2}
                alt="Keo dán gạch đá ngoài trời C902"
                fill
                className="object-contain"
              />
            </div>
          </a>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">
              <a
                href="https://campusvn.com/keo-dan-gach-da-ngoai-troi-c902/"
                className="hover:text-blue-600"
              >
                Keo dán gạch đá ngoài trời C902 (Đạt chuẩn C2)
              </a>
            </h3>
            <p className="text-gray-700 mb-4">
              Keo dán gạch đá trong nhà/ngoài trời Campus C902 đạt chuẩn C2, phù
              hợp ốp gạch khổ lớn...
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};
