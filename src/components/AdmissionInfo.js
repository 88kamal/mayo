import React from 'react'
import '../App.css'

function AdmissionInfo() {
    return (
        <div className='bg-[#DBDBDB] mobilestyle'>
            <div className=' container mx-auto px-4 p-10 '>
                <h1 className=' text-2xl md:text-3xl font-bold'>ADMISSION <span className=' text-red-600'>INFORMATION</span> </h1>
                <div>
                    <p className='my-5'>The Common Aptitude Analysis is held in the third week of November at Mayo College Girls' School at various locations in India. Additionally, it can be organised through the Indian Embassy there.</p>
                </div>
                <div>
                    <h1 className=' text-2xl md:text-3xl font-semibold my-1'>Steps for <span className=' text-red-600'>Admission Procedure</span></h1>
                </div>
                <div>
                    <div>
                        <img className='image1' src="img/Screenshot 2022-12-02 at 11.58.06 PM.png" alt="" />
                        <img className='image2' src="img/Screenshot 2022-12-03 at 12.04.36 AM.png" alt="" />
                    </div>

                </div>
                <div className="flex  ">
                    <button className="inline-flex text-white bg-[#FFA700] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Read More</button>

                </div>
            </div>

        </div>
    )
}

export default AdmissionInfo