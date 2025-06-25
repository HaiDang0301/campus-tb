import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

export const TopHeaderSection = () => {
  return (
    <div className="bg-[#13659d] flex justify-between items-center h-[44px] px-[254px]">
      <strong className="text-[#ffffff] text-[14px]">
        Đường dây trợ giúp khách hàng
      </strong>
      <ContactItem
        {...{
          color: "#fac100",
          icon: <PhoneOutlined style={{ color: "#fac100" }} />,
          text: "Hotline: ",
          value: "0986.45.3003",
        }}
      />
      <ContactItem
        {...{
          icon: <MailOutlined style={{ color: "#fac100" }} />,
          text: "Email: ",
          value: "campusthaibinh@gmail.com",
          color: "white",
        }}
      />
    </div>
  );
};

const ContactItem = ({
  icon,
  text,
  value,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  value: string;
  color?: string;
}) => {
  return (
    <div className="flex gap-[4px] items-center justify-center">
      {icon}
      <span className="text-[14px] text-white font-bold">{text}</span>
      <span className="text-[14px] font-bold" style={{ color: color }}>
        {value}
      </span>
    </div>
  );
};
