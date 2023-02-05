import React , {useState} from 'react'
import logo from './assets/logo.svg'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {

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
                <li>Gallery</li>
                <li>Services</li>
                <li>Contact Us</li>
                <li><Link to="/about">About Us</Link> </li>
            </ul>
        </div>



      
    </div>
      {/* mobile links starts  */}
     { showMenu && <div className='absolute w-screen  h-screen flex flex-col items-center pt-[100px] bg-[#ffffff]'>
            <ul className='flex flex-col leading-relaxed text-[34px]  font-bold items-center justify-center gap-12'>
                <li onClick={handleAllMobileToCloseDiv} className=' hover:text-gray-400 cursor-pointer'>Gallery</li>
                <li onClick={handleAllMobileToCloseDiv} className=' hover:text-gray-400 cursor-pointer'>Services</li>
                <li onClick={handleAllMobileToCloseDiv} className=' hover:text-gray-400 cursor-pointer'>Contact Us</li>
                <li><Link onClick={handleAllMobileToCloseDiv} to="/about" className='cursor-pointer hover:text-gray-400 '>About Us</Link> </li>
            </ul>
        </div> }
</>
  )
}

export default Navbar