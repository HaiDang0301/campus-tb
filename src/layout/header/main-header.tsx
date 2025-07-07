import Image from "next/image";
import logo from "@/../public/assets/images/logo-115x80.png";
import { MenuItem } from "./helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cls from "classnames";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export const MainHeader = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="bg-white shadow-md px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[254px] py-4">
      <div className="flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image
            src={logo}
            alt="logo"
            width={115}
            height={80}
            className="cursor-pointer"
            onClick={() => push("/")}
          />
        </div>

        <div className="hidden lg:flex flex-wrap gap-6">
          {MenuItem.map((item, index) => (
            <Link key={index} href={item.path}>
              <div
                className={cls(
                  "uppercase font-bold text-[15px] px-2 py-1 transition-colors duration-200",
                  {
                    "text-[#13659d] border-b-2 border-[#13659d]":
                      pathname === item.path,
                    "text-gray-700 hover:text-[#13659d]":
                      pathname !== item.path,
                  }
                )}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mt-4 flex flex-col gap-2 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {MenuItem.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={cls(
                    "uppercase font-bold text-[14px] px-4 py-2 rounded transition-colors duration-200",
                    {
                      "text-[#13659d] bg-blue-100": pathname === item.path,
                      "text-gray-700 hover:bg-blue-50": pathname !== item.path,
                    }
                  )}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
