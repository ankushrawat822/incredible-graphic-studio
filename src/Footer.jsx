import React from 'react'
import logo from './assets/logo.svg'
import instaImg from './assets/footer-insta.svg';
import whatsappImg from './assets/footer-whatsapp.svg'
import behanceImg from './assets/footer-behance.svg'
import twitterImg from './assets/footer-twitter.svg'
import ballImg from './assets/footer-ball.svg'

const Footer = () => {
  return ( 
    <>
    {/* main div */}
        <di className='flex flex-col flex-wrap md:flex-row items-start justify-start md:items-center md:justify-evenly footer-box-shadow p-5 sm:items-center sm:justify-center '>
        {/* div 1 */}
            <div className='lg:w-[280px] py-5 lg:mr-[120px] flex flex-col items-start justify-start sm:items-center sm:justify-center md:items-start md:justify-start sm:gap-2 md:gap-1'>
                <img className='w-[173px] h-[47px]' src={logo} alt="" />
                <h1 className='font-bold text-[21px] md:text-[25px] lg:text-[25px]'>INCREDIBLE GRAPHIX STUDIO</h1>
                    <p className='text-[22px]'>Be Incredible!</p>
                    <div className='home-hero-red-line mb-2'></div>
                    <p>Graphic Design Service Based Company</p>

                    
                    <div className='flex items-center justify-start gap-3  py-3'>
                        <img src={instaImg} alt="" />
                        <img src={behanceImg} alt="" />
                        <img src={ballImg} alt="" />
                        <img src={twitterImg} alt="" />
                        <img src={whatsappImg} alt="" />
                    </div>

            </div>
            {/* div 2 */}
            <div className='lg:w-[280px] flex flex-col items-start justify-start sm:items-center sm:justify-center md:items-start md:justify-start'>
            <p className='text-[22px]'>Company</p>
                    <div className='home-hero-red-line mb-2'></div>

                    <ul className='footer-ul pb-5 flex flex-col gap-2'>
                        <li>Gallery</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>

            </div>
            {/* div 3 */}
            <div className='lg:w-[280px] flex items-center justify-center'>
            <button className='home-hero-join-us-btn flex items-center justify-center'>JOIN US</button>
            </div>
        </di>
    </>
  )
}

export default Footer