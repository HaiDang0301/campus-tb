import { StatItem } from "./stat-item";
import styles from "./styles.module.scss";
export const NumberTalk = () => {
  return (
    <div className={styles["wrap"]}>
      <h2 className="text-[24px] md:text-[28px] uppercase font-bold mb-2 mt-[32px] text-white">
        Những con số <span className="text-[#ffb700]">biết nói</span>
      </h2>
      <div className="w-[200px] h-[4px] bg-[#ffb700] mx-auto mb-10" />
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-[32px] bg-[#00000080] w-full">
        <StatItem value={1819} suffix="+" label="Khách hàng" />
        <StatItem value={3769} suffix="+" label="Hợp đồng đã ký" />
        <StatItem value={9} suffix="+" label="Năm kinh nghiệm" />
        <StatItem value={98} suffix="%" label="Tỷ lệ hài lòng" />
      </div>
    </div>
  );
};
