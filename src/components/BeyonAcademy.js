import React from 'react'

function BeyonAcademy() {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#990000] p-5">
                <div className="container px-5 py-5 md:py-10 mx-auto ">
                    <div className="flex flex-wrap w-full md:mb-10">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-3xl  title-font mb-2 text-[#03001B] font-bold ">BEYOND <span className=' text-white'>ACADEMICS</span> </h1>
                            {/* <div className="h-1 w-20 bg-purple-500 rounded" /> */}
                        </div>

                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-2 rounded-lg shadow-2xl">
                                <img className=" rounded w-full object-cover object-center " src="img/rectangle-34@2x.png" alt="content" />
                            </div>
                            <h1 className='text-center text-white my-5'>jAMILA SINGH HOUSE
                                DAY</h1>
                            <div className="flex mt-[30px] md:mt-[64px] justify-center  ">
                                <button className=" text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Read More</button>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-2 rounded-lg shadow-2xl">
                                <img className=" rounded w-full object-cover object-center " src="img/rectangle-35@2x.png" alt="content" />

                            </div>
                            <h1 className='text-center text-white my-5'>SILVER JUBLEE COMMEMORATIVE YOUNG THINKERS CONCLAVE</h1>
                            <div className="flex  my-10  justify-center ">
                                <button className=" text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Read More</button>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-2 rounded-lg mt-[-26px] md:mt-0">
                                <img className=" rounded w-full object-cover object-center " src="img/rectangle-40@2x.png" alt="content" />
                            </div>
                            <h1 className='text-center  text-white my-5'>MANCH PRAVESH</h1>
                            <div className="flex mt-[30px] md:mt-[64px] justify-center ">
                                <button className=" text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Read More</button>

                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-2 rounded-lg">
                                <img className=" rounded w-full object-cover object-center " src="img/rectangle-37@2x.png" alt="content" />

                            </div>
                            <h1 className='text-center text-white my-5 uppercase'>mcgsmun</h1>
                            <div className="flex md:mt-[62px]  justify-center ">
                                <button className=" text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none  rounded text-lg">Read More</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BeyonAcademy