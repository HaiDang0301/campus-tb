import { Button } from "antd";
import { Clock, ArrowLeft, Rocket, Star } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="p-8 md:p-12 text-center">
          <div className="mb-8 relative">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4">
              <Rocket className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Star className="w-6 h-6 text-yellow-400 animate-bounce" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Coming Soon
          </h1>
          <p className="text-gray-600 mb-6">
            Tính năng đang được phát triển, bạn quay lại sau nhé!
          </p>
          <Link href="/">
            <Button type="primary" className="bg-blue-600 hover:bg-blue-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Về trang chủ
            </Button>
          </Link>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>
                Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
