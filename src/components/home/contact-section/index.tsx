import { Button } from "antd";
import styles from "./styles.module.scss";

export const ContactSection = () => {
  return (
    <div
      className={`${styles["wrap"]} px-4 sm:px-8 py-10 flex flex-col items-center text-center`}
    >
      <h2 className="text-white mt-5 text-lg sm:text-xl md:text-2xl max-w-[900px]">
        Campus Thái Bình có đội ngũ nhân sự phát triển thị trường, nhân viên
        chăm sóc và tư vấn 24/7, luôn sẵn sàng phục vụ mọi nhu cầu của quý đối
        tác, quý đại lý, quý khách hàng.
      </h2>
      <p className="text-white mt-2 text-base sm:text-lg">
        Hãy liên hệ ngay hotline: <strong>0986.45.3003</strong> để được tư vấn
        và hỗ trợ.
      </p>
      <h2 className="text-[#fac100] text-lg sm:text-xl md:text-2xl font-medium my-5">
        Chất lượng hoàn thiện tốt nhất – Hỗ trợ giá nhà máy
      </h2>
      <Button className={`${styles["button"]} text-base px-6 py-2 rounded`}>
        Yêu cầu báo giá
      </Button>
    </div>
  );
};
