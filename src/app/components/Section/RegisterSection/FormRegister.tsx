"use client";

import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { Title } from "../../Title/Title"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const FormRegister = () => {
  const router = useRouter();

  const handleRegister = (event: any) => {
    event.preventDefault();
    const fullName = event.target.fullName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (fullName && email && password) {
      createUserWithEmailAndPassword(authFirebase, email, password).then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        if (user) {
          set(ref(dbFirebase, `users/${user.uid}`), {
            fullName: fullName
          })
            .then(() => {
              router.push("/");
            });
        }
      })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }

  return (
    <>
      <form
        className='flex flex-col items-center gap-y-[15px] px-[240px]'
        onSubmit={event => handleRegister(event)}
      >
        <Title text="Đăng Ký Tài Khoản" />

        <div className='flex flex-col gap-y-[5px] w-full'>
          <div className='flex gap-x-[10px]'>
            <label
              htmlFor="fullName"
              className="font-[600] text-[14px] leading-[22px] text-white"
            >
              Họ Tên
            </label>
            <span className='font-[600] text-[14px] leading-[22px] text-[#F21D2F]'>
              *
            </span>
          </div>
          <input
            type="fullName"
            name="fullName"
            id="fullName"
            placeholder="Ví dụ: Lê Văn A"
            className="text-[14px] font-600] leading-[22px] w-full py-[14px] px-[16px] rounded-[6px]"
          />
        </div>

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
          Đăng Ký
        </button>
      </form>
    </>
  )
}