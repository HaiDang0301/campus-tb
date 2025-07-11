import { Card, Tag } from "antd";
import {
  AliwangwangOutlined,
  BoxPlotOutlined,
  BuildOutlined,
  CalendarOutlined,
  SketchCircleFilled,
  StarOutlined,
  TrophyOutlined,
  RocketOutlined,
  HeartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { FeaturedProducts } from "@/components/home/featured-products";
import { useRouter } from "next/router";

export default function AboutUs() {
  const { push } = useRouter();
  const stats = [
    {
      number: "500+",
      label: "Công trình ứng dụng",
      icon: <BuildOutlined />,
      color: "from-blue-500 to-cyan-500",
      bgPattern: "bg-blue-50",
    },
    {
      number: "10+",
      label: "Năm kinh nghiệm",
      icon: <CalendarOutlined />,
      color: "from-emerald-500 to-teal-500",
      bgPattern: "bg-emerald-50",
    },
    {
      number: "1000+",
      label: "Sản phẩm cung cấp",
      icon: <BoxPlotOutlined />,
      color: "from-violet-500 to-purple-500",
      bgPattern: "bg-violet-50",
    },
    {
      number: "50+",
      label: "Đối tác chiến lược",
      icon: <TeamOutlined />,
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-orange-50",
    },
  ];

  const achievements = [
    {
      year: "2014",
      title: "Thành lập Campus",
      description: "Khởi đầu cung cấp con kê bê tông cho công trình dân dụng",
      icon: <RocketOutlined className=" " />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      year: "2017",
      title: "Mở rộng phân phối",
      description: "Đưa sản phẩm keo dán gạch C902 ra thị trường toàn quốc",
      icon: <TrophyOutlined className=" " />,
      color: "from-green-500 to-emerald-600",
    },
    {
      year: "2020",
      title: "Ra mắt vữa tự san phẳng",
      description: "Leveling 34 giúp thi công nền nhanh chóng và bền vững",
      icon: <StarOutlined className=" " />,
      color: "from-purple-500 to-violet-600",
    },
    {
      year: "2022",
      title: "Cải tiến sản phẩm hoàn thiện",
      description: "Skimcoat chống thấm và siêu mịn ra mắt thị trường",
      icon: <HeartOutlined className=" " />,
      color: "from-pink-500 to-rose-600",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      icon: <SketchCircleFilled />,
      description: "Hệ thống quản lý chất lượng",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "ISO 27001",
      icon: <SketchCircleFilled />,
      description: "Bảo mật thông tin",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "CMMI Level 3",
      icon: <StarOutlined />,
      description: "Mô hình trưởng thành năng lực",
      color: "from-purple-500 to-violet-500",
    },
    {
      name: "Vietnam ICT Awards",
      icon: <AliwangwangOutlined />,
      description: "Giải thưởng công nghệ thông tin",
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      title: "Chất lượng",
      description: "Cam kết mang đến sản phẩm chất lượng cao nhất",
      icon: <StarOutlined />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Đổi mới",
      description: "Không ngừng nghiên cứu và phát triển công nghệ mới",
      icon: <RocketOutlined />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Tin cậy",
      description: "Xây dựng mối quan hệ bền vững với khách hàng",
      icon: <HeartOutlined />,
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Hợp tác",
      description: "Làm việc cùng nhau để đạt được mục tiêu chung",
      icon: <TeamOutlined />,
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative container mx-auto px-4 py-24 text-center">
          <div className="animate-fade-in-up flex flex-col justify-center items-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-100">
              CAMPUS THÁI BÌNH
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Sản xuất & phân phối giải pháp xây dựng – kết nối hàng triệu công
              trình
            </p>
            <div
              onClick={() => push("/")}
              className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 rounded-lg px-8 py-3 h-auto text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mb-16 w-max"
            >
              Khám phá ngay
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, idx) => (
              <Card
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500 rounded-2xl group"
                bodyStyle={{ padding: 32, textAlign: "center" }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-3 group-hover:text-blue-200 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Tag className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-4 py-2 rounded-full">
              Giá trị cốt lõi
            </Tag>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Những{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                giá trị
              </span>{" "}
              chúng tôi theo đuổi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Các giá trị cốt lõi định hướng mọi hoạt động và quyết định của
              chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl group transform hover:-translate-y-2"
                bodyStyle={{ padding: 32 }}
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <div className="text-white">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <FeaturedProducts />

      {/* Timeline Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Các{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                cột mốc
              </span>{" "}
              quan trọng
            </h2>
            <p className="text-xl text-gray-600">
              Từ những bước đầu khiêm tốn đến vị thế hàng đầu trong ngành
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 rounded-full"></div>

            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                  }`}
                >
                  <Card
                    className="shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl group transform hover:-translate-y-2"
                    bodyStyle={{ padding: 32 }}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{achievement.icon}</div>
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mb-4">
                      {achievement.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {achievement.description}
                    </p>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2   bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-xl z-10 hover:scale-125 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Tag className="mb-4 bg-yellow-100 text-yellow-700 border-yellow-200 px-4 py-2 rounded-full">
              Chứng nhận & Giải thưởng
            </Tag>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              🎖️ Được{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                công nhận
              </span>{" "}
              bởi các tổ chức uy tín
            </h2>
            <p className="text-xl text-gray-600">
              Campus tự hào được công nhận bởi các tổ chức công nghệ và giáo dục
              hàng đầu trong nước & quốc tế
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="group bg-white hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl transform hover:-translate-y-2"
                bodyStyle={{ padding: 32 }}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sẵn sàng hợp tác cùng chúng tôi?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Hãy để Campus Thái Bình đồng hành cùng dự án của bạn với những giải
            pháp xây dựng tốt nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div
              onClick={() => push("/contact-us")}
              className="cursor-pointer bg-white text-blue-600 border-0 rounded-lg px-8 py-3 h-auto text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Liên hệ ngay
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
