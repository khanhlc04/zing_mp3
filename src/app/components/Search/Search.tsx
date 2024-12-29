import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
  return (
    <>
      <div className='bg-[#212121] rounded-[50px] mt-[20px] ml-[20px] sticky top-[20px] z-[999]'>
        <form className='py-[15px] pl-[30.63px] flex items-center gap-x-[20px]'>
          <button type="submit" className='text-white text-[22px]'>
            <FaMagnifyingGlass />
          </button>
          <input 
            type="text" 
            placeholder="Tìm kiếm..." 
            className='text-white font-[500] text-[16px] leading-[20px] bg-transparent w-full focus:outline-none'
          />
        </form>
      </div>
    </>
  )
}