import { PhoneFilled } from "@ant-design/icons";
import { motion } from "framer-motion";
import zalo from "@/../public/assets/images/zalo.png";
import styles from "./styles.module.scss";
import Image from "next/image";

export const FloatingContactButtons = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex flex-row items-center gap-4"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <PhoneCallButton />
      <ZaloContactButton />
    </motion.div>
  );
};

const PhoneCallButton = () => {
  return (
    <div className="flex items-center">
      <a href="tel:0965393223" className={styles["call-button"]}>
        <span className={styles["phone-ring"]} />
        <span className={styles["phone-icon"]}>
          <PhoneFilled style={{ fontSize: 20 }} />
        </span>
      </a>
      <span className="text-white bg-[#e59100] px-7 py-2 rounded-full text-sm font-semibold shadow-md ml-[-25px]">
        0986 453 003
      </span>
    </div>
  );
};

const ZaloContactButton = () => {
  return (
    <div className="flex items-center gap-2 overflow-hidden rounded-full">
      <a
        href="https://zalo.me/0986453003"
        target="_blank"
        rel="noopener noreferrer"
        className={styles["zalo-button"]}
      >
        <span className={styles["zalo-icon"]}>
          <Image
            {...{
              src: zalo,
              alt: "zalo",
              className: "rounded-99",
            }}
          />
        </span>
      </a>
    </div>
  );
};
