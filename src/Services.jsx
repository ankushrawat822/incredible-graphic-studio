import React , {useState , useEffect} from 'react'
import GalleryPizzaImg from './assets/gallery-pizza-img.svg'
import LeftBtn from './assets/services-left-btn-img.svg'
import RightBtn from './assets/services-right-btn-img.svg'


const Services = () => {


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
            title: "Logo Design",
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
            title: "Logo Design",
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
            title: "Logo Design",
            img: "./servicees-logo-img.svg",
            content : <> <li>High Quality Creative</li>
            <li>Get in PNG/JPEG and PDF Format</li>
            <li>Unlimited Revisions</li>
            <li>AI or PSD File</li> </>,
            link : '',
            showSize : 1184
        },
    ]


  return (
    <>
        <div className='lg:mr-[6rem] lg:pl-20 md:px-10 lg:px-20 p-3 '>
            {/* heading div */}
            <div className='flex flex-col items-center justify-center mt-20 pb-10'>
                <h1 className='font-bold text-[40px] ' >Services</h1>
                <p className='text-[20px] font-bold'>Here's what we offer</p>
            </div>

            {/* carousal starts */}
            <div className='relative flex items-center justify-center lg:justify-between gap-3'>
             <div className='absolute w-full flex items-center justify-between top-[34%] '>
                <img src={LeftBtn} alt="" />
                <img src={RightBtn} alt="" />
             </div>
                {/* card div starts*/}
              { servicesData1.map((data)=> (  <div className={`flex flex-col items-center justify-center gap-5 services-card-box-shadow w-[340px] md:w-[354px] py-5 services-card-hover ${size.width > data.showSize ? '  ' : ' hidden '} `}>
                    <p className='text-[40px] services-card-heading'>{data.title}</p>
                    <img src={data.img} alt="" />
                    <div className='px-4'>
                        <ul className='services-ul '>
                            {/* <li>High Quality Creative</li>
                            <li>Get in PNG/JPEG and PDF Format</li>
                            <li>Unlimited Revisions</li>
                            <li>AI or PSD File</li> */}
                            {data.content}
                        </ul>
                    </div>
                    <button className='services-know-more-btn'>KNOW MORE</button>
                </div> ))}
            </div>
        </div>
    </>
  )
}

export default Services