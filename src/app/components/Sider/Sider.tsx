"use client";

import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";
import { MenuItem } from "./MenuItem";

export const Sider = () => {
  const [isLogin, setIsLogin] = useState<boolean>();

  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  }, [])

  const menu = [
    {
      icon: <FaHouse />,
      title: "Trang Chủ",
      link: "/"
    },
    {
      icon: <FaMusic />,
      title: "Danh Mục Bài Hát",
      link: "/categories"
    },
    {
      icon: <FaPodcast />,
      title: "Ca Sĩ",
      link: "/singers"
    },
    {
      icon: <FaHeart />,
      title: "Bài Hát Yêu Thích",
      link: "/wishlist",
      isLogged: true
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng Xuất",
      link: "/logout",
      isLogged: true
    },
    {
      icon: <FaUser />,
      title: "Đăng Nhập",
      link: "/login",
      isLogged: false
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng Ký",
      link: "/register",
      isLogged: false
    },
  ]

  return (
    <>
      <div className='bg-[#212121] h-[100vh] fixed w-[280px]'>
        <div className='flex flex-col gap-y-[30px]'>
          <div className="bg-[#1C1C1C] py-[25px] w-full">
            <Link href='/' className='flex gap-[12px] items-center ml-[20px]'>
              <img
                className='h-[42px] w-auto'
                src="/logo.svg"
                alt='logo' />
              <span className='font-[700] text-[24px] leading-[28.8px] text-primary'>
                Music LCK
              </span>
            </Link>
          </div>
          <nav className="px-[20px]">
            <ul className='flex flex-col gap-[30px]'>
              {menu &&
                menu.map((item, index) => (
                  <MenuItem item={item} isLogin={isLogin} key={index}/>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}