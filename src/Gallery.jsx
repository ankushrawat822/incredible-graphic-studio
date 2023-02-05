import React from 'react'
import GalleryImg1 from './assets/gallery-img1.svg'
import GalleryCenterImg from './assets/gallery-center-img.svg'
import GalleryPizzaImg from './assets/gallery-pizza-img.svg'
import GalleryJuiceImg from './assets/gallery-juice.svg'
import GalleryTremeImg from './assets/gallery-treme.jpg'

const Gallery = () => {
  return (
        <>
        <div className='lg:mr-[6rem] lg:pl-20 md:px-10 p-3'>
           <div className='flex flex-col items-center justify-center mt-20 pb-10'>
                <h1 className='font-bold text-[40px] ' >Gallery</h1>
                <p className='text-[20px] font-bold'>Sample Images of the Creatives</p>
            </div>


            {/* images section */}
            <div className='flex flex-col md:flex-row items-center justify-center lg:justify-between  gap-3 lg:gap-6 md:px-10'>
               {/* div 1 */}
               <div className='flex flex-row sm:flex-col gap-5 items-center justify-center flex-wrap lg:gap-10'>
                  <img className='rounded-[8px] sm:w-[356px] sm:h-[295px] gallery-img-hover' src={GalleryImg1} alt="" />
                  <img  className='rounded-[8px]  sm:w-[356px] sm:h-[295px] gallery-img-hover' src={GalleryPizzaImg} alt="" />
               </div>
               {/* div 2 */}
               <div className='hidden md:flex gallery-mid-img'>
                  <img className='rounded-[8px] gallery-img-hover'  src={GalleryCenterImg} alt="" />
               </div>
               {/* div 3 */}
               <div className='flex flex-row sm:flex-col items-center justify-center flex-wrap gap-5 lg:gap-10'>
               <img  className='rounded-[8px]  sm:w-[356px] sm:h-[295px] gallery-img-hover' src={GalleryImg1} alt="" />
               <img  className='rounded-[8px]  sm:w-[356px] sm:h-[295px] gallery-img-hover' src={GalleryJuiceImg} alt="" />
               </div>
            </div>
        </div>
           
        </>
  )
}

export default Gallery