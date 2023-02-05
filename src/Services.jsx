import React , {useState , useEffect , useRef} from 'react'
import GalleryPizzaImg from './assets/gallery-pizza-img.svg'
import LeftBtn from './assets/services-left-btn-img.svg'
import RightBtn from './assets/services-right-btn-img.svg'


const Services = () => {

 

    // size for responsiveness

    const [size, setSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })


    const windowDimension = () => {
        setSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    }



    useEffect(() => {

        window.addEventListener('resize', windowDimension)
        return () => window.removeEventListener('resize', windowDimension)

    }, [size])

  



    const servicesData1 = [
        {
            key : 1,
            title: " Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 300
        },
        {
            key : 2,
            title: " Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 768
        },
        {
            key : 3,
            title: " Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 1184
        },

        {
            key : 4,
            title: " Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 1184
        },
        {
            key : 5,
            title: " Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 1184
        },
        {
            key : 6,
            title: " Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 1184
        },
        {
            key : 7,
            title: " Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 1184
        },
    
       
    ]
// use ref

const focusPoint = useRef(null);

    

     


       const handleRightArrowClick = () =>{
        let width = focusPoint.current.clientWidth;
    focusPoint.current.scrollLeft = focusPoint.current.scrollLeft + width;
       }


       const handleLeftArrowClick = () =>{
        let width = focusPoint.current.clientWidth;
    focusPoint.current.scrollLeft = focusPoint.current.scrollLeft - (width);
      }

  return (
    <>
        <div id="ServicesRef" className=' lg:mr-[6rem] lg:pl-20 md:px-10 lg:px-20 p-3 '>
            {/* heading div */}
            <div className='flex flex-col items-center justify-center mt-20 pb-10'>
                <h1 className='font-bold text-[40px] ' >Services</h1>
                <p className='text-[20px]'>Here's what we offer</p>
            </div>

            <div className='relative flex '>
                <img className='absolute z-10 left-0 top-[199px]' onClick={handleLeftArrowClick} src={LeftBtn} alt="" />
                <img className='absolute z-10 right-0 lg:right-0 top-[199px]' onClick={handleRightArrowClick} src={RightBtn} alt="" />
             </div>

            {/* carousal starts */}
            <div ref={focusPoint} className='relative flex md:items-center md:justify-center lg:justify-between services-container overflow-hidden overflow-x-auto gap-20'>
            
                {/* card div starts*/}
              { servicesData1.map((data)=> (  <div key={data.key} className={` flex flex-col items-center  justify-center gap-5 services-card-box-shadow min-w-[340px] md:min-w-[354px] py-5 my-6 services-card-hover `}>
                    <p className='text-[40px] services-card-heading'>{data.title} {data.key} </p>
                    <img src={data.img} alt="" />
                    <div className='px-4'>
                        <ul className='services-ul '>
                           
                            {data.content}
                        </ul>
                    </div>
                   
                </div> ))}
            </div>
        </div>
    </>
  )
}

export default Services