"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (event: any) => {
    event.preventDefault();

    const keyword = event.target.keyword.value;
    router.push(`/search?keyword=${keyword}`);
  }

  const defaultKeyword = searchParams.get("keyword") || "";

  return (
    <>
      <div className='bg-[#212121] rounded-[50px] mt-[20px] ml-[20px] sticky top-[20px] z-[999]'>
        <form 
          className='py-[15px] pl-[30.63px] flex items-center gap-x-[20px]'
          onSubmit={(event) => handleSearch(event)}
        >
          <button type="submit" className='text-white text-[22px]'>
            <FaMagnifyingGlass />
          </button>
          <input 
            type="text" 
            name="keyword"
            placeholder="Tìm kiếm..." 
            className='text-white font-[500] text-[16px] leading-[20px] bg-transparent w-full focus:outline-none'
            defaultValue={defaultKeyword}
          />
        </form>
      </div>
    </>
  )
}