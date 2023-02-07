import React from 'react'
import starImg from './assets/testimonial-star.svg'
import GirlImg1 from './assets/testimonial-img1.svg'

const Testimonials = () => {

 const data = [
  {
    name : "abc",
    role : " Stack Web Developer",
    img : "./testimonialImg1.svg",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
    star : [ 
      {
        one : 1
      },
      {
        one : 1
      },
      {
        one : 1
      },
      {
        one : 1
      },
    ]

  },
 
  {
    name : "OLIVIA",
    role : "Full Stack Web Developer",
    img : "./testimonialImg1.svg",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
    star : [ 
      {
        one : 1
      },
      {
        one : 1
      },
      {
        one : 1
      },
      {
        one : 1
      },
    ]

  },
  {
    name : "OLIVIA",
    role : "Full Stack Web Developer",
    img : "./testimonialImg1.svg",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. ",
    star : [ 
      {
        one : 1
      },
      {
        one : 1
      },
      {
        one : 1
      },
      {
        one : 1
      },
    ]

  },
 ]


  return (
    <>
        <div className='lg:mr-[6rem] lg:pl-20 md:px-10 lg:px-20 p-3'>
     {/* heading div */}
 <div className='flex flex-col items-center justify-center mt-20 pb-10'>
     <h1 className='font-bold text-[40px] ' >Testimonials</h1>
     <p className='text-[20px] '>Reviews from our Clients</p>
 </div>


    {/* cards div starts  */}
    <div id='TestimonialRef' className='testimonial-bg-img  z-10 py-16 lg:pb-52 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-between gap-10 lg:gap-2 '>
     { data.map((item) => (   <div className=' z-0 flex flex-col w-[325px] testimonial-card-box-shadow'>
            {/* upper black div */}
          <div className='relative  flex items-center justify-center bg-black ml-[70px] pt-3   h-[135px]'>
                <img  className='absolute mr-[0px] left-[-49px]' src={item.img} alt="" />
              {/* text */}
              <div className='absolute right-0 bg-black flex flex-col items-start justify-start  gap-5 w-[150px]'>
                <p className='bg-white px-2 py-1 mr-5 font-bold'>{item.name} </p>
                <p className='text-white px-2'>{item.role}</p>
              </div>
          </div>
          {/* lower black div */}
          <div className='bg-black mt-2 ml-[70px] '>
            <p className='text-white text-[24px] p-3'>{item.text}</p>
              <div className='flex items-start justify-center gap-1 pb-4'>

              {  item.star.map((s)=>(
                 <img className='py-4' src={starImg} alt="" />
                        
                 ))    }
              
              </div>
          </div>
      </div> ))}
    </div>
        </div>


        <div className='mt-[200px]'>

        </div>
    </>
  )
}

export default Testimonials