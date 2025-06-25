import styles from "./styles.module.scss";
export const AboutUsSection = () => {
  return (
    <div className={styles["aboutUsWrap"]}>
      <h2 className="text-[26px] font-bold text-[#13659d]">CAMPUS THÁI BÌNH</h2>
      <p className="w-full flex items-center justify-center">
        <strong className="max-w-[50%] leading-[24px]">
          Bạn đang ở chung cư, hay nhà mặt đất? Bạn đang đứng ở 1 TTTM hay thậm
          chí bạn đi qua một cây cầu, thì rất có thể bạn đã đứng trên Con kê bê
          tông, Keo dán gạch mà Campus Thái Bình đã cung cấp. Hàng triệu sản
          phẩm của chúng tôi được tìm thấy ở hầu hết các công trình lớn nhỏ, các
          cửa hàng trên toàn quốc. Campus Thái Bình là nhà sản xuất và phân phối
          Con kê bê tông, Keo dán gạch, Vữa rót không co ngót, Vữa tự san phẳng,
          Skimcoat và Chống thấm các loại hàng đầu tại Việt Nam. Nhiệm vụ của
          chúng tôi là đem tới cho Khách hàng những sản phẩm chất lượng tốt nhất
          nhưng giá thành lại rẻ nhất cũng như phục vụ tận tình nhất. Với công
          nghệ tiên tiến, hệ thống 2 nhà máy với diện tích hơn 3000m2 tại Hải
          Dương và Đồng Nai, hệ thống xe và nhân lực dồi dào, Campus Thái Bình
          tự tin có thể cung ứng sản phẩm cho Khách hàng tại bất cứ nơi đâu, bất
          cứ lúc nào. Hãy để chúng tôi phục vụ bạn!
        </strong>
      </p>
    </div>
  );
};
