import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

export const TopHeaderSection = () => {
  return (
    <div className="bg-[#13659d] h-auto md:h-[44px] flex flex-col md:flex-row md:justify-between md:items-center text-white px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[254px] py-2 text-[12px] sm:text-[13px] md:text-[14px] gap-2 md:gap-0">
      <strong className="text-white block text-center md:text-left">
        Đường dây trợ giúp khách hàng
      </strong>
      <ContactItem
        color="#fac100"
        icon={<PhoneOutlined style={{ color: "#fac100" }} />}
        text="Hotline: "
        value="0986.45.3003"
      />
      <ContactItem
        icon={<MailOutlined style={{ color: "#fac100" }} />}
        text="Email: "
        value="campusthaibinh@gmail.com"
        color="white"
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
    <div className="flex items-center gap-1 sm:gap-2 justify-center">
      {icon}
      <span className="font-bold">{text}</span>
      <span className="font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  );
};
