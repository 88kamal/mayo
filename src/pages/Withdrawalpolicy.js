import React, { useEffect } from 'react'
import Layout from '../components/Layout'

function Withdrawalpolicy() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout className="  ">

            <div className='  bg-[#990000] w-full h-[120em]  '>
                <div className='container mx-auto '>
                    <div className=' flex justify-center'>
                        <img class="md:max-w-[100%] max-w-[90%] h-auto my-[92px] md:my-[139px]" src="image2/Pasted Graphic 3.jpg" alt="image description" />
                    </div>
                </div>


                <section className="bg-white dark:bg-gray-900 -mt-[4em]">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="title-font sm:text-4xl text-3xl  font-bold text-gray-900 uppercase mb-5">About the
                                <span className='text-[#990000]'> WITHDRAWAL POLICY</span>
                            </h1>
                            <h1 className=" mb-5 font-medium">WITHDRAWAL POLICY</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-[20px] dark:text-gray-400 text-justify">The Mayo Girls College School requires a minimum of three months' notice for withdrawals.
                                If a withdrawal is made in April through July, the school costs will be prorated in half.
                                Full costs will be assessed for withdrawals made during and after August.
                                The fees will be assessed until JUNE for withdrawals from Classes X and XII.
                                The Principal's choice in this matter will be final.
                            </p>

                        </div>
                        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                            <img className=' md:w-[80%]' src="image2/Pasted Graphic 4.jpg" alt="mockup" />
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Withdrawalpolicy