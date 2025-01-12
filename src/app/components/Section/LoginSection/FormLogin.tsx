"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { Title } from "../../Title/Title"
import { authFirebase } from "@/app/firebaseConfig";
import { useRouter } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const FormLogin = () => {
  const router = useRouter();

  const handleLogin = (event: any) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email && password) {
      signInWithEmailAndPassword(authFirebase, email, password).then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        if (user) {
          router.push("/");
        } else {
          alert("Sai Email và Mật Khẩu!")
        }
      }).catch((error) => {
        console.error("Error signing in:", error);
        alert(error.message); // Hiển thị lỗi khi đăng nhập thất bại
      });
    }
  }
  return (
    <>
      <form
        className='flex flex-col items-center gap-y-[15px] px-[240px]'
        onSubmit={event => handleLogin(event)}
      >
        <Title text="Đăng Nhập Tài Khoản" />

        <div className='flex flex-col gap-y-[5px] w-full'>
          <div className='flex gap-x-[10px]'>
            <label
              htmlFor="email"
              className="font-[600] text-[14px] leading-[22px] text-white"
            >
              Email
            </label>
            <span className='font-[600] text-[14px] leading-[22px] text-[#F21D2F]'>
              *
            </span>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ví dụ: levana@gmail.com"
            className="text-[14px] font-600] leading-[22px] w-full py-[14px] px-[16px] rounded-[6px]"
          />
        </div>

        <div className='flex flex-col gap-y-[5px] w-full'>
          <div className='flex gap-x-[10px]'>
            <label
              htmlFor="password"
              className="font-[600] text-[14px] leading-[22px] text-white"
            >
              Mật Khẩu
            </label>
            <span className='font-[600] text-[14px] leading-[22px] text-[#F21D2F]'>
              *
            </span>
          </div>
          <input
            type="password"
            name="password"
            id="password"
            className="text-[14px] font-600] leading-[22px] w-full py-[14px] px-[16px] rounded-[6px]"
          />
        </div>

        <button
          type="submit"
          className='bg-primary w-full py-[14px] rounded-[6px] font-[700] text-[16px] leading-[22px] text-white'
        >
          Đăng Nhập
        </button>
      </form>
    </>
  )
}