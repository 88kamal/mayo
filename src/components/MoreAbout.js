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
                        <div className="flex items-center mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-yellow-400" xmlnsXlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="grad1">
        <stop offset="100%" stop-color="#ffaa00"/>
        <stop offset="50%" stop-color="grey"/>
      </linearGradient>
    </defs>
    <path fill="url(#grad1)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-yellow-400 mx-1" xmlnsXlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="grad2">
        <stop offset="100%" stop-color="#ffaa00"/>
        <stop offset="50%" stop-color="grey"/>
      </linearGradient>
    </defs>
    <path fill="url(#grad2)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-yellow-400 mx-1" xmlnsXlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="grad3">
        <stop offset="100%" stop-color="#ffaa00"/>
        <stop offset="50%" stop-color="grey"/>
      </linearGradient>
    </defs>
    <path fill="url(#grad3)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-yellow-400 mx-1" xmlnsXlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="grad3">
        <stop offset="100%" stop-color="#ffaa00"/>
        <stop offset="50%" stop-color="grey"/>
      </linearGradient>
    </defs>
    <path fill="url(#grad3)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="w-9 h-9 text-yellow-400 mx-1" xmlnsXlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 32 32">
    <defs>
      <linearGradient id="grad">
        <stop offset="50%" stop-color="#ffaa00"/>
        <stop offset="50%" stop-color="white"/>
      </linearGradient>
    </defs>
    <path fill="url(#grad)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
  </svg>
                            
                            <p className="ml-2 text-lg font-medium text-white ">165 reviews</p>
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