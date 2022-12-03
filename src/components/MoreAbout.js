import React from 'react'
import '../App.css'

function MoreAbout() {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#990000]">
                <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center mobile__about md:mt-[-64px]">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
                        {/*<span> KNOW MORE ABOUT</span> 
MAYO COLLEGE GIRLS’ SCHOOL */}
                        <h1 className="title-font sm:text-xl text-[20px] md:text-4xl mb-4 font-bold text-left">                   <span className='text-[#03001B]'> KNOW MORE ABOUT</span>

                            <br className=" lg:inline-block" /><span className='text-white'>   MAYO COLLEGE GIRLS’ SCHOOL</span>

                        </h1>
                        <p className="mb-8 leading-relaxed text-white  text-justify">The General Council and Board of Governors' decision to establish an exclusive residential school for girls on the 46-acre field previously known as the Polo Ground and later used as a playground and farmland left a lasting impression on Mayo College's history.
                            The institution, the "Sister School" of Mayo College, works to realise the founders' original aim. The stone-laying ceremony took place on the 1st of August 1987.
                            The Mayo College Girls' School will strongly emphasise Indian values, dance, and theatre in the lives of its students. They will go out of their way to ensure that the Girls' School's ethos is infused with Indian traditions and culture while also considering the present and future difficulties.
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