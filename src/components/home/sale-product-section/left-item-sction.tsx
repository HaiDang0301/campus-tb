import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const LeftItem = ({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div
      className="p-10 flex flex-col gap-4 text-white flex-1"
      style={{ backgroundColor: color }}
    >
      <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
        {title}
      </h2>

      <p className="text-base md:text-lg font-medium">{description}</p>

      <Button
        type="default"
        className="flex items-center w-max gap-2 px-5 py-2 bg-white text-black font-semibold hover:opacity-90 transition"
      >
        <span>Xem thêm</span>
        <ArrowRightOutlined />
      </Button>
    </div>
  );
};
