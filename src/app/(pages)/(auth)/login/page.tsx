import { FormLogin } from "@/app/components/Section/LoginSection/FormLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Đăng Nhập",
  description: "Trang Đăng Nhập ứng dụng nghe nhạc trực tuyến",
};

export default function LoginPage() {
  return (
    <>
      <div className=''>
        <div className='container mx-auto'>
          <FormLogin />
        </div>
      </div>
    </>
  );
}