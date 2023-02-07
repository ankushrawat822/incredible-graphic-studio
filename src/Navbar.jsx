import React , {useState , useRef} from 'react'
import logo from './assets/logo.svg'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import * as Scroll from 'react-scroll';


const Navbar = () => {

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

  const scrollToTestimonial = () => {
    scroller.scrollTo('TestimonialRef', {
      duration: 100,
      delay: 0,
      smooth: true,
      offset: -200
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


    // scroll into ends

   const [showMenu , setShowMenu] = useState(false)

   const handleHamburgerMenu = () =>{
    setShowMenu(prev => !prev)

    if(document.body.classList.contains('fixed-body-class')){
        document.body.classList.remove('fixed-body-class');
        console.log("removed")
    } else {
        document.body.classList.add('fixed-body-class');
        console.log('added')
    }

   }

//  hidding mobile nav div on click any btn
const handleAllMobileToCloseDiv = () =>{
     setShowMenu(prev => !prev)

     if(document.body.classList.contains('fixed-body-class')){
        document.body.classList.remove('fixed-body-class');
        console.log("removed")
    } else {
        document.body.classList.add('fixed-body-class');
        console.log('added')
    }

}

  return (
<>
{/* desktop links */}
    <div className=' flex items-center justify-between md:justify-start  py-3 md:text-[20px] navbar-drop-shadow px-5'>
        <div>
        <Link to="/"> <img className='md:w-[179px] md:h-[32px]' src={logo} alt="" /></Link>   
        </div>

        <div onClick={handleHamburgerMenu} className='flex md:hidden cursor-pointer'>
            <GiHamburgerMenu className=' w-[35px] h-[22px]'></GiHamburgerMenu>
        </div>

        <div className='hidden md:flex '>
            <ul className='flex items-center justify-center gap-7'>
                <li ><Link to='/' onClick={scrollToGallery}>Gallery</Link> </li>
                <li ><Link to='/' onClick={scrollToServices}>Services</Link></li>
                <li ><Link to='/' onClick={scrollToContact}>Contact Us</Link></li>
                <li><Link to="/about" >About Us</Link> </li>
            </ul>
        </div>



      
    </div>
      {/* mobile links starts  */}
     { showMenu && <div className='absolute w-[100vw] mobile-nav-styles  h-screen flex flex-col items-center pt-[100px] bg-[#ffffff] '>
            <ul className='flex flex-col leading-relaxed text-[34px]  font-bold items-start justify-center gap-12'>
                <li onClick={handleAllMobileToCloseDiv} className=' hover:text-gray-400 cursor-pointer'><Link to='/' onClick={scrollToGallery}>Gallery</Link> </li>
                <li onClick={handleAllMobileToCloseDiv} className=' hover:text-gray-400 cursor-pointer'><Link to='/' onClick={scrollToServices}>Services</Link></li>
                <li onClick={handleAllMobileToCloseDiv} className=' hover:text-gray-400 cursor-pointer'><Link to='/' onClick={scrollToContact}>Contact Us</Link></li>
                <li><Link onClick={handleAllMobileToCloseDiv} to="/about" className='cursor-pointer hover:text-gray-400 '>About Us</Link> </li>
            </ul>
        </div> }
</>
  )
}

export default Navbar