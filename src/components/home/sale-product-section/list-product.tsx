import { Button, Row, Col, Card } from "antd";
import Image from "next/image";
import demo from "@/../public/assets/images/demo.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";

const products = [
  { id: 1, name: "Song chắn rác Composite có khung 960×530", image: demo },
  { id: 2, name: "Song chắn rác Composite có khung 960×530 2", image: demo },
  { id: 3, name: "Song chắn rác Composite có khung 960×530 3", image: demo },
  { id: 4, name: "Song chắn rác Composite có khung 960×530 4", image: demo },
  { id: 5, name: "Song chắn rác Composite có khung 960×530 5", image: demo },
  { id: 6, name: "Song chắn rác Composite có khung 960×530 6", image: demo },
];

export const ListProductSection = () => {
  return (
    <div className="flex flex-col gap-[24px] w-full px-4 flex-2/3">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-[20px] font-semibold">Product list 1</h2>
        <Button type="primary">Xem thêm</Button>
      </div>
      <Row gutter={[24, 24]}>
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8}>
            <Card hoverable className="p-[10px]">
              <div className="flex gap-[12px] items-start">
                <div className="relative w-[120px] h-[120px] flex-shrink-0">
                  <Image
                    alt={product.name}
                    src={product.image}
                    fill
                    style={{ objectFit: "cover", borderRadius: 8 }}
                  />
                </div>
                <div className="flex flex-col justify-between gap-[8px]">
                  <p className="font-medium">{product.name}</p>
                  <p className="text-[#bf3617] font-bold">Giá: liên hệ</p>
                  <div className="flex items-center gap-[8px] cursor-pointer justify-end">
                    <p className="text-[#034c8c] font-medium m-0">
                      Xem chi tiết
                    </p>
                    <ArrowRightOutlined
                      style={{ color: "#034c8c", fontSize: 12 }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
