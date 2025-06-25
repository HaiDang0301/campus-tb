import { Button } from "antd";
import styles from "./styles.module.scss";
export const ContactSection = () => {
  return (
    <div className={styles["wrap"]}>
      <h2 className="text-white mt-[20px] max-w-[70%] text-center">
        Campus Thái Bình có đội ngũ nhân sự phát triển thị trường, nhân viên
        chăm sóc và tư vấn 24/7, luôn sẵn sàng phục vụ mọi nhu cầu của quý đối
        tác,quý đại lý, quý khách hàng.
      </h2>
      <p className="text-white mt-1.5">
        Hãy liên hệ ngay hotline: 0986.45.3003 để được tư vấn và hỗ trợ.
      </p>
      <h2 className="text-[#fac100] text-[22px] font-medium mb-[10px] mt-[20px]">
        Chất lượng hoàn thiện tốt nhất – Hỗ trợ giá nhà máy
      </h2>
      <Button className={styles["button"]}>Yêu cầu báo giá</Button>
    </div>
  );
};
