import React from 'react'
import HomeHeroIMg from './assets/Home-hero-img.svg'
import SideImg from './assets/Side-Img.svg'

const Test = () => {
    return (
        <>


            {/* <div className='lg:mr-[6rem] lg:pl-20 md:px-10 lg:px-20 p-3 flex flex-col items-start justify-start gg'>
                <div className='flex flex-col  items-start justify-start mt-[20px] md:px-20 md:mt-20 '>
                    <h1 className='font-bold text-[25px] md:text-[34px] lg:text-[48px]'>INCREDIBLE GRAPHIX STUDIO</h1>
                    <p className='text-[22px]'>Be Incredible!</p>
                    <div className='home-hero-red-line'></div>
                </div>
                <div className=' px-3 flex flex-col items-center justify-between bb   '>

                    <div className=' flex flex-col items-center justify-center lg:gap-10 md:flex-row-reverse lg:mr-[13rem] '>
                       
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <img src={HomeHeroIMg} alt="" />
                            <button className='home-hero-join-us-btn'>JOIN US</button>
                        </div>
                     
                        <div className='text-[24px] mt-5'>
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
                                <button className='home-hero-explore-more-btn'>EXPLORE MORE</button>
                                <button className='home-hero-contact-us-btn'>CONTACT US</button>
                            </div>


                        </div>

                       

                    </div>





                </div>
            </div> */}



            {/* main div */}
            <div className='lg:mr-[6rem] lg:pl-20 md:px-10 lg:px-20 '>
                {/* side img */}
                <div>
                    <img className='hidden absolute right-5 lg:flex top-20' src={SideImg} alt="" />
                </div>

                {/*  heading */}
                <div className='flex flex-col  items-start justify-start mt-[20px] p-3 sm:hidden'>
                    <h1 className='font-bold text-[22px]'>INCREDIBLE GRAPHIX STUDIO</h1>
                    <p className='text-[22px]'>Be Incredible!</p>
                    <div className='home-hero-red-line'></div>
                </div>
                {/* img and ul div */}
                <div className='flex flex-col items-center justify-center gap-4 sm:flex-row-reverse'>
                    
                    {/* img div */}
                    <div className='flex flex-col items-center justify-center gap-4'>
                    <img src={HomeHeroIMg} alt="" />
                    <button className='home-hero-join-us-btn ml-8'>JOIN US</button>
                    </div>
                    {/* ul div */}
                    <div className='text-[24px] mt-5'>
                    <div className='sm:flex flex-col  items-start justify-start mt-[20px] hidden'>
                    <h1 className='font-bold text-[34px]'>INCREDIBLE GRAPHIX STUDIO</h1>
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
                                <button className='home-hero-explore-more-btn'>EXPLORE MORE</button>
                                <button className='home-hero-contact-us-btn'>CONTACT US</button>
                            </div>


                        </div>
                </div>
            </div>

        </>
    )
}

export default Test