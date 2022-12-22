import React, { useState } from 'react'
import '../App.css'
import { BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Navbar() {
    const [navbar, setNavbar] = useState(false);



    return (
        <div>

            <nav className="bg-[#990000]  fixed top-0 w-full z-30"  >
                <div className=' overlayNav '>
                    <div className="justify-between px-4 mx-auto  lg:max-w-7xl md:items-center md:flex md:px-8   ">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <div href={'/'} className="flex " >
                                    <h2 className="text-2xl font-bold text-white">
                                        <a href="tel:+917088138183">                                        <BsTelephoneFill size={25} />
</a>

                                    </h2>
                                    <h2 className="text-2xl font-bold text-white mx-4">

<a href='https://wa.me/+917088138183'><BsWhatsapp size={25} /></a>
                                        
                                    </h2>
                                </div>
                                <div className="md:hidden">
                                    <button
                                        className="p-2  rounded-md outline-none "
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                viewBox="0 0 20 20"
                                                fill="white"
                                                
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    className=' text-white'

                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="white"
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
                                    <li className="text-gray-100 hover:text-[#FFA700]">
                                        <Link to={'/'} >Home</Link>
                                    </li>
                                    {/* <li className="text-gray-600 hover:text-blue-600">
                                    <a >Blog</a>
                                </li> */}
                                    <li className="text-gray-100 hover:text-[#FFA700]">
                                        {/* <Link to={'/about'}>About us</Link> */}
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex w-full justify-center rounded-md text-white shadow-sm    ">
                                                    About us
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-t-4 border-[#FFA700]">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to={'/about'}
                                                                    className={classNames(
                                                                        active ? ' text-[#FFA700]' : 'text-black',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    About Mayo
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to={'/about'}
                                                                    className={classNames(
                                                                        active ? ' text-[#FFA700]' : 'text-black',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    About Mayo
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>

                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700]">
                                        {/* <Link to={'/admission'}>Admission</Link> */}
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex w-full justify-center rounded-md text-white shadow-sm    ">
                                                   Admission
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border-t-4 border-[#FFA700]">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to={'/admission'}
                                                                    className={classNames(
                                                                        active ? ' text-[#FFA700]' : 'text-black',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Admission
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to={'/howtoregister'}
                                                                    className={classNames(
                                                                        active ? ' text-[#FFA700]' : 'text-black',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                   How to register
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                      
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to={'/feeStructure'}
                                                                    className={classNames(
                                                                        active ? ' text-[#FFA700]' : 'text-black',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                   Fee Structure
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <Link
                                                                    to={'/withdrawalpolicy'}
                                                                    className={classNames(
                                                                        active ? ' text-[#FFA700]' : 'text-black',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Withdrawalpolicy
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                        
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700]">
                                        <Link to={'/facilities'}>Facilities</Link>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700]">
                                        <Link to={'/studentlife'}>Student life</Link>
                                    </li>
                                    <li className="text-gray-100 hover:text-[#FFA700]">
                                        <Link to={'/contactus'}>Contact us</Link>
                                        {/* <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                                    Options
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>

                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Account settings
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Support
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    License
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <form method="POST" action="#">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        type="submit"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block w-full px-4 py-2 text-left text-sm'
                                                                        )}
                                                                    >
                                                                        Sign out
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        </form>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu> */}

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