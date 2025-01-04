import Link from "next/link";

export const CartItem = (props: { item: any }) => {
  const { item } = props;

  return (
    <>
      <Link href={item.link} className='flex flex-col gap-y-[10px]'>
        <div className='w-[180px] h-[180px] truncate rounded-[15px]'>
          <img
            src={item.image}
            alt={item.title}
            className='w-full h-full aspect-square object-cover'
          />
        </div>
        <h3 className='text-white font-[700] text-[14px] leading-[17.5px]'>
          {item.title}
        </h3>
        <p className='text-white opacity-[0.5] overflow-hidden whitespace-nowrap text-ellipsis font-[400] text-[12px] leading-[15px]'>
          {item.description}
        </p>
      </Link>
    </>
  )
}