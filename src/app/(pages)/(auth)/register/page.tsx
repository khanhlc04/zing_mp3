import { FormRegister } from "@/app/components/Section/RegisterSection/FormRegister";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Đăng Ký",
  description: "Trang Đăng Ký ứng dụng nghe nhạc trực tuyến",
};

export default function RegisterPage() {
  return (
    <>
      <div className=''>
        <div className='container mx-auto'>
          <FormRegister />
        </div>
      </div>
    </>
  );
}