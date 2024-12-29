"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaHouse, FaMusic, FaPodcast, FaHeart, FaRightFromBracket, FaUser, FaUserPlus } from "react-icons/fa6";

export const Sider = () => {
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
      title: "Yêu Thích",
      link: "/wishlist"
    },
    {
      icon: <FaRightFromBracket />,
      title: "Đăng Xuất",
      link: "/logout"
    },
    {
      icon: <FaUser />,
      title: "Đăng Nhập",
      link: "/login"
    },
    {
      icon: <FaUserPlus />,
      title: "Đăng Ký",
      link: "/register"
    },
  ]

  const pathName = usePathname();

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
                  <li key={index} className=''>
                    <Link
                      href={item.link}
                      className={"flex gap-x-[20px] items-center hover:text-primary " + (pathName === item.link ? "text-primary" : "text-white")}>
                      <span className='text-[22px]'>
                        {item.icon}
                      </span>
                      <span className='text-[16px] font-[700] leading-[19.2px]'>
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}