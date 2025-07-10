import { useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Space,
  Divider,
} from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SendOutlined,
  MessageOutlined,
  HomeOutlined,
  ShopOutlined,
  GlobalOutlined,
  BuildOutlined,
  HolderOutlined,
  StarFilled,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function ContactPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const zaloLink = `https://zalo.me/0986453003`;
    setTimeout(() => {
      window.open(zaloLink, "_blank");
      setLoading(false);
      form.resetFields();
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-2xl text-white" />,
      title: "Hotline",
      content: "0986.45.3003",
      description: "Hỗ trợ 24/7",
      bgGradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700",
      iconBg: "bg-gradient-to-r from-blue-400 to-blue-600",
      hoverGradient:
        "hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800",
      shadowColor: "shadow-blue-500/30",
      hoverShadow: "hover:shadow-blue-500/50",
    },
    {
      icon: <MailOutlined className="text-2xl text-white" />,
      title: "Email",
      content: "campusthaibinh@gmail.com",
      description: "Phản hồi trong 24h",
      bgGradient:
        "bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700",
      iconBg: "bg-gradient-to-r from-emerald-400 to-green-600",
      hoverGradient:
        "hover:from-emerald-600 hover:via-green-700 hover:to-teal-800",
      shadowColor: "shadow-emerald-500/30",
      hoverShadow: "hover:shadow-emerald-500/50",
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-white" />,
      title: "Địa chỉ chính",
      content: "Thôn Phụng Thượng, xã Vũ An, huyện Kiến Xương, tỉnh Thái Bình",
      description: "Trụ sở chính",
      bgGradient:
        "bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700",
      iconBg: "bg-gradient-to-r from-purple-400 to-violet-600",
      hoverGradient:
        "hover:from-purple-600 hover:via-violet-700 hover:to-indigo-800",
      shadowColor: "shadow-purple-500/30",
      hoverShadow: "hover:shadow-purple-500/50",
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-white" />,
      title: "Giờ làm việc",
      content: "8:00 - 17:30",
      description: "Thứ 2 - Chủ nhật",
      bgGradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
      iconBg: "bg-gradient-to-r from-orange-400 to-red-500",
      hoverGradient:
        "hover:from-orange-600 hover:via-red-600 hover:to-pink-700",
      shadowColor: "shadow-orange-500/30",
      hoverShadow: "hover:shadow-orange-500/50",
    },
  ];

  const offices = [
    {
      title: "VĂN PHÒNG HÀ NỘI",
      address:
        "687C Đ.Huyền Kỳ, Tổ dân phố 8, phường Phú Lãm, quận Hà Đông, TP Hà Nội",
      icon: <BuildOutlined className="text-xl text-blue-600" />,
      color: "text-blue-600",
    },
    {
      title: "VĂN PHÒNG TP.HCM",
      address: "534c đường HT13, phường Hiệp Thành, quận 12, TPHCM",
      icon: <ShopOutlined className="text-xl text-green-600" />,
      color: "text-green-600",
    },
    {
      title: "XƯỞNG SẢN XUẤT",
      address: "Thôn Bằng Gia, xã Tân Việt, huyện Bình Giang, tỉnh Hải Dương",
      icon: <HolderOutlined className="text-xl text-purple-600" />,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width%3D%2260%22 height%3D%2260%22 viewBox%3D%220 0 60 60%22 xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg fill%3D%22none%22 fillRule%3D%22evenodd%22%3E%3Cg fill%3D%22%23ffffff%22 fillOpacity%3D%220.1%22%3E%3Ccircle cx%3D%2230%22 cy%3D%2230%22 r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="animate-fade-in-up">
            <Title
              level={1}
              className="!text-white !mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              Liên Hệ Với Chúng Tôi
            </Title>
            <Paragraph className="!text-blue-100 text-lg md:text-xl !mb-8 max-w-3xl mx-auto leading-relaxed">
              Đường dây trợ giúp khách hàng - Chúng tôi luôn sẵn sàng hỗ trợ bạn
              24/7
            </Paragraph>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
              <GlobalOutlined className="mr-3 text-xl" />
              <Text className="!text-white font-semibold text-lg">
                Dịch vụ toàn quốc
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <Title level={2} className="!text-gray-800 !mb-4">
              Thông Tin Liên Hệ
            </Title>
            <Text className="text-gray-600 text-lg">
              Nhiều cách để bạn có thể liên hệ với chúng tôi
            </Text>
          </div>

          <Row gutter={[24, 24]}>
            {contactInfo.map((item, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  className={`text-center h-full transition-all duration-500 transform hover:-translate-y-3 border-0 group cursor-pointer overflow-hidden relative ${item.bgGradient} ${item.hoverGradient} shadow-xl ${item.shadowColor} ${item.hoverShadow} hover:shadow-2xl rounded-2xl`}
                  bodyStyle={{
                    padding: "40px 24px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating particles effect */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-700"></div>

                  <div className="relative z-10">
                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div
                        className={`w-20 h-20 mx-auto ${item.iconBg} rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 relative overflow-hidden`}
                      >
                        {/* Icon glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    <Title
                      level={4}
                      className="!mb-3  group-hover:!text-yellow-200 transition-colors duration-300 font-bold"
                    >
                      {item.title}
                    </Title>

                    <Text
                      strong
                      className="block !mb-3 text-lg group-hover:!text-white transition-colors duration-300"
                    >
                      {item.content}
                    </Text>

                    <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      <Text className="!text-white/80 text-sm font-medium group-hover:!text-white transition-colors duration-300">
                        {item.description}
                      </Text>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Row gutter={[48, 48]}>
            {/* Contact Form */}
            <Col xs={24} lg={12}>
              <Card className="h-full shadow-2xl border-0 rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-8 -m-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <MessageOutlined className="text-2xl text-white" />
                    </div>
                    <Title level={2} className="!text-white !mb-2">
                      Gửi Tin Nhắn
                    </Title>
                    <Text className="!text-blue-100">
                      Điền thông tin bên dưới để gửi tin nhắn cho chúng tôi
                    </Text>
                  </div>
                </div>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  requiredMark={false}
                  className="space-y-4"
                >
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        label={
                          <span className="text-gray-700 font-semibold">
                            Họ và tên
                          </span>
                        }
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập họ và tên!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập họ và tên"
                          size="large"
                          className="rounded-lg border-2 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        label={
                          <span className="text-gray-700 font-semibold">
                            Số điện thoại
                          </span>
                        }
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Vui lòng nhập số điện thoại!",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Nhập số điện thoại"
                          size="large"
                          className="rounded-lg border-2 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    label={
                      <span className="text-gray-700 font-semibold">Email</span>
                    }
                    name="email"
                    rules={[
                      { required: true, message: "Vui lòng nhập email!" },
                      { type: "email", message: "Email không hợp lệ!" },
                    ]}
                  >
                    <Input
                      placeholder="Nhập email"
                      size="large"
                      className="rounded-lg border-2 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                    />
                  </Form.Item>

                  <Form.Item
                    label={
                      <span className="text-gray-700 font-semibold">
                        Chủ đề
                      </span>
                    }
                    name="subject"
                    rules={[
                      { required: true, message: "Vui lòng chọn chủ đề!" },
                    ]}
                  >
                    <Select
                      placeholder="Chọn chủ đề"
                      size="large"
                      className="rounded-lg"
                    >
                      <Option value="consultation">Tư vấn sản phẩm</Option>
                      <Option value="support">Hỗ trợ kỹ thuật</Option>
                      <Option value="complaint">Khiếu nại</Option>
                      <Option value="cooperation">Hợp tác kinh doanh</Option>
                      <Option value="other">Khác</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label={
                      <span className="text-gray-700 font-semibold">
                        Nội dung
                      </span>
                    }
                    name="message"
                    rules={[
                      { required: true, message: "Vui lòng nhập nội dung!" },
                    ]}
                  >
                    <TextArea
                      placeholder="Nhập nội dung..."
                      rows={4}
                      maxLength={500}
                      showCount
                      className="rounded-lg border-2 hover:border-blue-400 focus:border-blue-500 transition-colors duration-300"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      loading={loading}
                      className="w-full h-14 bg-gradient-to-r from-blue-500 to-indigo-600 border-0 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      icon={<SendOutlined />}
                    >
                      {loading ? "Đang gửi..." : "Gửi Tin Nhắn qua Zalo"}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            {/* Company Info */}
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" className="w-full">
                {/* Company Information */}
                <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-[50px] -m-6 mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <BuildOutlined className="text-2xl text-white" />
                    </div>
                    <Title level={3} className="!text-white !mb-0">
                      Thông Tin Công Ty
                    </Title>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Title
                        level={4}
                        className="!text-blue-600 !mb-3 leading-tight"
                      >
                        CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ CAMPUS THÁI BÌNH
                      </Title>
                      <div className="flex items-center mb-4">
                        <StarFilled className="text-yellow-500 mr-2" />
                        <Text strong className="!text-gray-700">
                          Mã số thuế: 1001271847
                        </Text>
                      </div>
                    </div>

                    <Space
                      direction="vertical"
                      size="middle"
                      className="w-full"
                    >
                      <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Text strong className="!text-blue-700 block mb-2">
                          Trụ sở chính:
                        </Text>
                        <Text className="!text-gray-700">
                          Thôn Phụng Thượng, xã Vũ An, huyện Kiến Xương, tỉnh
                          Thái Bình
                        </Text>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Text strong className="!text-green-700 block mb-2">
                          Tổng kho Hà Nội:
                        </Text>
                        <Text className="!text-gray-700">
                          Ngõ 50 đường Lê Trọng Tấn, Dương Nội, Hà Đông, Hà Nội
                        </Text>
                      </div>

                      <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Text strong className="!text-purple-700 block mb-2">
                          Tổng kho TP.HCM:
                        </Text>
                        <Text className="!text-gray-700">
                          Dự án Dragon Village – Đường Đặng Thành Hiếu – TP Thủ
                          Đức – TP Hồ Chí Minh
                        </Text>
                      </div>
                    </Space>
                  </div>
                </Card>

                {/* Offices */}
                <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-8 -m-6 mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      <HomeOutlined className="text-2xl text-white" />
                    </div>
                    <Title level={3} className="!text-white !mb-0">
                      Văn Phòng & Xưởng
                    </Title>
                  </div>

                  <Space direction="vertical" size="large" className="w-full">
                    {offices.map((office, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                          <div className="mt-1 w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {office.icon}
                          </div>
                          <div className="flex-1">
                            <Text
                              strong
                              className={`block ${office.color} mb-2 text-lg group-hover:scale-105 transition-transform duration-300`}
                            >
                              {office.title}
                            </Text>
                            <Text className="!text-gray-600 leading-relaxed">
                              {office.address}
                            </Text>
                          </div>
                        </div>
                        {idx < offices.length - 1 && (
                          <Divider className="!my-4 !border-gray-200" />
                        )}
                      </div>
                    ))}
                  </Space>
                </Card>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
