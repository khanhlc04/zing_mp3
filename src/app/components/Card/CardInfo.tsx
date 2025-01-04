export const CardInfo = (
  props: {
    image: string,
    title: string,
    description: string
  }
) => {
  const { image, title, description } = props;
  return (
    <>
      <div className='flex gap-x-[20px] items-center'>
        <div className='w-[176.9px] h-[180px] rounded-[15px]'>
          <img
            src={image}
            alt={title}
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex-1'>
          <h3 className='font-[700] text-[35px] leading-[42px] text-primary'>
            {title}
          </h3>
          <p className='mt-[10px] text-[#EFEEE0] font-[400] text-[14px] leading-[16.8px]'>
            {description}
          </p>
        </div>
      </div>
    </>
  )
}