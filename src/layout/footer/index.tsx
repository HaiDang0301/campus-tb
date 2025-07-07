import {
  FacebookFilled,
  YoutubeFilled,
  TikTokOutlined,
  MediumSquareFilled,
  PhoneFilled,
  MessageOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/assets/images/logo-115x80.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white text-[15px] px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_2fr_1fr] gap-10">
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-4">
          <Image src={logo} alt="Logo" width={115} height={80} />

          <div className="flex gap-4 text-xl text-[#ffb700]">
            <a href="#">
              <FacebookFilled />
            </a>
            <a href="#">
              <YoutubeFilled />
            </a>
            <a href="#">
              <TikTokOutlined />
            </a>
            <a href="#">
              <MediumSquareFilled />
            </a>
          </div>

          <div className="space-y-2 text-sm sm:text-base leading-relaxed">
            <p>
              <strong className="text-[#00B2FF]">Trụ sở:</strong> Thôn Phụng
              Thượng, xã Vũ An, huyện Kiến Xương, tỉnh Thái Bình
            </p>
            <p>
              <strong className="text-[#00B2FF]">Tổng kho Hà Nội:</strong> Ngõ
              50 Lê Trọng Tấn, Dương Nội, Hà Đông, Hà Nội
            </p>
            <p>
              <strong className="text-[#00B2FF]">Tổng kho TP.HCM:</strong>{" "}
              Dragon Village – Đặng Thanh Hiếu – TP Thủ Đức – TP HCM
            </p>
          </div>
        </div>

        {/* Cột 2: Liên kết điều hướng */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold mb-3 text-[#ffb700] text-lg">
              Về chúng tôi
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/gioi-thieu/" className="hover:text-[#13659d]">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/lien-he/" className="hover:text-[#13659d]">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc/" className="hover:text-[#13659d]">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#13659d]">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#13659d]">
                  Hợp tác
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-[#ffb700] text-lg">
              Thông tin hữu ích
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mua-hang-va-thanh-toan/"
                  className="hover:text-[#13659d]"
                >
                  Mua hàng & Thanh toán
                </Link>
              </li>
              <li>
                <Link
                  href="/chinh-sach-van-chuyen-giao-hang/"
                  className="hover:text-[#13659d]"
                >
                  Chính sách vận chuyển
                </Link>
              </li>
              <li>
                <Link
                  href="/chinh-sach-bao-hanh-va-doi-tra/"
                  className="hover:text-[#13659d]"
                >
                  Bảo hành & Đổi trả
                </Link>
              </li>
              <li>
                <Link
                  href="/chinh-sach-bao-mat-thong-tin/"
                  className="hover:text-[#13659d]"
                >
                  Bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link href="/hoi-dap/" className="hover:text-[#13659d]">
                  Hỏi đáp
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 text-[#ffb700] text-lg">
              Sản phẩm nổi bật
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/danh-muc-san-pham/song-chan-rac/"
                  className="hover:text-[#13659d]"
                >
                  Song chắn rác
                </Link>
              </li>
              <li>
                <Link
                  href="/danh-muc-san-pham/nap-ho-ga/"
                  className="hover:text-[#13659d]"
                >
                  Nắp hố ga
                </Link>
              </li>
              <li>
                <Link
                  href="/danh-muc-san-pham/ghi-bao-ve-goc-cay/"
                  className="hover:text-[#13659d]"
                >
                  Ghi bảo vệ gốc cây
                </Link>
              </li>
              <li>
                <Link
                  href="/danh-muc-san-pham/tham-thu-ket-hop/"
                  className="hover:text-[#13659d]"
                >
                  Thăm thu kết hợp
                </Link>
              </li>
              <li>
                <Link
                  href="/danh-muc-san-pham/bo-via-gang-cau/"
                  className="hover:text-[#13659d]"
                >
                  Bó vỉa gang cầu
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 text-sm sm:text-base block lg:hidden">
            <div>
              <h4 className="font-bold text-[#ffb700] text-lg">Tư vấn?</h4>
              <p className="text-gray-300">/ Liên hệ trực tiếp</p>
            </div>
            <div className="flex items-center gap-2 text-[#ffb700] text-lg font-semibold hover:text-white transition">
              <PhoneFilled />
              <span>0965.39.3223</span>
            </div>
            <div>
              <h4 className="font-bold text-[#ffb700] text-lg">
                Khiếu nại dịch vụ
              </h4>
            </div>
            <div className="flex items-center gap-2 text-[#ffb700] text-lg font-semibold hover:text-white transition">
              <MessageOutlined />
              <span>0707.99.1989</span>
            </div>
          </div>
        </div>

        {/* Cột 3: Liên hệ */}
        <div className="space-y-4 text-sm sm:text-base hidden lg:block">
          <div>
            <h4 className="font-bold text-[#ffb700] text-lg">Tư vấn?</h4>
            <p className="text-gray-300">/ Liên hệ trực tiếp</p>
          </div>
          <div className="flex items-center gap-2 text-[#ffb700] text-lg font-semibold hover:text-white transition">
            <PhoneFilled />
            <span>0965.39.3223</span>
          </div>
          <div>
            <h4 className="font-bold text-[#ffb700] text-lg">
              Khiếu nại dịch vụ
            </h4>
          </div>
          <div className="flex items-center gap-2 text-[#ffb700] text-lg font-semibold hover:text-white transition">
            <MessageOutlined />
            <span>0707.99.1989</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
