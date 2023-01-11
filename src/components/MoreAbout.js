import React from 'react'
import '../App.css'

function MoreAbout() {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#990000] ">
                <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center mobile__about md:mt-[-64px]">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
                        {/*<span> KNOW MORE ABOUT</span> 
MAYO COLLEGE GIRLS’ SCHOOL */}
                        <h1 className="title-font sm:text-xl text-[20px] md:text-4xl mb-4 font-bold text-left mb-3">                   <span className='text-[#03001B]'> KNOW MORE ABOUT</span>

                            <br className=" lg:inline-block" /><span className='text-white'>   MAYO COLLEGE GIRLS’ SCHOOL</span>

                        </h1>
                        <div className="flex items-center mb-3">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                            <p className="ml-2 text-sm font-medium text-black ">165 reviews</p>
                        </div>
                        <p className="mb-8 leading-relaxed text-white  text-justify">Mayo College Girls School (MCGS) is a residential school for girls located in Ajmer, Rajasthan. It is definitely one of the best girls boarding school in India, imparting education since 1987. Mayo girls school has a legacy of producing some of the brightest minds in India. The school was started with the idea of nurturing young minds from different communities and backgrounds.
                            Mayo Girls School has an excellent record of academic excellence. It was recently awarded an "A" grade by the O-level Examinations Council (OLEC). In addition to this, Mayo College Girls School has produced some of the best leaders who have gone on to be successful in life through their academic achievements.
                            The massive campus of Mayo College Girls School has the best amenities and state-of-the-art infrastructure. This top girls residential schoollin India is recognized for its legacy, heritage, and tradition. MCGS is affiliated with CISCE and CAIE (Cambridge Board), which makes it a perfect fit for the holistic development of your child.

                        </p>
                        <div className="md:flex md:justify-center  ">
                            <button className=" image1  text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Read More</button>
                            <img className=" image2 moreabout object-cover object-center rounded" alt="hero" src="img/rectangle-20@2x.png" />


                        </div>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img className=" image1 moreabout object-cover object-center rounded" alt="hero" src="img/rectangle-20@2x.png" />
                        <button className=" image2 relative right-[24px] text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Read More</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MoreAbout