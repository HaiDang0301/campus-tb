import Image from "next/image";
import logo from "@/../public/assets/images/logo-115x80.png";
import { MenuItem } from "./helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cls from "classnames";

export const MainHeader = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white shadow-md flex gap-[32px] items-center px-[254px] py-[10px]">
      <Image
        {...{
          src: logo,
          alt: "logo",
        }}
      />
      <div className="flex gap-[16px]">
        {MenuItem.map((item, index) => (
          <Link key={index} href={item.path}>
            <div
              className={cls("uppercase font-bold text-[15px] px-[20px]", {
                "text-[#13659d] border-l-1 border-r-1": pathname === item.path,
              })}
            >
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
