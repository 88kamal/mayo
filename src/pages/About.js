import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout className="  ">

      <div className='  bg-[#990000] w-full h-[120em]  '>
        <div className='container mx-auto '>
          <div className=' flex justify-center'>
            <img class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="image/Pasted Graphic_1.jpg" alt="image description" />
          </div>
        </div>
        <section className="bg-white  -mt-[4em]">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 uppercase">About
                <span className='text-[#990000]'> Mayo School</span>
              </h1>
              <p className="max-w-2xl mb-6  text-black lg:mb-8 md:text-lg lg:text-[15px] text-justify">The General Council and Board of Governors' decision to establish an exclusive residential school for girls on the 46-acre field—previously known as the Polo Ground and later used as a playground and farmland—left a lasting impression on Mayo College's history.
                The institution, the "Sister School" of Mayo College, works to realise the founders' original aim. The stone-laying ceremony took place on the 1st of August 1987.
                The Mayo College Girls' School will strongly emphasise Indian values, dance, and theatre in the lives of its students. They will go out of their way to ensure that the Girls' School's ethos is infused with Indian traditions and culture while also considering the present and future difficulties.
                The school nurtures each child's uniqueness and instils a feeling of accountability and empathy for others. They equip students to take on new challenges and encourage them to pursue originality because there is pioneering in the realm of ideas. A rich environment is available to her so she can hone her athletic prowess and abilities in dance, music, art, writing, and communication. The school is adamant that a child's education is crucial.</p>

            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
              <img className=' md:w-[80%]' src="image/Pasted Graphic 1.jpg" alt="mockup" />
            </div>
          </div>
        </section>


      </div>
    </Layout>
  )
}

export default About