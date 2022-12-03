import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

import Faqs from 'react-faq-component';

import '../App.css'
const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}
export default function Faq() {
    return (
        <div className="bg-[#990000] p-5">
            <div className=' container mx-auto '>
                <h1 className=' font-bold text-3xl  text-white text-left mx-2 md:mx-[5px]'>FAQ</h1>
            </div>
            {/* <div className="w-full">
                <div className="mx-auto w-full max-w-[80rem] rounded-2xl  p-2">
                <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[90em] faq__width bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[90em]  text-white bg-[#FBAB14]">
                                The school started on the 1st of August 1987.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[90em] faq__width bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Which Board does the school follow?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 w-full pt-4 pb-2 text-sm md:w-[90em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[90em] faq__width bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[90em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full my-2 justify-between md:w-[90em] faq__width bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[90em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>


                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full   my-2 justify-between md:w-[90em] faq__width bg-[#D9D9D9] px-4 py-2 text-left text-sm font-medium text-black hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-black`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm md:w-[90em] text-white bg-[#FBAB14]">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div> */}
            <div className=' container mx-auto '>
          <Faqs data={data} className='' />
        </div>
        </div>
    )
}
