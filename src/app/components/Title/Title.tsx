export const Title = (props: {text: string}) => {
  const  { text } = props;

  return (
    <>
      <h3 className='font-[700] text-[24px] leading-[28.8px] mb-[20px] text-white'>
        {text}
      </h3>
    </>
  )
}