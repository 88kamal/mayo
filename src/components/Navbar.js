import React, { useContext, useState } from 'react'
import '../App.css'
import { BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'

function Navbar() {
    // const [isExpanded, toggleExpansion] = useState(false);
    const [navbar, setNavbar] = useState(false);



    return (
        <div>

            <nav className="bg-[#990000] sticky top-0 "  >
                <div className=' overlayNav '>
                    <div className="justify-between px-4 mx-auto   lg:max-w-7xl md:items-center md:flex md:px-8   ">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <div href={'/'} className="flex " >
                                    <h2 className="text-2xl font-bold text-white">
                                        <BsTelephoneFill />

                                    </h2>
                                    <h2 className="text-2xl font-bold text-white mx-4">


                                        <BsWhatsapp />
                                    </h2>
                                </div>
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-900 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    className=' text-white '

                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-9 h-9"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                    className=' text-white '

                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
                                    <li className="text-gray-100 hover:text-[#6366F1]">
                                        <div >Home</div>
                                    </li>
                                    {/* <li className="text-gray-600 hover:text-blue-600">
                                    <a >Blog</a>
                                </li> */}
                                    <li className="text-gray-100 hover:text-[#6366F1]">
                                        <div>About us</div>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#6366F1]">
                                        <div>Admission</div>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#6366F1]">
                                        <div>Facilities</div>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#6366F1]">
                                        <div>Student life</div>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#6366F1]">
                                        <div>Conact us</div>
                                    </li>





                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar