import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css'
// import '../../style/hero.css'
import Navbar from './Navbar';
const handleDragStart = (e) => e.preventDefault();

function Hero() {
    const items = [
        <img src="/img/rectangle-21@2x.png" onDragStart={handleDragStart} role="presentation" />,
        <img src="/img/Pasted Graphic_1.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img src="/img/Pasted Graphic 2_1.jpg" onDragStart={handleDragStart} role="presentation" />,
    ];

    return (
        <div>
            <div className='background1 my-[72px] md:my-[64px]'>
                {/* <Navbar/> */}
                <section className="overlay">
                    <div className='text-gray-600 body-font'>
                        <div className="container mx-auto flex px-5 py-52 md:flex-row flex-col items-center">
                            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
                                <h1 className="title-font sm:text-6xl text-5xl md:text-7xl mb-4 text-left  font-bold text-white">MAYO GIRLS
                                    <br className="hidden lg:inline-block" /> SCHOOL
                                </h1>
                                <p className="mb-8 leading-relaxed text-white text-2xl text-left">Know about Mayo College Girls’ School</p>
                                <div className=" ">
                                    <button className=" text-white bg-[#FFA700]  border-0 py-2 px-6 focus:outline-none  rounded text-lg">Know more</button>

                                </div>
                            </div>
                            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-[#ecb5b547] p-5 rounded-2xl border-2 form__mobile" style={{
                                backdropFilter: 'blur(1px)'
                            }}>
                                {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}

                                <form>
                                    <div className=' text-center'>
                                        <h1 className=' my-5 text-white md:text-black font-bold text-2xl'>APPLY FOR ADMISSIONS </h1>
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" id="name" className="bg-[#e3e0e0] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input__mobile" placeholder="name" required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="email" id="email" className="bg-[#e3e0e0] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input__mobile" placeholder="name@flowbite.com" required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="password" id="password" className="bg-[#e3e0e0] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input__mobile" required />
                                    </div>
                                    <div className=' text-center'>
                                        <button type="submit" className="text-white bg-[#FFA700]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn__mobile">Submit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>

                </section>
            </div>

        </div>

        // <div>
        //         <AliceCarousel mouseTracking items={items} />

        // </div>
    )
}

export default Hero