import React from 'react'

const Slogan = () => {
  return (
    <div className="">
    <div className="relative ">
      <div className="shop_title">
        Vẻ đẹp đến từ <br></br> 
       <span className='relative bg-white z-10 px-[20px]'>sự chăm sóc
        <span className='absolute w-[140%] h-[3px] rounded-lg bg-black top-[50%] translate-y-[-50%] z-[-1] left-[-20px]'></span>
       </span>
      </div>
      <div className="logo_thumb w-[200px] h-[200px] overflow-hidden absolute right-0 top-[50%] translate-y-[-50%]  ">
        <img src="https://cf-sparkai-live.s3.amazonaws.com/users/2nMhtAq6opHNkBczIkcdXfatVjR/spark_ai/o_bg-remover-gen_2nMhvUlKMNOsj9maRnzbqviRu7J.png" alt="" className='w-full h-full object-cover' />
      </div>
    </div>
    <div className='slogan mt-[50px] text-[26px]'>"Nâng niu làn da – Gửi trọn yêu thương."</div>
  </div>
  )
}

export default Slogan
