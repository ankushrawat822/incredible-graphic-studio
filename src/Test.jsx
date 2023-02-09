import React from 'react'
import HomeHeroIMg from './assets/Home-hero-img.svg'
import SideImg from './assets/Side-Img.svg'
import * as Scroll from 'react-scroll';

const Test = () => {

    const scroller = Scroll.scroller;

  const scrollToServices = () => {
    scroller.scrollTo('ServicesRef', {
      duration: 100,
      delay: 0,
      smooth: true,
      offset: 50
    });
  };


    return (
        <>

            {/* main div */}
            <div className='lg:mr-[6rem] lg:pl-20 md:px-10 lg:px-20 lg:mt-[30px]'>
                {/* side img */}
                <div>
                    <img className='hidden absolute right-5 lg:flex top-20' src={SideImg} alt="" />
                </div>

                {/*  heading */}
                <div className='flex flex-col  items-start justify-start mt-[20px] p-3 md:hidden'>
                    <h1 className='font-bold text-[22px]'>INCREDIBLE GRAPHIX STUDIO</h1>
                    <p className='text-[22px]'>Be Incredible!</p>
                    <div className='home-hero-red-line'></div>
                </div>
                {/* img and ul div */}
                <div className='flex flex-col items-center justify-center gap-4 md:flex-row-reverse'>
                    
                    {/* img div */}
                    <div className='flex flex-col items-center justify-center gap-4'>
                    <img src={HomeHeroIMg} alt="" />
                    <button className='home-hero-join-us-btn ml-0 sm:ml-8 w-[276.5px] sm:w-[164px]'> <a href="mailto:officialigsbusiness@gmail.com">JOIN US</a></button>
                    </div>
                    {/* ul div */}
                    <div className='text-[24px] mt-5 p-3'>
                    <div className='md:flex flex-col  items-start justify-start mt-[20px] hidden'>
                    <h1 className='font-bold text-[34px] mb-[-10px]'>INCREDIBLE GRAPHIX STUDIO</h1>
                    <p className='text-[22px]'>Be Incredible!</p>
                    <div className='home-hero-red-line'></div>
                </div>
                            <p className='text-[26px]'>Providing services such as:</p>
                            <ul className='home-hero-ul ml-10 pb-5'>
                                <li>Logo Design</li>
                                <li>Character Design</li>
                                <li>Commission Design</li>
                                <li>Banner Design</li>
                                <li>Poster Design</li>
                                <li>Flyer Design</li>
                                <li>Custom Creatives</li>
                            </ul>

                         
                            <div className='flex items-center justify-center flex-col md:flex-row gap-4'>
                                <button onClick={scrollToServices} className='home-hero-explore-more-btn'>EXPLORE MORE</button>
                                <button className='home-hero-contact-us-btn'> <a href="https://forms.gle/HuXYnUNEWUwXs26h8"> CONTACT US</a></button>
                            </div>


                        </div>
                </div>
            </div>

        </>
    )
}

export default Test