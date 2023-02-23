import React , {useState}from 'react'
import logo from './assets/logo.svg'
import instaImg from './assets/footer-insta.svg';
import whatsappImg from './assets/footer-whatsapp.svg'
import behanceImg from './assets/footer-behance.svg'
import twitterImg from './assets/footer-twitter.svg'
import ballImg from './assets/footer-ball.svg'
import * as Scroll from 'react-scroll'
import linkedin from './assets/footer-linkdin.svg'

const Footer = () => {

  // input field states

  const [ fullName, setFullName ] = useState("")
  const [ Email, setEmail ] = useState("")
  const [ discription, setDiscription ] = useState("")


 const handleFullNameChange=(e)=>{
  setFullName(e.target.value)
  } 

  const handleEmailChange=(e)=>{
    setEmail(e.target.value)
    } 


    const handleDiscriptionChange=(e)=>{
      setDiscription(e.target.value)
      } 
  

  // submit btn
  const handleSubmitBtn = ()=>{
    alert("Currently We are not receiving this Form Please Contact Us through Google Form")
  }

  // clear btn
  const handleClearAllBtn =()=>{
    setFullName("")
    setEmail("")
    setDiscription("")
  }

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
      <div id="ContactRef" className='flex flex-col mt-[-100px] flex-wrap md:flex-row items-center justify-start md:items-start md:justify-evenly footer-box-shadow p-5 sm:items-center sm:justify-center pt-[24px] gap-5'>
        {/* div 1 */}
        <div className='lg:w-[290px] lg:mr-32 py-5  flex flex-col items-center justify-start sm:items-center sm:justify-center md:items-start md:justify-start sm:gap-2 md:gap-2'>
          <img className='w-[173px] h-[47px] md:ml-[-31px]' src={logo} alt="" />
          <h1 className='font-bold text-[20px] md:text-[19px] lg:text-[20px] py-2 footer-h1-heading'>INCREDIBLE GRAPHIX STUDIO</h1>
          <p className='text-[19px]'>Be Incredible!</p>
          <div className='home-hero-red-line mb-2'></div>
          <p className='text-[16px]'>Graphic Design Service Based Company</p>


          <div className='flex items-center justify-start gap-3  py-3'>
            <a className='footer-icon-hover' href="https://www.instagram.com/incrediblegraphixstudio/"><img src={instaImg} alt="" /></a>
            <a className='footer-icon-hover' href="https://www.behance.net/igraphixstudio/projects"><img src={behanceImg} alt="" /></a>
            <a className='footer-icon-hover' href="https://dribbble.com/incrediblegraphixstudio"> <img src={ballImg} alt="" /></a>
            <a className='footer-icon-hover' href="https://twitter.com/incrediblegs"> <img src={twitterImg} alt="" /></a>
            <a className='footer-icon-hover' href="https://www.linkedin.com/company/incredible-graphix-studio/"> <img src={linkedin} alt="" /></a>
            {/* <img src={whatsappImg} alt="" /> */}
          </div>

        </div>
        {/* div 2 */}
        <div className='lg:w-[280px] flex flex-col items-center justify-start sm:items-center sm:justify-center md:items-start md:justify-start  sm:py-0'>
          <p className='text-[22px]'>Company</p>
          <div className='footer-company-red-line mb-2'></div>

          <ul className='footer-ul pb-5 flex flex-col gap-2 items-center sm:items-start sm:justify-start'>
            <li className='cursor-pointer' onClick={scrollToGallery}>Gallery</li>
            <li className='cursor-pointer' onClick={scrollToServices}>Services</li>
            <li className='cursor-pointer' onClick={scrollToContact}>Contact Us</li>
            <li className='cursor-pointer' onClick={scrollToTestimonial}>Testimonial</li>
          </ul>

        </div>
        {/* div 3 */}
        <div className='lg:w-[380px] flex flex-col items-center md:items-start sm:items-start justify-center'>
          <p className='text-[22px]'>Get in Touch with Us!</p>
          <div className='footer-form-red-line mb-5'></div>

          {/* input fields */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <input value={fullName} onChange={handleFullNameChange} className='input-field w-[80vw] sm:w-[190px]' placeholder='Full Name' type="text" />
            <input value={Email} onChange={handleEmailChange} className='input-field w-[80vw] sm:w-[190px]' placeholder='Email' type="email" />
          </div>
          <textarea value={discription} onChange={handleDiscriptionChange} className='input-field w-[80vw] py-3 my-3 h-[80px] sm:w-[400px] sm:h-[60px]' placeholder='Description' type="text" />
          <select className='input-field w-[80vw] py-3  h-[38px] sm:w-[400px]' >
            <option value="volvo">Graphic Design</option>
            <option value="saab">Artwork </option>
            <option value="fiat" selected>Logo Design</option>
            <option value="fiat" selected>Other</option>
          
          </select>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-2 mt-3 mb-[20px] md:mb-0'>
            <button className=' flex items-center justify-center footer-clear-btn text-[20px] w-[80vw] sm:w-[225px]' onClick={handleClearAllBtn}>Clear All</button>
            <button onClick={handleSubmitBtn} className=' flex items-center justify-center footer-submil-btn text-[20px] w-[80vw] sm:w-[165px]'>Submit</button>
          </div>

        </div>

      

       

      </div>


      <div className='w-screen bg-white text-center flex flex-col items-center justify-center sm:flex-row  sm:justify-center  py-3 mt-[-39px]'>

         <p className='footer-copyright-p  text-center sm:pr-[5rem]'>Copyright &#169; 2023  Incredible Graphix Studio. </p>
      </div>
  




    </>
  )
}

export default Footer