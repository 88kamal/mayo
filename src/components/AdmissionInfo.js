import React from 'react'
import '../App.css'

function AdmissionInfo() {
    return (
        <div className='bg-[#DBDBDB]'>
            <div className=' container mx-auto px-4 p-10 '>
                <h1 className=' text-2xl md:text-3xl font-bold'>ADMISSION <span className=' text-red-600'>INFORMATION</span> </h1>
                <div>
                    <p className='my-5'>The Common Aptitude Analysis is held in the third week of November at Mayo College Girls' School at various locations in India. Additionally, it can be organised through the Indian Embassy there.</p>
                </div>
                <div>
                    <h1 className=' text-2xl md:text-3xl font-semibold my-5'>Steps for <span className=' text-red-600'>Admission Procedure</span></h1>
                </div>
                <div>
                    <div className=' bg-[#810101] step1'>
                        <div className=' flex'>
                            <p className='m-5 text-lg text-white'>You will need to fill out a registration form. Please send the registration fee along with the application</p>
                            <div className="circle bg-white md:p-5  rounded-full relative left-0 md:left-14 ">
                                <h1 className=' text-2xl md:text-7xl text-center text-[#810101]'>01</h1>
                            </div>
                        </div>
                    </div>

                    <div className=' bg-[#A40303] step2'>
                        <div className=' flex'>
                            <p className=' m-5 text-lg text-white'>You will need to fill out a registration form. Please send the registration fee along with the application</p>
                            <div className="circle bg-white  p-0 lg:p-5 rounded-full relative left-0 md:left-14 ">
                                <h1 className=' md:text-7xl text-[#810101]'>02</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#CE0C0C] step3'>
                        <div className=' flex'>
                            <p className=' m-5 text-lg text-white'>You will need to fill out a registration form. Please send the registration fee along with the application</p>
                            <div className="circle bg-white   p-0 lg:p-5   rounded-full relative left-0 md:left-14 ">
                                <h1 className=' md:text-7xl text-[#810101]'>03</h1>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-[#E91B1B] step4'>
                        <div className=' flex'>
                            <p className=' m-5 text-lg text-white'>You will need to fill out a registration form. Please send the registration fee along with the application</p>
                            <div className="circle bg-white p-0 lg:p-5  rounded-full relative md:left-[13em] ">
                                <h1 className=' md:text-7xl text-[#810101]'>04</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex my-10 ">
                    <button className="inline-flex text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Read More</button>

                </div>
            </div>

        </div>
    )
}

export default AdmissionInfo