import React from 'react'
import '../App.css'

function SimilarSchool() {
    return (
        <div>
            <section className="text-gray-600 body-font bg-[#DBDBDB]">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-10">
                        <div className="lg:w-1/2 w-full mb-2 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl title-font mb-2 text-gray-900 font-bold">SIMILAR SCHOOL <span className=' text-red-700'>OPTIONS</span></h1>
                            {/* <div className="h-1 w-20 bg-purple-500 rounded" /> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl h-[33em] box__shadow ">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="img/rectangle-95@2x.png" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Scindia Kanya Vidyalaya</h2>
                                <p className="leading-relaxed text-base text-justify">Scindia Kanya Vidyalaya is a premium girls school that help children to grow both academically and personally. There
                                    is a 40 % chance for your child to study here </p>
                                <div className=' text-center my-10'>
                                    <button type="submit" className="text-white bg-[#FFA700] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl box__shadow">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="img/rectangle-98@2x.png" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Ecole Globale International
                                    Girls school</h2>
                                <p className="leading-relaxed text-base text-justify">Eco Globale has an excellent academic record. It offers foreign exchange programs, earning them better opportunities. You still have 41% chance to get admission</p>
                                <div className=' text-center my-4'>
                                    <button type="submit" className="text-white bg-[#FFA700] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </div>
                            </div>
                        </div>

                        
                        <div className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-2xl h-[33em] box__shadow">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="img/rectangle-101@2x.png" alt="content" />

                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4 text-center">Welham Girls School</h2>
                                <p className="leading-relaxed text-base text-justify">Scindia Kanya Vidyalaya is a premium girls school that help children to grow both academically and personally. There
                                    is a 40 % chance for your child to study here </p>
                                <div className=' text-center my-10'>
                                    <button type="submit" className="text-white bg-[#FFA700] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-1/4 md:w-1/2 p-4 w-full">
                            <div className="bg-gray-100 p-6 rounded-2xl box__shadow">
                                {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="img/" alt="content" /> */}
                                <h1 className=' text-center font-bold'>APPLY FOR
                                    ADMISSIONS</h1>

                                <div className='my-[109px]'>
                                    <form>

                                        <div className="mb-6">

                                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />

                                        </div>
                                        <div className="mb-6">

                                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />

                                        </div>
                                        <div className="mb-6">

                                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>

                                        <div className=' text-center '>
                                            <button type="submit" className="text-white bg-[#FFA700] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SimilarSchool