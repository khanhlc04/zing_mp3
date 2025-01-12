import Link from "next/link"
import { usePathname } from "next/navigation";

export const MenuItem = (props: {
  item: any,
  isLogin: any
}) => {
  const { item, isLogin } = props;

  const pathName = usePathname();
  return (
    <>
      {(item.isLogged === undefined || item.isLogged === isLogin) && (
        <li className=''>
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
      )}
    </>
  )
}