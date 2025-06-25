import { useState } from "react";
import styles from "./styles.module.scss";

export const QuoteRequestSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, phone, email, message } = form;
    if (!name || !phone || !message) {
      alert("Vui lòng nhập đầy đủ Họ tên, SĐT và Nội dung!");
      return;
    }

    const msg = `🔔 ĐĂNG KÝ BÁO GIÁ\n\n👤 Họ tên: ${name}\n📞 SĐT: ${phone}\n📧 Email: ${email}\n📝 Nội dung: ${message}`;
    const encodedMsg = encodeURIComponent(msg);
    const zaloLink = `https://zalo.me/0986453003?text=${encodedMsg}`;
    window.open(zaloLink, "_blank");
  };

  return (
    <section className={`${styles.wrap} py-12 px-4 bg-[#f5f5f5]`}>
      <div className="max-w-4xl shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#13659d] mb-2">
          Đăng ký báo giá
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên *"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#13659d]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại *"
            value={form.phone}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#13659d]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email (nếu có)"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-md w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#13659d]"
          />
          <textarea
            name="message"
            placeholder="Nội dung cần báo giá *"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="border border-gray-300 p-4 rounded-md w-full md:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#13659d]"
          />
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-[#13659d] hover:bg-[#0f4e7c] transition text-white font-semibold px-8 py-3 rounded-md text-lg"
          >
            Gửi báo giá
          </button>
        </div>
      </div>
    </section>
  );
};
