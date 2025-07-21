import { useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const QuoteRequestSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = () => {
    const { name, phone, email, message } = form;

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Vui lòng nhập đầy đủ Họ tên, SĐT và Nội dung.");
      return;
    }

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError(
        "Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng 10 chữ số bắt đầu bằng 0."
      );
      return;
    }

    const msg = `🔔 ĐĂNG KÝ BÁO GIÁ\n\n👤 Họ tên: ${name}\n📞 SĐT: ${phone}\n📧 Email: ${email}\n📝 Nội dung: ${message}`;
    const encodedMsg = encodeURIComponent(msg);
    const zaloLink = `https://zalo.me/0986453003?text=${encodedMsg}`;

    setLoading(true);
    setTimeout(() => {
      window.open(zaloLink, "_blank");
      setLoading(false);
    }, 500);
  };

  return (
    <section
      className={classNames(styles.wrap, "py-12 px-4 bg-[#f5f5f5]")}
      id="quote"
    >
      <div
        className={classNames(
          styles["form-container"],
          "max-w-4xl mx-autoshadow-xl rounded-xl p-6 sm:p-8"
        )}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#13659d] mb-2">
          Đăng ký báo giá
        </h2>

        <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
          Điền thông tin của bạn để chúng tôi tư vấn báo giá qua Zalo nhanh
          chóng
        </p>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4 font-medium">
            {error}
          </p>
        )}

        <div className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Họ và tên *"
            value={form.name}
            onChange={handleChange}
            className={styles["input-field"]}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại *"
            value={form.phone}
            onChange={handleChange}
            className={styles["input-field"]}
          />
          <input
            type="email"
            name="email"
            placeholder="Email (nếu có)"
            value={form.email}
            onChange={handleChange}
            className={styles["input-field"]}
          />
          <textarea
            name="message"
            placeholder="Nội dung cần báo giá *"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={classNames(
              styles["input-field"],
              "md:col-span-2 resize-none"
            )}
          />
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#13659d] hover:bg-[#0f4e7c] transition text-white font-semibold px-8 py-3 rounded-md text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Đang gửi..." : "Gửi báo giá"}
          </button>
        </div>
      </div>
    </section>
  );
};
