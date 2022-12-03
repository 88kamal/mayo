import React from 'react'
import Layout from '../components/Layout'

function Admission() {
  return (
    <Layout className="  ">

      <div className='  bg-[#990000] w-full h-[120em]  '>
        <div className='container mx-auto '>
          <div className=' flex justify-center'>
            {/* <img className=" w-[100%] my-[139px]" src="image/Pasted Graphic_1.jpg" alt="" /> */}
            <img class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="image/Pasted Graphic 4_1.jpg" alt="image description" />
          </div>
        </div>
        <section className="text-gray-600 body-font bg-white -mt-[4em]">
          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 uppercase">About
                <span className='text-[#990000]'>Admission</span>
              </h1>
              <h1 className="">ADMISSION INFORMATION</h1>
              <p className="mb-8 leading-relaxed text-justify">The third week of November is always when the Common Aptitude Analysis for admission to Mayo College Girls' School is held at various locations in India. Additionally, it can be organised through the Indian Embassy there. The analysis analyses the applicant in English, Hindi, and mathematics to gauge their proficiency with those subjects as appropriate for their age. In August of the year before the desired admittance, parents are contacted.
                Only students who have registered for admission and are eligible based on their previous class of study are permitted to take the aptitude analysis.
                The lowest class is Class IV, and your child who has completed Class III and attends a school that teaches English, ideally, is eligible to take the Common Aptitude Analysis. Age restrictions are tightly upheld, and the parent is in charge of making the necessary arrangements for compliance.

              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center rounded md:w-[80%]" alt="hero" src="image/Pasted Graphic 5_1.jpg" />
            </div>
          </div>
        </section>


      </div>
    </Layout>
  )
}

export default Admission