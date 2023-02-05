import React from 'react'
import logo from './assets/logo.svg'
import instaImg from './assets/footer-insta.svg';
import whatsappImg from './assets/footer-whatsapp.svg'
import behanceImg from './assets/footer-behance.svg'
import twitterImg from './assets/footer-twitter.svg'
import ballImg from './assets/footer-ball.svg'
import * as Scroll from 'react-scroll'

const Footer = () => {


     // scroll into starts
  
     const scroller = Scroll.scroller;

     const scrollToGallery = () => {
       scroller.scrollTo('galleryRef', {
         duration: 100,
         delay: 0,
         smooth: true,
         offset: 50
       });
     };
   
     const scrollToServices = () => {
       scroller.scrollTo('ServicesRef', {
         duration: 100,
         delay: 0,
         smooth: true,
         offset: 50
       });
     };
   
     const scrollToContact = () => {
       scroller.scrollTo('ContactRef', {
         duration: 100,
         delay: 0,
         smooth: true,
         offset: 50
       });
     };
     
     const scrollToTestimonial = () => {
        scroller.scrollTo('TestimonialRef', {
          duration: 100,
          delay: 0,
          smooth: true,
          offset: -200
        });
      };


  return ( 
    <>
    {/* main div */}
        <di id="ContactRef" className='flex flex-col flex-wrap md:flex-row items-center justify-start md:items-center md:justify-evenly footer-box-shadow p-5 sm:items-center sm:justify-center '>
        {/* div 1 */}
            <div className='lg:w-[280px] lg:mr-32 py-5  flex flex-col items-center justify-start sm:items-center sm:justify-center md:items-start md:justify-start sm:gap-2 md:gap-1'>
                <img className='w-[173px] h-[47px] md:ml-[-31px]' src={logo} alt="" />
                <h1 className='font-bold text-[21px] md:text-[25px] lg:text-[25px]'>INCREDIBLE GRAPHIX STUDIO</h1>
                    <p className='text-[22px]'>Be Incredible!</p>
                    <div className='home-hero-red-line mb-2'></div>
                    <p>Graphic Design Service Based Company</p>

                    
                    <div className='flex items-center justify-start gap-3  py-3'>
                       <a href="https://www.instagram.com/incrediblegraphixstudio/"><img src={instaImg} alt="" /></a> 
                   <a href="https://www.behance.net/igraphixstudio/projects"><img src={behanceImg} alt="" /></a>   
                       <a href="https://dribbble.com/incrediblegraphixstudio"> <img src={ballImg} alt="" /></a>
                       <a href="https://twitter.com/incrediblegs"> <img src={twitterImg} alt="" /></a>
                        {/* <img src={whatsappImg} alt="" /> */}
                    </div>

            </div>
            {/* div 2 */}
            <div className='lg:w-[280px] flex flex-col items-center justify-start sm:items-center sm:justify-center md:items-start md:justify-start'>
            <p className='text-[22px]'>Company</p>
                    <div className='footer-company-red-line mb-2'></div>

                    <ul className='footer-ul pb-5 flex flex-col gap-2'>
                        <li className='cursor-pointer' onClick={scrollToGallery}>Gallery</li>
                        <li className='cursor-pointer' onClick={scrollToServices}>Services</li>
                        <li className='cursor-pointer' onClick={scrollToContact}>Contact Us</li>
                        <li className='cursor-pointer' onClick={scrollToTestimonial}>Testimonial</li>
                    </ul>

            </div>
            {/* div 3 */}
            <div className='lg:w-[380px] flex flex-col items-center sm:items-start justify-center'>
            <p className='text-[22px]'>Get in Touch with Us!</p>
                    <div className='footer-form-red-line mb-5'></div>

                {/* input fields */}
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <input className='input-field' placeholder='Full Name' type="text" />
                    <input className='input-field' placeholder='Email' type="email" />
                </div>
                <textarea className='input-field w-[300px] py-3 my-3 h-[80px] sm:w-[400px] sm:h-[60px]' placeholder='Description' type="text" />
                <select className='input-field w-[300px] py-3  h-[38px] sm:w-[400px]' >
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat" selected>Fiat</option>
    <option value="audi">Audi</option>
    </select>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-5 mt-3'> 
        <button className=' flex items-center justify-center footer-clear-btn'>clear All</button>
        <button className=' flex items-center justify-center footer-submil-btn'>Submit</button>
        </div>
           
            </div>
        </di>
    </>
  )
}

export default Footer